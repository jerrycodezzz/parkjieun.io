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
    slug: "intent-classifier",
    title: "Intent Classifier",
    description:
      "Python + FastAPI + SentenceTransformers 기반의 금융보험 콜센터 고객 문의 자동 분류 시스템. 99,006개 실제 콜센터 데이터를 활용한 한국어 특화 의도 분류 AI 모델",
    thumbnail:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&h=800&fit=crop",
    ],
    tech: [
      "Python",
      "FastAPI",
      "SentenceTransformers",
      "PyTorch",
      "Uvicorn",
      "ko-sroberta-multitask",
      "JSON Processing",
      "REST API",
    ],
    features: [
      "4개 금융보험 도메인 데이터 통합 처리 (323,215개 → 99,006개)",
      "한국어 특화 SBERT 모델 (ko-sroberta-multitask) 활용",
      "4,296종의 세분화된 의도 분류 지원",
      "임베딩 캐싱 시스템으로 빠른 재시작 (embeddings_cache.pt)",
      "코사인 유사도 기반 신뢰도 점수 제공",
      "FastAPI 기반 RESTful API 및 Swagger UI 문서화",
      "대용량 데이터 처리 최적화 및 에러 핸들링",
      "실시간 의도 분류 및 JSON 응답 형식",
    ],
    demoUrl: "http://localhost:8000/docs", // Swagger UI URL
    githubUrl: "https://github.com/jerrycodezzz/intent_classifier",
    category: "AI/ML System",
    year: "2025",
    // [advice from AI] Intent Classifier 상세 프로젝트 정보를 추가합니다
    detailed: {
      // 1. 프로젝트 기본 정보
      projectInfo: {
        duration: "2024.12 ~ 2025.01 (2개월)",
        role: "AI/Backend Developer",
        contribution: "100% (개인 프로젝트)",
      },
      // 2. 핵심 설명 (What, Why, How)
      coreDescription: {
        what: "금융보험 콜센터의 고객 문의를 자동으로 분류하는 AI 시스템입니다. 실제 콜센터 데이터 99,006개를 학습하여 4,296종의 의도를 정확하게 분류합니다.",
        why: "콜센터 상담원의 업무 효율성 향상과 고객 문의의 신속한 라우팅을 위해 개발했습니다. 수동 분류의 시간 소모와 일관성 부족 문제를 해결하고, 24시간 자동화된 의도 분류 서비스를 제공하기 위함입니다.",
        how: "한국어에 특화된 ko-sroberta-multitask 모델을 활용하여 문장 임베딩을 생성하고, 코사인 유사도 기반으로 가장 유사한 의도를 찾아 분류합니다. FastAPI로 REST API를 구축하고 임베딩 캐싱으로 성능을 최적화했습니다.",
      },
      // 3. 기술 스택 (그룹화)
      techStack: {
        backend: ["Python", "FastAPI", "Uvicorn"],
        ai_ml: ["SentenceTransformers", "PyTorch", "ko-sroberta-multitask"],
        data: ["JSON", "Pandas", "NumPy"],
        deployment: ["REST API", "Swagger UI", "Conda Environment"],
      },
      // 4. 시스템 아키텍처
      architecture: {
        overview:
          "데이터 전처리 → 임베딩 생성 → 유사도 계산 → 의도 분류의 파이프라인으로 구성된 AI 기반 분류 시스템입니다. 캐싱 메커니즘과 API 서버가 통합된 실시간 서비스 아키텍처를 채택했습니다.",
        components: [
          {
            name: "Data Processing Pipeline",
            description:
              "4개 금융보험 JSON 파일을 통합하여 고객 질문과 의도 라벨을 추출하는 전처리 시스템 (scripts/prepare_intent_dataset.py)",
          },
          {
            name: "Intent Classification Engine",
            description:
              "ko-sroberta-multitask 모델 기반의 문장 임베딩 생성 및 코사인 유사도 계산을 통한 의도 분류 엔진 (app/embed_and_predict.py)",
          },
          {
            name: "Embedding Cache System",
            description:
              "99,006개 문장의 임베딩을 PyTorch 텐서로 캐싱하여 재시작 시간을 단축하는 성능 최적화 시스템",
          },
          {
            name: "FastAPI Server",
            description:
              "RESTful API 엔드포인트 제공 및 Swagger UI 자동 문서화가 포함된 웹 서버 (app/main.py)",
          },
          {
            name: "Multi-domain Dataset",
            description:
              "사고보상, 상품가입해지, 이체출금대출, 잔고거래내역 4개 도메인의 실제 콜센터 대화 데이터",
          },
        ],
      },
      // 5. 트러블슈팅
      troubleshooting: [
        {
          problem:
            "99,006개의 대용량 문장을 임베딩으로 변환하는 과정에서 초기 로딩 시간이 5-10분 소요되어 실용성이 떨어지는 문제가 발생했습니다. 매번 서버 재시작 시 동일한 임베딩 계산을 반복하는 비효율성이 있었습니다.",
          solution:
            "PyTorch의 torch.save()를 활용한 임베딩 캐싱 시스템을 구현했습니다. 최초 실행 시에만 임베딩을 생성하고 embeddings_cache.pt 파일로 저장한 후, 이후 실행에서는 캐시된 텐서를 로드하여 로딩 시간을 수십 초로 단축했습니다.",
        },
        {
          problem:
            "4개의 서로 다른 JSON 파일 구조를 처리할 때 일부 파일에서 KeyError나 파일 누락 오류가 발생하여 전체 데이터 처리가 중단되는 문제가 있었습니다.",
          solution:
            "try-except 블록을 활용한 견고한 에러 핸들링을 구현했습니다. 각 파일별로 개별적으로 처리하고, 파일 로딩 실패 시에도 다른 파일들은 계속 처리되도록 했습니다. 또한 파일별 로딩 통계를 출력하여 데이터 처리 현황을 투명하게 제공했습니다.",
        },
        {
          problem:
            "FastAPI 앱을 uvicorn으로 실행할 때 모듈 import 경로 문제(ModuleNotFoundError: No module named 'app')와 포트 충돌 문제가 반복적으로 발생했습니다.",
          solution:
            "__init__.py 파일을 추가하여 app 디렉토리를 Python 패키지로 인식하도록 하고, 상대 import(.embed_and_predict)로 변경했습니다. 포트 충돌은 lsof 명령어로 기존 프로세스를 종료하고, 프로젝트 루트에서 uvicorn app.main:app 형태로 실행하도록 표준화했습니다.",
        },
      ],
      // 6. 주요 성과
      achievements: [
        "323,215개 원본 데이터에서 99,006개 고품질 의도-문장 쌍 추출 및 정제",
        "4,296종의 세분화된 의도 분류로 높은 정확도의 고객 문의 분류 구현",
        "임베딩 캐싱으로 재시작 시간을 10분에서 30초로 95% 단축",
        "한국어 특화 모델(ko-sroberta-multitask) 활용으로 한국어 문맥 이해도 향상",
        "FastAPI + Swagger UI로 직관적인 API 문서화 및 테스트 환경 제공",
      ],
      // 7. 향후 계획
      futurePlans: [
        "Fine-tuning을 통한 도메인 특화 모델 성능 개선",
        "실시간 학습 기능 추가로 새로운 의도 패턴 자동 학습",
        "Docker 컨테이너화 및 클라우드 배포를 통한 확장성 개선",
        "A/B 테스트를 위한 다중 모델 비교 시스템 구축",
        "대화 히스토리 기반의 컨텍스트 인식 의도 분류 고도화",
      ],
    },
  },
];

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

export const personalInfo = {
  name: "박지은",
  title: "Full Stack Developer",
  bio: "웹 개발에 열정을 가진 풀스택 개발자입니다. 사용자 경험을 중시하며, 깔끔하고 효율적인 코드를 작성하는 것을 추구합니다.",
  email: "jerrycodezzz@gmail.com",
  github: "https://github.com/jerrycodezzz",
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
  profile: {
    photo: "/jieunpark_photo.jpeg", // [advice from AI] public 폴더의 정적 파일 경로
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
      date: "2025.06 ~ 2025.07",
      title: "CCasS 어시스턴트 진입점 & 에러 핸들링",
      subtitle: "상담 어시스턴트 안정성 개선",
      description:
        "전역 에러 핸들링 구조 정비 및 CCasS 진입점 JWT 인증 흐름 설계.",
      location: "서울, 대한민국",
      type: "work",
      tags: ["에러 핸들링", "JWT", "시스템 안정화"],
    },
    {
      id: "2",
      date: "2025.05",
      title: "의도 분류 파이프라인 설계",
      subtitle: "CCasS 콜봇 지능 향상",
      description:
        "의도 분류 앙상블 파이프라인 설계 및 CCasS 모니터링 API 구조 기획.",
      location: "서울, 대한민국",
      type: "work",
      tags: ["Intent Classification", "API 설계", "AI/ML"],
    },
    {
      id: "3",
      date: "2025.04",
      title: "대화요약 API 파이프라인 설계",
      subtitle: "한국경제TV 리팩토링 포함",
      description:
        "한국경제TV 챗봇 리팩토링과 함께 대화요약 파이프라인을 설계 및 문서화.",
      location: "서울, 대한민국",
      type: "work",
      tags: ["대화요약", "API", "리팩토링"],
    },
    {
      id: "4",
      date: "2025.03",
      title: "실시간 STT 모듈 개발",
      subtitle: "Figma MCP + Cursor AI 연동",
      description:
        "Figma MCP와 CursorAI 연동 구조 설계 및 STT 스트리밍 모듈 구현.",
      location: "서울, 대한민국",
      type: "work",
      tags: ["STT", "CursorAI", "Figma MCP"],
    },
    {
      id: "5",
      date: "2025.01 ~ 2025.02",
      title: "Whisper Fine-Tuning",
      subtitle: "LoRA 적용 및 학습 파이프라인 구축",
      description:
        "대용량 오디오 데이터 기반 Whisper 모델 학습 및 LoRA 파인튜닝 수행.",
      location: "서울, 대한민국",
      type: "work",
      tags: ["Whisper", "Fine-Tuning", "LoRA", "STT"],
    },
    {
      id: "6",
      date: "2024.12",
      title: "CCasS 워크스페이스 UI 개발",
      subtitle: "대화 설계 환경 개선",
      description: "워크스페이스 기반 챗봇 빌더 프론트엔드 구현.",
      location: "서울, 대한민국",
      type: "work",
      tags: ["Vue3", "워크스페이스", "챗봇"],
    },
    {
      id: "7",
      date: "2024.11",
      title: "CCasS 대화엔진 UI 개발",
      subtitle: "시나리오 구성 인터페이스 제작",
      description: "조건 분기형 대화 흐름 빌더 프론트엔드 개발.",
      location: "서울, 대한민국",
      type: "work",
      tags: ["Vue3", "챗봇 빌더", "시나리오"],
    },
    {
      id: "8",
      date: "2024.10",
      title: "CCasS 지식저장소 프론트 개발",
      subtitle: "콘텐츠 등록 및 검색 기능 구현",
      description:
        "지식저장소 콘텐츠 등록, 편집, 검색 기능을 담당하는 프론트엔드 개발.",
      location: "서울, 대한민국",
      type: "work",
      tags: ["지식저장소", "Vue3", "검색"],
    },
    {
      id: "9",
      date: "2024.09",
      title: "콜봇 모니터링 UI 및 LLM Provider 설계",
      subtitle: "운영 데이터 시각화 및 퍼블리싱",
      description:
        "콜봇 운영 로그 기반 모니터링 UI 제작, LLM Provider 화면 기획, 지식저장소 퍼블리싱 완료.",
      location: "서울, 대한민국",
      type: "work",
      tags: ["LLM", "모니터링", "퍼블리싱"],
    },
    {
      id: "10",
      date: "2024.08",
      title: "발화 데이터셋 설계 및 챗봇 기획",
      subtitle: "도로공사·휴게소 음성 수집",
      description:
        "한국도로공사, 여주휴게소 발화 데이터 수집·정제 및 초안 챗봇 설계 시작.",
      location: "서울, 대한민국",
      type: "work",
      tags: ["STT", "데이터 수집", "챗봇 설계"],
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
