import { defineUserConfig } from "vuepress";
import recoTheme from "vuepress-theme-reco";
import { viteBundler } from '@vuepress/bundler-vite'
import { webpackBundler } from '@vuepress/bundler-webpack'
import { copyCodePlugin } from '@vuepress/plugin-copy-code'
import { path } from "vuepress/utils";

export default defineUserConfig({
  title: "ZeroHour's Site",
  description: "Welcome to ZeroHour's Site",
  bundler: viteBundler(),
  // bundler: webpackBundler(),
  head: [
      ['link', { rel: 'icon', href: 'ZeroHour_G_logo.svg' }]
  ],
  alias: {
    '@styles': path.resolve(__dirname, 'styles/index.scss'),  
  },
  theme: recoTheme({
    logo: "/ZeroHour_F_logo.svg",
    author: "ZeroHour",
    authorAvatar: "/github.jpg",
    primaryColor: 'rgb(138, 245, 255)', // 自定义主题主色调
    colorMode: 'dark', // 可选值: 'auto', 'light', 'dark'
    colorModeSwitch: true, // 显示模式切换按钮
    docsRepo: "https://github.com/ZeroHour-Z",
    // docsBranch: "main",
    // docsDir: "/docs",
    lastUpdatedText: "", 
    // series 为原 sidebar

    series: {
      "/docs/theme-reco/": [
        {
          text: "module one",
          children: ["home", "theme"],
        },
        {
          text: "module two",
          children: ["api", "plugin"],
        },
      ],
    },
    navbar: [
      { text: "Home", link: "/", icon: "IconHome" },
      { text: "Blog", link: "/posts.html", icon: "IconBlog" },
      { text: "Categories", link: "/categories/life/1.html", icon: "IconTag" },
      // {
      //   text: "Docs",
      //   children: [
      //     { text: "vuepress-reco", link: "/docs/theme-reco/theme" },
      //     { text: "vuepress-theme-reco", link: "/blogs/other/guide" },
      //   ],
      // },
      { text: "About", link: "/about/about.html", icon: "IconUser" },
      // { text: "Link", link: "/friendship-link.html" },
    ],
    // bulletin: {
    //   body: [
    //     {
    //       type: "text", //文字
    //       content: `🎉🎉🎉 reco 主题 2.x 已经接近 Beta 版本，在发布 Latest 版本之前不会再有大的更新，大家可以尽情尝鲜了，并且希望大家在 QQ 群和 GitHub 踊跃反馈使用体验，我会在第一时间响应。`,
    //       style: "font-size: 12px;",
    //     },
    //     {
    //       type: "hr", //分割线
    //     },
    //     {
    //       type: "title", //标题
    //       content: "QQ 群",
    //     },
    //     {
    //       type: "text",//文字
    //       content: `
    //       <ul>
    //         <li>QQ群1：1037296104</li>
    //         <li>QQ群2：1061561395</li>
    //         <li>QQ群3：962687802</li>
    //       </ul>`,
    //       style: "font-size: 12px;",
    //     },
    //     {
    //       type: "hr", //分割线
    //     },
    //     {
    //       type: "title", //标题
    //       content: "GitHub",
    //     },
    //     {
    //       type: "text", //文字
    //       content: `
    //       <ul>
    //         <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco-next/issues">Issues<a/></li>
    //         <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco-next/discussions/1">Discussions<a/></li>
    //       </ul>`,
    //       style: "font-size: 12px;",
    //     },
    //     {
    //       type: "hr", //分割线
    //     },
    //     {
    //       type: "buttongroup", //按钮组
    //       children: [
    //         {
    //           text: "打赏", //按钮文字
    //           link: "/docs/others/donate.html",
    //         },
    //       ],
    //     },
    //   ],
    // },

  }),
  // debug: true,
});
