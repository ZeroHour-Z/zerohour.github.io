---
title: 关于我的网站迁移
publishDate: 2025-08-23
updateDate: 
description: '网站迁移与二次开发'
tags:
  - web
  - astro
  - pure
heroImage: { src: './thumbnail.jpg', color: '#4891B2' }
---

## 为何迁移

VuePress 无法满足日常需求，且其reco主题长期缺乏维护。相比之下，Astro 更加易用高效。此次迁移也受到rm视觉组组长 [阿汐](https://axi404.top/) 的启发

## 二次开发

我的网站在迁移到 Astro 之后，进行了多项二次开发和自定义优化，主要包括：

### 主题自定义
基于 [astro-pure](https://github.com/cworld1/astro-theme-pure) 主题，结合 Tailwind CSS 3.0 进行深度定制，调整了配色、布局和响应式体验。

### 页面放大功能
由于原主题在 PC 端显示较小，个人通常习惯放大到 125% 甚至 150% 使用，故直接修改全局。
在 `src/assets/styles/app.css` 中实现了页面整体放大功能，通过 CSS `zoom` 属性将整个网站放大 1.3 倍，提升用户体验和可读性。具体实现如下：

```css
html {
  font-family: 'Satoshi', sans-serif;
  zoom: 1.3;  /* 页面整体放大1.3倍 */
}
```

**放大效果对比：**
| 元素类型 | 原始大小 | 放大后大小 | 放大倍数 |
|---------|---------|-----------|---------|
| 文字 | 16px | 20.8px | 1.3x |
| 标题 | 24px | 31.2px | 1.3x |
| 按钮 | 40px × 20px | 52px × 26px | 1.3x |
| 图片 | 300px × 200px | 390px × 260px | 1.3x |

**调整方法：**
- 放大1.5倍：`zoom: 1.5`
- 放大2倍：`zoom: 2`
- 恢复正常：`zoom: 1`

### Bilibili粉丝数api
主题提供的接口不能正常获取，使用 `https://api.bilibili.com/x/relation/stat?vmid=(uid)` 获取

### 主题样式覆盖
通过在 `.vuepress/styles/index.css` 顶部引入  
`@vuepress-reco/tailwindcss-config/lib/client/styles/tailwindcss-base.css`，继承主题基础样式和变量，并覆盖部分默认样式以适配个人需求。

## 技术实现细节

### CSS变量系统
使用了CSS变量来管理主题色彩和样式，确保整个网站的风格一致性。

### 响应式设计
针对不同设备尺寸进行了优化，确保在手机、平板和桌面端都有良好的显示效果。

### 性能优化
通过合理的CSS结构和选择器优化，提升了页面的渲染性能。

## 总结

这次迁移不仅解决了VuePress的维护问题，还通过Astro的现代化特性提升了开发体验和网站性能。页面放大功能的实现也大大改善了用户体验。

如需详细了解某一部分的实现细节，欢迎留言交流！
