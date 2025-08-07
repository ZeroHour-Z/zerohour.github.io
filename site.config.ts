import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  lang: 'zh-CN',
  title: 'ZeroHour',
  url: 'https://zerohour.github.io/',
  mode: 'light',
  author: {
    avatar: '/avatar.jpg',
    name: 'ZeroHour',
  },

  description: 'ZeroHour的个人博客 - 记录生活，分享技术，探索世界',

  social: [
    {
      name: 'GitHub',
      link: 'https://github.com/ZeroHour-Z',
      icon: 'i-ri-github-line',
      color: '#6e5494',
    },
    {
      name: '网易云音乐',
      link: 'https://music.163.com/#/artist?id=33400424',
      icon: 'i-ri-netease-cloud-music-line',
      color: '#C20C0C',
    },
    {
      name: 'QQ',
      link: 'tencent://message/?uin=2719850558',
      icon: 'i-ri-qq-line',
      color: '#12B7F5',
    },
    {
      name: 'E-Mail',
      link: 'mailto:2719850558@qq.com',
      icon: 'i-ri-mail-line',
      color: '#8E71C1',
    },
  ],

  comment: {
    enable: false,
  },

  mediumZoom: {
    enable: true,
  },

  search: {
    enable: true,
  },
})
