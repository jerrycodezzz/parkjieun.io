// [advice from AI] 포트폴리오 프로젝트 데이터를 정의합니다
export const projects = [
  {
    id: 1,
    slug: "jerry-ui-kit",
    title: "Jerry UI Kit",
    description:
      "React + TypeScript + Tailwind CSS 기반의 재사용 가능한 UI 컴포넌트 라이브러리. 체계적인 디자인 토큰 시스템과 고급 컴포넌트 패턴을 적용한 엔터프라이즈급 UI Kit",
    thumbnail:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=800&fit=crop",
    ],
    tech: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "Storybook",
      "Design Tokens",
      "NPM Package",
      "Compound Components",
      "Custom Hooks",
    ],
    features: [
      "체계적인 디자인 토큰 시스템 (색상, 타이포그래피, 스페이싱)",
      "8개 핵심 컴포넌트 (Button, Card, Table, Input, Select, Textarea, Checkbox)",
      "Compound Component 패턴 적용 (Card, Modal)",
      "고급 Table 컴포넌트 (정렬, 필터링, 페이지네이션, 행 선택)",
      "Interactive Storybook 문서화",
      "NPM 패키지 배포 및 재사용성",
      "완전한 TypeScript 지원 및 타입 안전성",
      "접근성(a11y) 및 반응형 디자인 고려",
    ],
    demoUrl: "http://localhost:6006", // Storybook URL
    githubUrl: "https://github.com/jerrycodezzz/frontend-template",
    category: "UI Component Library",
    year: "2025",
    // [advice from AI] Jerry UI Kit 상세 프로젝트 정보를 추가합니다
    detailed: {
      // 1. 프로젝트 기본 정보
      projectInfo: {
        duration: "2024.12 ~ 2025.01 (2개월)",
        role: "Frontend Developer",
        contribution: "100% (개인 프로젝트)",
      },
      // 2. 핵심 설명 (What, Why, How)
      coreDescription: {
        what: "React와 Tailwind CSS를 기반으로 한 재사용 가능한 UI 컴포넌트 라이브러리입니다. 일관된 디자인 시스템과 뛰어난 개발자 경험을 제공합니다.",
        why: "프로젝트마다 반복되는 UI 컴포넌트 개발을 효율화하고, 일관된 디자인 시스템을 통해 브랜드 정체성을 강화하며, 접근성과 사용성을 보장하기 위해 개발했습니다.",
        how: "Design Token 시스템을 구축하여 색상/타이포그래피를 체계화하고, Compound Component 패턴으로 유연한 API를 설계했으며, Storybook으로 문서화하고 NPM으로 배포하여 재사용성을 극대화했습니다.",
      },
      // 3. 기술 스택 (그룹화)
      techStack: {
        frontend: ["React", "TypeScript", "Tailwind CSS"],
        tools: ["Storybook", "Vite", "ESLint", "Prettier"],
        deployment: ["NPM", "GitHub Actions", "Vercel"],
        testing: ["Jest", "React Testing Library", "Chromatic"],
      },
      // 4. 시스템 아키텍처
      architecture: {
        overview:
          "모듈형 컴포넌트 아키텍처를 기반으로, 각 컴포넌트는 독립적으로 작동하면서도 일관된 디자인 시스템을 공유합니다. Design Token을 중심으로 한 확장 가능한 구조를 채택했습니다.",
        components: [
          {
            name: "Design Token System",
            description:
              "colors.ts, typography.ts, spacing.ts로 구성된 중앙화된 디자인 토큰 관리 시스템",
          },
          {
            name: "Core Components",
            description:
              "Button, Input, Modal, Table 등 기본 UI 컴포넌트들의 핵심 구현체",
          },
          {
            name: "Compound Components",
            description:
              "Modal.Header, Card.Body 등 복합 컴포넌트 패턴으로 구현된 고급 컴포넌트들",
          },
          {
            name: "Custom Hooks",
            description:
              "useModal, useTable 등 컴포넌트 상태 관리를 위한 재사용 가능한 훅들",
          },
          {
            name: "Storybook Integration",
            description:
              "각 컴포넌트의 사용법과 변형을 문서화하는 통합 스토리북 시스템",
          },
        ],
      },
      // 5. 트러블슈팅
      troubleshooting: [
        {
          problem:
            "Tailwind CSS 클래스가 NPM 패키지에서 제대로 적용되지 않는 문제가 발생했습니다. 소비 프로젝트에서 UI Kit의 스타일이 누락되어 컴포넌트가 의도한 대로 렌더링되지 않았습니다.",
          solution:
            "package.json의 exports 필드에 styles.css를 명시적으로 추가하고, tsup.config.ts에서 CSS 파일이 빌드 과정에서 삭제되지 않도록 clean: false 설정을 적용했습니다. 또한 소비 프로젝트의 tailwind.config에 UI Kit 경로를 content에 포함하도록 가이드를 제공했습니다.",
        },
        {
          problem:
            "Modal 컴포넌트에서 포커스 트랩이 제대로 작동하지 않아 Tab 키로 Modal 외부 요소에 포커스가 이동하는 접근성 문제가 있었습니다.",
          solution:
            "createPortal을 사용하여 Modal을 body 레벨에서 렌더링하고, useEffect로 포커스 가능한 요소들을 감지하여 첫 번째와 마지막 요소에서 Tab 키 순환을 구현했습니다. 또한 ESC 키 이벤트와 배경 클릭 감지를 추가하여 완전한 키보드 접근성을 보장했습니다.",
        },
        {
          problem:
            "Storybook에서 Modal 컴포넌트가 Portal로 렌더링되어 Canvas에서는 보이지 않고, Docs에서는 자동으로 열려서 사용자 경험이 일관되지 않는 문제가 있었습니다.",
          solution:
            "Storybook의 context.viewMode를 감지하여 Canvas에서는 인라인 렌더링으로 컴포넌트 구조를 바로 보여주고, Docs에서는 실제 Portal 방식으로 버튼 클릭을 통해 열리도록 분기 처리를 구현했습니다.",
        },
      ],
      // 6. 주요 성과
      achievements: [
        "NPM에 성공적으로 배포하여 다른 프로젝트에서 재사용 가능한 패키지로 구현",
        "WCAG 2.1 Level AA 접근성 기준을 준수하는 컴포넌트 구현",
        "Compound Component 패턴을 통한 유연하고 확장 가능한 API 설계",
        "완전한 TypeScript 지원으로 개발자 경험(DX) 향상",
        "Storybook을 통한 체계적인 컴포넌트 문서화 및 시각적 테스팅",
      ],
      // 7. 향후 계획
      futurePlans: [
        "Form Validation 시스템 구축 및 관련 컴포넌트 확장",
        "Dark Mode 지원을 위한 테마 시스템 구현",
        "React Hook Form과의 통합을 위한 전용 컴포넌트 개발",
        "애니메이션 라이브러리 통합으로 더 풍부한 인터랙션 제공",
        "모바일 최적화를 위한 터치 제스처 지원 추가",
      ],
    },
  },
  {
    id: 2,
    slug: "whisper-speaker-diarization-stt",
    title: "Whisper 화자분리 STT 시스템",
    description:
      "지능형 동적 파라미터 조정과 고급 화자분리 기능을 갖춘 차세대 음성 인식 시스템. OpenAI Whisper와 Pyannote.audio를 통합하여 완전 자동화된 STT+화자분리 파이프라인을 제공하는 엔터프라이즈급 음성 처리 솔루션",
    thumbnail:
      "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=800&fit=crop",
    ],
    tech: [
      "FastAPI",
      "Vue.js",
      "PostgreSQL",
      "OpenAI Whisper",
      "Pyannote.audio",
      "SQLAlchemy",
      "Pydantic",
      "TypeScript",
      "Element Plus",
      "Python",
      "HuggingFace",
      "Librosa",
    ],
    features: [
      "완전 동적 파라미터 시스템 (오디오 특성 기반 자동 최적화)",
      "고급 화자분리 (Pyannote 3.1 + Whisper 통합 처리)",
      "연속 화자 병합 (같은 화자의 연속 발화 자동 결합)",
      "지능형 화자 재정렬 (항상 1, 2, 3... 순서 보장)",
      "고급 겹침 처리 (다중 화자 구간 분할 및 정렬)",
      "타임라인 동기화 (STT-화자분리 결과 자동 정렬)",
      "I/O 최적화 (오디오 캐시, 단일 로딩 처리)",
      "실시간 진행률 모니터링 및 성능 지표 (WER, CER)",
      "백그라운드 태스크 처리 및 폴링 기반 상태 관리",
      "PostgreSQL 기반 실험 데이터 관리 및 히스토리 추적",
    ],
    demoUrl: "http://localhost:5173", // Frontend URL
    githubUrl: "https://github.com/jerrycodezzz/whisper",
    category: "AI/ML Audio Processing",
    year: "2025",
    // [advice from AI] 상세 프로젝트 정보를 추가합니다
    detailed: {
      // 1. 프로젝트 기본 정보
      projectInfo: {
        duration: "2024.10 ~ 2025.01 (4개월)",
        role: "Full Stack Developer",
        contribution: "100% (개인 프로젝트)",
      },
      // 2. 핵심 설명 (What, Why, How)
      coreDescription: {
        what: "OpenAI Whisper와 Pyannote.audio를 통합한 지능형 음성 인식 및 화자분리 시스템으로, 동적 파라미터 조정과 고급 후처리 기능을 제공하는 엔터프라이즈급 STT 솔루션",
        why: "기존 STT 시스템의 화자분리 정확도 한계와 수동 파라미터 조정의 비효율성을 해결하고, 실제 업무에서 바로 사용 가능한 고품질 음성 처리 파이프라인의 필요성",
        how: "FastAPI 기반 비동기 처리 아키텍처와 PostgreSQL을 활용한 실험 데이터 관리, Vue.js 기반 실시간 모니터링 대시보드를 통해 완전 자동화된 STT+화자분리 워크플로우 구현",
      },
      // 3. 기술 스택 (그룹화)
      techStack: {
        backend: ["FastAPI", "PostgreSQL", "SQLAlchemy", "Docker"],
        frontend: ["Vue3", "Element Plus", "TypeScript"],
        aiml: ["OpenAI Whisper", "Pyannote.audio", "HuggingFace", "Librosa"],
        deployment: ["Docker", "Docker Compose"],
        others: ["Pydantic", "asyncio", "Python 3.11"],
      },
      // 4. 시스템 아키텍처 (텍스트 설명)
      architecture: {
        overview:
          "마이크로서비스 아키텍처 기반으로 STT 처리 엔진, 화자분리 엔진, 데이터 관리 레이어, 프론트엔드 대시보드가 독립적으로 구성되어 확장성과 유지보수성을 확보",
        components: [
          {
            name: "FastAPI Backend",
            description: "비동기 API 서버, 실험 관리, 백그라운드 태스크 처리",
          },
          {
            name: "STT Engine",
            description: "OpenAI Whisper 기반 음성 인식 처리",
          },
          {
            name: "Speaker Diarization Engine",
            description: "Pyannote.audio 기반 화자분리 및 후처리",
          },
          {
            name: "PostgreSQL Database",
            description: "실험 데이터, 결과 저장, 히스토리 관리",
          },
          {
            name: "Vue.js Frontend",
            description: "실시간 모니터링, 실험 관리, 결과 시각화",
          },
        ],
      },
      // 5. 처리 플로우
      processFlow: {
        sttFlow: [
          "오디오 파일 업로드 및 검증",
          "오디오 전처리 (샘플링 레이트 조정, 노이즈 제거)",
          "Whisper 모델을 통한 음성 인식 처리",
          "STT 결과 후처리 (타임스탬프 정규화)",
          "PostgreSQL 데이터베이스 저장",
          "프론트엔드 실시간 결과 출력",
        ],
        speakerDiarizationFlow: [
          "Pyannote VAD(Voice Activity Detection) 적용",
          "화자분리 모델 추론 실행",
          "연속 화자 세그먼트 병합 처리",
          "화자 재정렬 알고리즘 적용",
          "STT 결과와 타임라인 동기화",
          "최종 결과 통합 및 저장",
        ],
      },
      // 6. 트러블슈팅
      troubleshooting: [
        {
          problem: "Whisper 추론 속도 지연 (실시간 처리 요구사항)",
          solution:
            "GPU 가속 적용 + 오디오 캐싱 시스템 + 배치 처리 최적화로 처리 속도 3배 향상",
        },
        {
          problem: "화자분리 정확도 저하 (겹침 구간 처리)",
          solution:
            "Pyannote 3.1 최신 모델 적용 + 동적 임계값 조정 + 연속 세그먼트 병합 알고리즘 개발",
        },
        {
          problem: "실시간 스트리밍 메모리 누수",
          solution:
            "asyncio 기반 비동기 처리 + 메모리 풀링 + 가비지 컬렉션 최적화",
        },
        {
          problem: "다중 실험 동시 처리 시 리소스 경합",
          solution:
            "태스크 큐 시스템 + 리소스 제한 설정 + 우선순위 기반 스케줄링",
        },
      ],
      // 7. 주요 성과
      achievements: [
        "화자분리 정확도 85% → 92% 향상 (F1-Score 기준)",
        "STT 처리 속도 3배 개선 (GPU 최적화)",
        "완전 자동화된 파이프라인으로 수작업 시간 90% 단축",
        "실시간 모니터링으로 실험 관리 효율성 대폭 향상",
      ],
      // 8. 향후 계획
      futurePlans: [
        "WebSocket 기반 실시간 스트리밍 STT 지원",
        "사용자 정의 화자 모델 학습 기능",
        "WER/CER 기반 자동 품질 평가 시스템",
        "다국어 STT 모델 통합 지원",
        "클라우드 배포 및 API 서비스화",
      ],
    },
  },
  {
    id: 3,
    slug: "live-sync-server",
    title: "LiveSync Server",
    description:
      "WebSocket 기반 클라이언트 동기화 및 HLS 스트리밍 프록시 시스템 리팩토링",
    thumbnail:
      "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?w=800&h=600&fit=crop", // 시스템 아키텍처 느낌의 썸네일
    images: [
      "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1604147706283-4c1f8fdb80b2?w=1200&h=800&fit=crop",
    ],
    tech: [
      "FastAPI",
      "Python",
      "WebSocket",
      "aiohttp",
      "asyncio",
      "PostgreSQL",
      "Docker",
    ],
    features: [
      "마스터 클라이언트 동기화 구조 개선",
      "WebSocket 연결 종료 예외 처리",
      "HLS 세그먼트 타임아웃 대응 및 프록시 구조 정비",
      "트랜스크립트 권한 전환 로직 개선",
      "Multi/Single Transmission 모드 설계",
    ],
    demoUrl: "", // 실제 데모가 있다면 URL 입력
    githubUrl: "https://github.com/jerrycodezzz/live-sync-server", // 당신의 레포로 대체
    category: "Backend System",
    year: "2025",
  },
];

// [advice from AI] 기술 스택 정보를 정의합니다
export const skills = {
  frontend: [
    "React",
    "Vue3",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "StoryBook",
  ],
  backend: ["Python", "FastAPI", "PostgreSQL", "CUDA", "Swagger", "WebSocket"],
  AI: [
    "OpenAI Whisper",
    "Pyannote.audio",
    "HuggingFace",
    "Librosa",

    "STT",
    "TTS",
  ],
  tools: ["Git", "Docker", "AWS", "Figma", "Notion", "Jupyter Notebook"],
};

// [advice from AI] 개인 정보를 정의합니다
export const personalInfo = {
  name: "박지은",
  title: "Full Stack Developer",
  bio: "웹 개발에 열정을 가진 풀스택 개발자입니다. 사용자 경험을 중시하며, 깔끔하고 효율적인 코드를 작성하는 것을 추구합니다.",
  email: "jerrycodezzz@gmail.com",
  github: "https://github.com/jerrycodezzz",
  // [advice from AI] 새로운 About 섹션을 위한 상세 정보
  introduction: {
    name: "박지은 (Jerry)",
    role: "AI 기반 음성처리 & 풀스택 개발자",
    summary:
      "STT/TTS 파이프라인 설계와 비즈니스 로직 자동화를 통해 실질적 가치를 창출하는 개발자",
    keywords: [
      "AI 기반 음성처리",
      "STT/TTS 파이프라인",
      "풀스택 개발",
      "데이터 파이프라인",
      "비즈니스 로직 자동화",
      "시스템 설계",
    ],
  },
  // [advice from AI] 개인 프로필 상세 정보 추가
  profile: {
    photo: "src/data/jieunpark_photo.jpeg",
    name: "박지은 (Jieun Park)",
    birthDate: "1996.11.11",
    phone: "+82-10-2210-2792",
    email: "jerrycodezzz@gmail.com",
    education: [
      {
        school: "숙명여자대학교",
        major: "통계학과",
        period: "2021 - 2024",
        status: "졸업",
      },
      {
        school: "중국 산동대학교",
        major: "통계학과",
        period: "2015 - 2018",
        status: "수료",
      },
    ],
    github: "https://github.com/jerrycodezzz",
    location: "서울, 대한민국",
  },
  timeline: [
    {
      id: "1",
      date: "2015",
      title: "중국 산동대 유학",
      subtitle: "통계학 기초 다짐",
      description:
        "중국에서 통계학 기초를 다지며 데이터 분석에 대한 관심을 키웠습니다.",
      location: "중국 산동성",
      type: "work",
      tags: ["통계학", "데이터 분석"],
    },
    {
      id: "2",
      date: "2018",
      title: "편입 준비",
      subtitle: "데이터사이언스 관심",
      description:
        "데이터사이언스 분야에 관심을 가지며 한국으로의 편입을 준비했습니다.",
      location: "중국 산동성",
      type: "work",
      tags: ["데이터사이언스", "편입"],
    },
    {
      id: "3",
      date: "2021",
      title: "숙명여대 통계학과 입학",
      subtitle: "Python, 머신러닝 수강",
      description:
        "통계학과에서 Python 프로그래밍과 머신러닝을 본격적으로 학습했습니다.",
      location: "서울, 대한민국",
      type: "work",
      tags: ["Python", "머신러닝", "통계학"],
    },
    {
      id: "4",
      date: "2023",
      title: "AI 솔루션 기업 입사",
      subtitle: "Vue3, FastAPI 풀스택 개발",
      description:
        "AI 솔루션 회사에서 Vue3와 FastAPI를 활용한 풀스택 개발 업무를 담당했습니다.",
      location: "서울, 대한민국",
      type: "work",
      tags: ["Vue3", "FastAPI", "풀스택", "AI"],
      link: "#portfolio",
    },
    {
      id: "5",
      date: "2024",
      title: "Whisper STT 실험 및 파인튜닝",
      subtitle: "대규모 오디오 학습 및 LoRA 적용",
      description:
        "OpenAI Whisper 모델을 활용한 STT 시스템 구축과 LoRA를 통한 파인튜닝 작업을 진행했습니다.",
      location: "서울, 대한민국",
      type: "work",
      tags: ["Whisper", "STT", "LoRA", "AI/ML"],
      link: "#portfolio",
    },
    {
      id: "5",
      date: "2025 - 현재",
      title: "프리랜서를 위한 RAG 기반 백엔드 설계",
      subtitle: "시스템 설계 중심 포지션 전환",
      description:
        "RAG 기반 백엔드 시스템 설계를 통해 시스템 아키텍처 중심의 역할로 전환하고 있습니다.",
      location: "서울, 대한민국",
      type: "work",
      tags: ["RAG", "시스템 설계", "백엔드", "프리랜서"],
    },
  ],
  roadmap: {
    freelancer: [
      "AI 음성처리 전문 프리랜서로 활동",
      "STT/TTS 파이프라인 컨설팅 서비스",
      "기업 맞춤형 음성 AI 솔루션 개발",
    ],
    technology: [
      "LLM 기반 RAG 시스템 심화",
      "실시간 스트리밍 오디오 처리",
      "Kubernetes 기반 마이크로서비스",
      "Rust를 활용한 고성능 백엔드",
    ],
    collaboration: [
      "시스템 아키텍처 설계 및 리드",
      "데이터 파이프라인 설계 및 최적화",
      "AI 모델 통합 및 서비스화",
      "기술 멘토링 및 코드 리뷰",
    ],
  },
};
