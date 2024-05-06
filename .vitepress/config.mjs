import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "JulyCms",
  titleTemplate: '由NestJs+Vue驱动的快速开发框架',
  description: "由NestJs+Vue驱动的快速开发框架",
  head: [
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    ['meta', { name: 'keywords', content: 'Julycms,七月CMS,nodeCMS,nestCMS,node管理后台,nestjs管理后台' }],
  ],
  themeConfig: {
    logo: "/logo.svg",
    search: {
      provider: 'local'
    },

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '下载', link: '/download' },
			{ text: '反馈', link: '/feedback' },
			{ text: '赞助', link: '/donate' },
    ],

    sidebar: [
      { text: 'JulyCms是什么', link: '/what-is-julycms' },
      { text: '快速开始', link: '/getting-started' },
      { text: '下载', link: '/download' },
      { text: '部署', link: '/deploy' },
      { text: '反馈', link: '/feedback' },
      { text: '赞助', link: '/donate' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/const-undefined-man/julycms.com' }
    ],

    footer: {
      message: '基于 MIT 许可发布',
      copyright: '版权所有 © 2024 julycms.com'
    },

    sitemap: {
      hostname: 'https://julycms.com'
    },

    assetsDir: 'assets'
  }
})
