// import type { UserThemeConfig } from 'valaxy-theme-yun'
// import { defineValaxyConfig } from 'valaxy'

// // add icons what you will need
// const safelist = [
//   'i-ri-home-line',
// ]

// /**
//  * User Config
//  */
// export default defineValaxyConfig<UserThemeConfig>({
//   // site config see site.config.ts

//   theme: 'yun',

//   themeConfig: {
//     banner: {
//       enable: true,
//       title: 'ZeroHour',
//     },

//     pages: [
//       {
//         name: '我的小伙伴们',
//         url: '/links/',
//         icon: 'i-ri-genderless-line',
//         color: 'dodgerblue',
//       },
//       {
//         name: '喜欢的女孩子',
//         url: '/girls/',
//         icon: 'i-ri-women-line',
//         color: 'hotpink',
//       },
//     ],

//     footer: {
//       since: 2016,
//       beian: {
//         enable: true,
//         icp: '苏ICP备17038157号',
//       },
//     },
//   },

//   unocss: { safelist },
// })
import type { ThemeConfig } from 'valaxy-theme-oceanus'
import { defineConfig } from 'valaxy'
import pkg from 'valaxy-theme-oceanus/package.json'

export default defineConfig<ThemeConfig>({
  theme: 'oceanus',

  devtools: true,

  themeConfig: {

    logo: false,
    navTitle: pkg.name,

    nav: [
      {
        text: '主页',
        link: '/',
      },
      {
        text: '指南',
        link: '/guide',
        sidebar: ['getting-started', 'writing'],
        subNav: [
          {
            text: '安装',
            link: '/guide/getting-started/installation',
          },
          {
            text: '更新',
            link: '/guide/getting-started/update',
          },
          {
            text: '资源处理',
            link: '/guide/writing/asset-handling',
          },
          {
            text: 'Frontmatter',
            link: '/guide/writing/frontmatter',
          },
          {
            text: '国际化',
            link: '/guide/writing/i18n',
          },
          {
            text: 'Markdown',
            link: '/guide/writing/markdown',
          },
        ],
      },
      {
        text: '参考',
        link: '/reference',
        sidebar: ['reference', 'themeConfig'],
        subNav: [
          {
            text: '站点配置',
            link: '/reference/site-config',
            sidebar: ['siteConfig'],
          },
          {
            text: 'frontmatter 配置',
            link: '/reference/frontmatter-config',
            sidebar: ['frontmatter-config'],
          },
          {
            text: '主题配置',
            link: '/reference/theme-config',
            sidebar: ['themeConfig'],
          },
        ],
      },
      {
        text: '关于',
        link: '/about',
      },
    ],

    navTools: [
      ['togglTheme', 'toggleLocale'],
      [{
        icon: 'i-ri-github-fill',
        link: pkg.repository.url,
      }],
      ['search'],
    ],

    hero: {
      title: 'VALAXY THEME OCEANUS',
      motto: '简约、高雅的 Valaxy 文档主题',
      img: {
        light: 'https://common.s3.bitiful.net/oceanus/wallhaven-2y7yz6.jpg',
        dark: 'https://common.s3.bitiful.net/oceanus/wallhaven-2evj3y.jpg',
      },
    },

    // sidebar: [
    //   'getting-started',
    //   'guide',
    //   'config',
    //   'theme',
    //   'styles',
    //   'layouts',
    //   'examples',
    //   'releases',
    //   'dev',
    // ],

    footer: {
      since: 2024,
      powered: true,
      icp: '<a class="oceanus-text" href="https://icp.gov.moe/?keyword=20240132" target="_blank">萌ICP备20240132号</a>',
    },

    gitLog: {
      contributor: {
        mode: 'git',
      },
      repositoryUrl: 'https://github.com/WRXinYue/valaxy-theme-oceanus.git',
    },
  },
})
