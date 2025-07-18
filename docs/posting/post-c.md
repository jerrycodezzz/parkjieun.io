# Next.js vs Vite React 구조 차이와 CSS 파일 중복 문제 해결기

## 들어가며

최근 프로젝트를 정리하면서 이상한 점을 발견했다. `app/globals.css`, `styles/globals.css`, `src/index.css`처럼 유사한 CSS 파일들이 세 군데에 흩어져 있었고, 어떤 것이 실제로 쓰이고 있는지 혼란스러웠다.

처음엔 단순히 스타일 충돌 문제라고 생각했지만, 분석을 거치며 더 근본적인 구조 문제 — **Next.js와 Vite 기반 React가 혼재된 프로젝트 구조** — 에 닿게 되었다.

이 글에서는 내가 겪은 상황을 바탕으로, **Next.js와 Vite React의 구조 차이**, **CSS 전역 스타일 파일 중복 문제**, 그리고 **정리 전략**을 정리해본다.

---

## 문제 상황: 혼재된 구조와 CSS 중복

### ✅ 등장한 세 가지 CSS 파일

| 파일 경로            | 특징                                 | 용도                                                  |
| -------------------- | ------------------------------------ | ----------------------------------------------------- |
| `app/globals.css`    | Tailwind 기본 설정 포함              | **Next.js App Router**에서 전역 스타일용 (사용 안 됨) |
| `styles/globals.css` | 유사한 이름이지만 Tailwind 설정 누락 | 어디에서도 import되지 않음 → **삭제 대상**            |
| `src/index.css`      | `@import 'tailwindcss';`만 포함      | **Vite 기반 React 앱에서 실제 사용 중**               |

### ✅ 코드 구조 내 실제 연결 상태

- `src/main.tsx` → `import './index.css';` 로 실제 사용 중
- `index.html` → `<script type="module" src="/src/main.tsx">`
- 반면,

  - `src/index.js`는 사용되지 않음 (이 안에서 `app/globals.css`를 import)
  - `app/layout.tsx`도 Next.js 구조로 존재하지만 실행 경로에 없음

---

## 구조 분석: Next.js vs Vite React

| 항목      | Vite React                             | Next.js                                                 |
| --------- | -------------------------------------- | ------------------------------------------------------- |
| 진입점    | `main.tsx`, `index.html`에서 직접 정의 | 내부 자동 처리 (예: `pages/_app.tsx`, `app/layout.tsx`) |
| 라우팅    | `react-router-dom` 직접 설정           | 파일 기반 자동 라우팅 (`pages/`, `app/`)                |
| 전역 CSS  | `index.css`에서 직접 import            | `app/globals.css` 또는 `_app.tsx`에서 import            |
| 실행 구조 | HTML + JS 구조 명확함                  | 내부적으로 Node.js 서버 및 빌드 처리 포함               |

→ 즉, **Next.js는 프레임워크로서 모든 진입점과 스타일 적용 구조를 숨기고 자동화**한 반면,
**Vite는 개발자가 모든 구조를 직접 구성**해야 한다.

---

## 트러블슈팅 및 해결 전략

### 문제 1. CSS 중복 파일 관리

- ✅ 유지: `src/index.css` → 실제 실행 중이며 Vite React 기준 진입점임
- ❌ 삭제: `styles/globals.css` → 어디서도 쓰이지 않음, Tailwind 설정도 누락
- 🔁 통합: `app/globals.css` → 내용은 유효하므로 `src/index.css`에 병합 필요

### 문제 2. 구조 정리 방향

#### 👉 선택지: Vite React 구조로 통일

- `app/` 폴더 제거 또는 무시
- `src/main.tsx` + `src/index.css` 중심 구조 유지
- Tailwind 설정 (`@tailwind base`, `@tailwind components`, `@tailwind utilities`)을 `index.css`에 확실히 추가

#### ✨ 예시: 통합 후의 index.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --brand-color: #222;
}
```

---

## 결론: 구조와 실행 기준을 명확히 하자

- **Next.js와 Vite는 구조 설계 자체가 다르며**, 동시에 사용하면 진입점과 CSS 설정 충돌이 발생할 수 있다.
- **실제로 사용하는 구조 기준으로 불필요한 파일과 설정을 제거**해야 유지보수성이 올라간다.
- CSS는 한 군데에서만 관리되도록 통합하고, 실제 진입 파일(`main.tsx`)과 연결된 것만 유지해야 한다.

---

## 추천 정리 순서 체크리스트 ✅

1. [ ] Vite 구조인지 Next.js 구조인지 확정
2. [ ] 사용하지 않는 `app/`, `src/index.js` 제거
3. [ ] CSS는 `src/index.css`로 통일하고 필요한 내용 병합
4. [ ] Tailwind 설정이 누락되지 않았는지 확인
5. [ ] `vite.config.ts` 등에서 설정 충돌 없는지 점검

---

## 해시태그

\#React #NextJS #Vite #CSS중복 #글로벌스타일 #구조정리 #mainTSX #TailwindCSS
