import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "parkjieun's blog",
  description: 'parkjieun',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'LOG', link: '/posting/' },
      { text: 'DEBUG', link: '/debug/' },
      { text: 'Portfolio', link: '/portfolio/' },
    ],

    // [advice from AI] 목차 설정 - 일관된 레이아웃을 위해
    outline: {
      level: [2, 3], // h2, h3 태그를 목차로 표시
      label: '목차', // 목차 제목
    },

    sidebar: {
      '/portfolio/': [
        {
          text: 'Portfolio',
          items: [
            {
              text: '백엔드가 NestJS로 API를 바꿨다는데... 프론트는 어디부터 봐야 할까?',
              link: '/posting/post-a',
            },
            { text: 'Pinia 전역 설정', link: '/posting/post-b' },
          ],
        },
      ],
      '/posting/': [
        {
          text: 'LOG',
          items: [
            {
              text: '백엔드가 NestJS로 API를 바꿨다는데... 프론트는 어디부터 봐야 할까?',
              link: '/posting/post-a',
            },
            { text: 'Pinia 전역 설정', link: '/posting/post-b' },
          ],
        },
      ],
      '/debug/': [
        {
          text: 'DEBUG',
          items: [
            { text: 'axios 인증 오류', link: '/trouble-shooting/error-a' },
            { text: 'vite alias 안 먹힘', link: '/trouble-shooting/error-b' },
          ],
        },
      ],
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],
  },
})
