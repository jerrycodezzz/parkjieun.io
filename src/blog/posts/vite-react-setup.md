# Vite로 React 개발환경 구축하기

React 프로젝트를 시작할 때 어떤 도구를 사용할지 고민이 많으시죠? 이번 글에서는 빠르고 현대적인 빌드 도구인 Vite를 사용해서 React 개발환경을 구축하는 방법을 알아보겠습니다.

## Vite란?

Vite(비트)는 Vue.js 창시자인 Evan You가 만든 차세대 프론트엔드 빌드 도구입니다. 기존의 Webpack 기반 도구들보다 훨씬 빠른 개발 서버와 빌드 속도를 제공합니다.

### Vite의 주요 장점

1. **빠른 개발 서버**: ES 모듈을 활용한 즉시 시작
2. **빠른 HMR**: Hot Module Replacement가 매우 빠름
3. **간단한 설정**: 복잡한 설정 없이 바로 사용 가능
4. **현대적인 기본값**: ES6+, TypeScript 등을 기본 지원

## 프로젝트 생성하기

### 1. Vite로 React 프로젝트 생성

```bash
# npm 사용시
npm create vite@latest my-react-app -- --template react

# yarn 사용시
yarn create vite my-react-app --template react

# pnpm 사용시
pnpm create vite my-react-app --template react
```

### 2. 프로젝트 폴더로 이동 및 의존성 설치

```bash
cd my-react-app
npm install
```

### 3. 개발 서버 실행

```bash
npm run dev
```

## 생성된 프로젝트 구조

```
my-react-app/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## 주요 설정 파일들

### vite.config.js

```javascript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // 개발 서버 포트 설정
    open: true, // 서버 시작시 브라우저 자동 열기
  },
  build: {
    outDir: "dist", // 빌드 출력 디렉토리
    sourcemap: true, // 소스맵 생성
  },
});
```

### package.json 스크립트

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  }
}
```

## 추가 설정하기

### 1. 절대 경로 설정

```javascript
// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@utils": path.resolve(__dirname, "./src/utils"),
    },
  },
});
```

이제 컴포넌트를 다음과 같이 import할 수 있습니다:

```javascript
// 기존 방식
import Button from "../../components/Button";

// 절대 경로 사용
import Button from "@components/Button";
```

### 2. 환경 변수 설정

Vite는 `.env` 파일을 자동으로 로드합니다.

```bash
# .env
VITE_API_URL=https://api.example.com
VITE_APP_TITLE=My React App
```

```javascript
// 컴포넌트에서 사용
const apiUrl = import.meta.env.VITE_API_URL;
const appTitle = import.meta.env.VITE_APP_TITLE;
```

**주의**: Vite에서는 환경 변수 이름이 `VITE_`로 시작해야 클라이언트에서 접근 가능합니다.

### 3. CSS 전처리기 설정

#### Sass/SCSS 사용하기

```bash
npm install -D sass
```

```javascript
// vite.config.js
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/variables.scss";`,
      },
    },
  },
});
```

#### Tailwind CSS 설정

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

```javascript
// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

```css
/* src/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 유용한 플러그인들

### 1. React Refresh 플러그인

```bash
npm install -D @vitejs/plugin-react-refresh
```

### 2. PWA 플러그인

```bash
npm install -D vite-plugin-pwa
```

```javascript
// vite.config.js
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
      },
    }),
  ],
});
```

### 3. Bundle Analyzer

```bash
npm install -D rollup-plugin-visualizer
```

```javascript
// vite.config.js
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [
    react(),
    visualizer({
      filename: "dist/stats.html",
      open: true,
    }),
  ],
});
```

## 배포하기

### 1. 빌드

```bash
npm run build
```

### 2. 빌드 결과 미리보기

```bash
npm run preview
```

### 3. Vercel 배포

```bash
npm install -g vercel
vercel
```

### 4. Netlify 배포

`netlify.toml` 파일 생성:

```toml
[build]
  publish = "dist"
  command = "npm run build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## CRA와의 비교

| 특징                | Create React App    | Vite              |
| ------------------- | ------------------- | ----------------- |
| 개발 서버 시작 속도 | 느림 (10-30초)      | 매우 빠름 (1-2초) |
| HMR 속도            | 보통                | 매우 빠름         |
| 빌드 속도           | 보통                | 빠름              |
| 설정의 복잡성       | 숨겨짐 (eject 필요) | 간단하고 명확     |
| 번들 크기           | 보통                | 최적화됨          |

## 마무리

Vite는 현대적인 React 개발을 위한 훌륭한 도구입니다. 빠른 개발 경험과 간단한 설정으로 생산성을 크게 향상시킬 수 있습니다.

특히 다음과 같은 경우에 Vite를 추천합니다:

- ✅ 빠른 개발 서버가 필요한 경우
- ✅ 복잡한 설정 없이 바로 개발을 시작하고 싶은 경우
- ✅ 최신 JavaScript 기능들을 사용하고 싶은 경우
- ✅ TypeScript를 기본으로 사용하고 싶은 경우

다음 프로젝트에서는 Vite를 사용해보시는 것을 추천드립니다!

---

_Vite 사용 중 궁금한 점이 있다면 댓글로 남겨주세요! 🚀_
