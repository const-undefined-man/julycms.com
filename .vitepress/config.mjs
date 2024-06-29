import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "JulyCms-七月C内容管理系统",
  titleTemplate: '由NestJs+Vue驱动的快速开发框架',
  description: "由NestJs+Vue驱动的快速开发框架",
  head: [
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    ['meta', { name: 'keywords', content: 'Julycms,七月CMS,内容管理系统,nodeCMS,nestCMS,node管理后台,nestjs管理后台' }],
    ['meta', { name: 'baidu-site-verification', content: 'codeva-BIqL51rYc9' }],
    ['script', { src: 'https://hm.baidu.com/hm.js?7ef2f95386fffdbd6de81dd595834f2d' }],
  ],
  themeConfig: {
    logo: "/logo.svg",
    search: {
      provider: 'local'
    },

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '项目部署', link: '/deploy' },
      { text: '服务器配置', link: '/server-config' },
			{ text: '反馈/赞助', link: '/feedback' },
      { text: '演示站点', items: [
          { text: '网站前台', link: 'https://demo.julycms.com' },
          { text: '管理后台', link: 'https://demo.julycms.com/console-ui' }
        ]
      }
    ],

    sidebar: [
      { text: 'JulyCms是什么', link: '/what-is-julycms' },
      { text: '快速开始', link: '/getting-started' },
      { text: '项目部署', link: '/deploy' },
      { text: '服务器配置', link: '/server-config' },
      { text: '反馈/赞助', link: '/feedback' },
      { text: '常见问题', link: '/faq' },
    ],

    outline: {
      label: '内容导航',
      level: 'deep'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/const-undefined-man/julycms.com' },
      { icon: {
        svg: '<svg t="1694005148955" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4163" xmlns:xlink="http://www.w3.org/1999/xlink" width="512" height="512"><path d="M512 1024C229.222 1024 0 794.778 0 512S229.222 0 512 0s512 229.222 512 512-229.222 512-512 512z m259.149-568.883h-290.74a25.293 25.293 0 0 0-25.292 25.293l-0.026 63.206c0 13.952 11.315 25.293 25.267 25.293h177.024c13.978 0 25.293 11.315 25.293 25.267v12.646a75.853 75.853 0 0 1-75.853 75.853h-240.23a25.293 25.293 0 0 1-25.267-25.293V417.203a75.853 75.853 0 0 1 75.827-75.853h353.946a25.293 25.293 0 0 0 25.267-25.292l0.077-63.207a25.293 25.293 0 0 0-25.268-25.293H417.152a189.62 189.62 0 0 0-189.62 189.645V771.15c0 13.977 11.316 25.293 25.294 25.293h372.94a170.65 170.65 0 0 0 170.65-170.65V480.384a25.293 25.293 0 0 0-25.293-25.267z" fill="#C71D23" p-id="4164"></path></svg>'
      }, link: 'https://gitee.com/const-undefined-man/julycms.com' }
    ],

    footer: {
      message: '基于 MIT 许可发布',
      copyright: '版权所有 © 2024 julycms.com <a href="https://beian.miit.gov.cn" target="_blank">辽ICP备2024030417号-1</a>'
    },

    sitemap: {
      hostname: 'https://julycms.com'
    },

    assetsDir: 'assets'
  }
})
