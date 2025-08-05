// [advice from AI] 포트폴리오 프로젝트 데이터를 정의합니다
export const projects = [
  {
    id: 1,
    slug: "ecommerce-platform",
    title: "E-commerce Platform",
    description: "React와 Node.js로 구축한 완전한 전자상거래 플랫폼",
    thumbnail:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&h=800&fit=crop",
    ],
    tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    features: [
      "사용자 인증 및 권한 관리",
      "상품 카탈로그 및 검색",
      "장바구니 및 결제 시스템",
      "관리자 대시보드",
    ],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example/ecommerce",
    category: "Web Development",
    year: "2024",
  },
  {
    id: 2,
    slug: "task-management-app",
    title: "Task Management App",
    description: "팀 협업을 위한 직관적인 작업 관리 애플리케이션",
    thumbnail:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=800&fit=crop",
    ],
    tech: ["React", "TypeScript", "Firebase", "Material-UI"],
    features: [
      "드래그 앤 드롭 태스크 보드",
      "실시간 협업",
      "파일 첨부 및 댓글",
      "진행 상황 트래킹",
    ],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example/task-app",
    category: "Web Development",
    year: "2024",
  },
  {
    id: 3,
    slug: "weather-dashboard",
    title: "Weather Dashboard",
    description: "실시간 날씨 정보와 예측을 제공하는 대시보드",
    thumbnail:
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=1200&h=800&fit=crop",
    ],
    tech: ["Vue.js", "Chart.js", "OpenWeather API", "SCSS"],
    features: [
      "현재 날씨 및 5일 예보",
      "인터랙티브 차트",
      "지역별 날씨 비교",
      "반응형 디자인",
    ],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example/weather-app",
    category: "Data Visualization",
    year: "2023",
  },
];

// [advice from AI] 기술 스택 정보를 정의합니다
export const skills = {
  frontend: [
    "React",
    "Vue.js",
    "TypeScript",
    "JavaScript (ES6+)",
    "HTML5",
    "CSS3",
    "Sass/SCSS",
    "Tailwind CSS",
  ],
  backend: [
    "Node.js",
    "Express",
    "Python",
    "FastAPI",
    "MongoDB",
    "PostgreSQL",
    "Redis",
  ],
  tools: [
    "Git",
    "Docker",
    "AWS",
    "Vercel",
    "Webpack",
    "Vite",
    "Jest",
    "Cypress",
  ],
};

// [advice from AI] 개인 정보를 정의합니다
export const personalInfo = {
  name: "박지은",
  title: "Full Stack Developer",
  bio: "웹 개발에 열정을 가진 풀스택 개발자입니다. 사용자 경험을 중시하며, 깔끔하고 효율적인 코드를 작성하는 것을 추구합니다.",
  email: "jerry@example.com",
  github: "https://github.com/jerrycodezzz",
  linkedin: "https://linkedin.com/in/jerrykim",
  twitter: "https://twitter.com/jerrycodezzz",
};
