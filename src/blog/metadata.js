// [advice from AI] 블로그 포스트 메타데이터 관리
export const blogPosts = [
  {
    id: 1,
    slug: "first-react-project",
    title: "첫 번째 React 프로젝트 후기",
    description:
      "React를 사용해서 포트폴리오 사이트를 만들면서 배운 점들을 정리했습니다.",
    date: "2024-01-15",
    tags: ["React", "JavaScript", "Frontend"],
    category: "Project",
    featured: false,
    thumbnail: null, // 추후 이미지 추가 가능
  },
  {
    id: 2,
    slug: "javascript-array-methods",
    title: "자주 사용하는 JavaScript 배열 메서드 정리",
    description:
      "개발하면서 자주 사용하는 JavaScript 배열 메서드들을 예제와 함께 정리했습니다.",
    date: "2024-01-10",
    tags: ["JavaScript", "Array", "Methods"],
    category: "Tutorial",
    featured: false,
    thumbnail: null,
  },
  {
    id: 3,
    slug: "vite-react-setup",
    title: "Vite로 React 개발환경 구축하기",
    description:
      "Vite를 사용해서 빠른 React 개발환경을 구축하는 방법을 알아봅시다.",
    date: "2024-01-05",
    tags: ["Vite", "React", "Setup"],
    category: "Tutorial",
    featured: false,
    thumbnail: null,
  },
];

// [advice from AI] 카테고리별 필터링 함수
export const getPostsByCategory = (category) => {
  return blogPosts.filter((post) => post.category === category);
};

// [advice from AI] 태그별 필터링 함수
export const getPostsByTag = (tag) => {
  return blogPosts.filter((post) => post.tags.includes(tag));
};

// [advice from AI] 특정 포스트 가져오기
export const getPostBySlug = (slug) => {
  return blogPosts.find((post) => post.slug === slug);
};

// [advice from AI] 모든 카테고리 가져오기
export const getAllCategories = () => {
  return [...new Set(blogPosts.map((post) => post.category))];
};

// [advice from AI] 모든 태그 가져오기
export const getAllTags = () => {
  return [...new Set(blogPosts.flatMap((post) => post.tags))];
};
