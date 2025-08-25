# 첫 번째 React 프로젝트 후기

React를 처음 배우면서 포트폴리오 사이트를 만들어보았습니다. 이 과정에서 배운 점들과 겪었던 어려움들을 정리해보려고 합니다.

## 프로젝트 개요

이번 프로젝트는 개인 포트폴리오 사이트를 React로 구현하는 것이었습니다. 주요 기능은 다음과 같습니다:

- 반응형 디자인
- 부드러운 스크롤 애니메이션
- 프로젝트 소개 섹션
- 개인 소개 페이지

## 사용한 기술 스택

### Frontend

- **React**: 컴포넌트 기반 UI 라이브러리
- **Vite**: 빠른 개발 서버와 빌드 도구
- **Tailwind CSS**: 유틸리티 우선 CSS 프레임워크
- **Framer Motion**: 애니메이션 라이브러리

### 개발 도구

- **ESLint**: 코드 품질 관리
- **Prettier**: 코드 포맷팅

## 배운 점들

### 1. 컴포넌트 설계의 중요성

처음에는 모든 코드를 하나의 컴포넌트에 작성했지만, 점점 관리가 어려워졌습니다. 이후 기능별로 컴포넌트를 분리하면서 코드의 재사용성과 가독성이 크게 향상되었습니다.

```jsx
// Before: 모든 것이 하나의 컴포넌트에
function App() {
  return <div>{/* 헤더, 메인, 푸터 모든 코드가 여기에... */}</div>;
}

// After: 기능별로 분리
function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
```

### 2. State 관리

useState를 사용해서 상태를 관리하는 방법을 익혔습니다. 특히 네비게이션 바의 활성 섹션을 표시하는 기능을 구현하면서 상태 관리의 중요성을 깨달았습니다.

```jsx
const [activeSection, setActiveSection] = useState("hero");

useEffect(() => {
  // Intersection Observer를 사용한 섹션 감지
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveSection(entry.target.id);
      }
    });
  });

  // 섹션들을 관찰 대상으로 등록
  sections.forEach((section) => {
    const element = document.getElementById(section);
    if (element) observer.observe(element);
  });
}, []);
```

### 3. 애니메이션의 활용

Framer Motion을 사용해서 페이지에 생동감을 더했습니다. 적절한 애니메이션은 사용자 경험을 크게 향상시킨다는 것을 배웠습니다.

```jsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}>
  <h2>제목</h2>
</motion.div>
```

## 어려웠던 점들

### 1. 반응형 디자인

다양한 화면 크기에 대응하는 것이 생각보다 어려웠습니다. Tailwind CSS의 반응형 클래스를 활용해서 해결했지만, 처음에는 많은 시행착오가 있었습니다.

### 2. 성능 최적화

이미지 최적화와 컴포넌트 렌더링 최적화에 대해 고민해야 했습니다. 아직 완벽하지는 않지만, 기본적인 최적화 방법들을 적용해보았습니다.

## 앞으로의 계획

1. **테스트 코드 작성**: Jest와 React Testing Library를 사용한 테스트 코드 작성
2. **상태 관리 라이브러리**: 프로젝트가 커지면 Redux나 Zustand 도입 고려
3. **TypeScript 도입**: 타입 안정성을 위한 TypeScript 적용
4. **PWA 적용**: 오프라인 지원과 앱 설치 기능 추가

## 마무리

첫 번째 React 프로젝트를 통해 많은 것을 배울 수 있었습니다. 특히 컴포넌트 기반 개발의 장점과 현대적인 프론트엔드 개발 도구들의 편리함을 경험할 수 있었습니다.

앞으로도 계속 학습하면서 더 나은 코드를 작성하도록 노력하겠습니다!

---

_이 글이 도움이 되셨다면 댓글로 피드백을 남겨주세요! 😊_
