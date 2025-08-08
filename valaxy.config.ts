import type { ThemeConfig } from 'valaxy-theme-oceanus'
import { defineConfig } from 'valaxy'
import pkg from 'valaxy-theme-oceanus/package.json'

export default defineConfig<ThemeConfig>({
  theme: 'oceanus',

  devtools: true,

  themeConfig: {

    logo: false,
    navTitle: 'ZeroHour',

    nav: [
      {
        text: '主页',
        link: '/',
      },
      {
        text: '笔记',
        link: '/posts',
      },
      {
        text: '分类',
        link: '/categories',
      },
      {
        text: '标签',
        link: '/tags',
      },
      {
        text: '关于',
        link: '/about',
      },
    ],

    navTools: [
      ['search'],
      ['togglTheme'],
      [{
        icon: 'i-ri-github-fill',
        link: 'https://github.com/ZeroHour-Z',
      }],
    ],

    hero: {
      title: 'ZeroHour',
      motto: '记录生活，分享技术，探索世界',
      img: {
        light: 'https://common.s3.bitiful.net/oceanus/wallhaven-2y7yz6.jpg',
        dark: 'https://common.s3.bitiful.net/oceanus/wallhaven-2y7yz6.jpg',
        //dark: 'https://common.s3.bitiful.net/oceanus/wallhaven-2evj3y.jpg',
      },
    },

    footer: {
      since: 2024,
      powered: true,
      icp: '<a class="oceanus-text" href="https://icp.gov.moe/?keyword=20240132" target="_blank">萌ICP备20240132号</a>',
    },

    gitLog: {
      contributor: {
        mode: 'git',
      },
      repositoryUrl: 'https://github.com/ZeroHour-Z/zerohour.github.io.git',
    },
  },
})
