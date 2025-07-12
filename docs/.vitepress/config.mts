import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "parkjieun's blog",
  description: "parkjieun",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Posting', link: '/posting/' },
      { text: 'Trouble-Shooting', link: '/trouble-shooting/' },
      { text: 'Portfolio', link: '/portfolio/' },    ],

  sidebar: {
  '/posting/': [
    {
      text: 'Posting',
      items: [
        { text: '백엔드가 NestJS로 API를 바꿨다는데... 프론트는 어디부터 봐야 할까?', link: '/posting/post-a' },
        { text: 'Pinia 전역 설정', link: '/posting/post-b' }
      ]
    }
  ],
  '/trouble-shooting/': [
    {
      text: 'Trouble-Shooting',
      items: [
        { text: 'axios 인증 오류', link: '/trouble-shooting/error-a' },
        { text: 'vite alias 안 먹힘', link: '/trouble-shooting/error-b' }
      ]
    }
  ]
},


    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
