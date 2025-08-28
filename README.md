# ZeroHour's Blog

基于 Astro 与 `astro-theme-pure` 的个人博客项目。集成 UnoCSS、Shiki 代码高亮（复制按钮/标题/语言标签/差异高亮）、KaTeX 数学公式、Waline 评论等能力；适配 Vercel 部署；站点地址在 `astro.config.ts` 里设置为 `https://zerohour.github.io`。

## 快速开始

- 推荐使用 Bun（也可用 npm/pnpm/yarn）
- Node：与 Astro 兼容的 LTS（建议 ≥ 18）

```bash
# 安装依赖（vercel.json 使用 bun）
bun install

# 启动本地开发服务
bun run dev

# 构建产物
bun run build

# 本地预览
bun run preview

# 清理构建产物
bun run clean
```

`package.json` 已包含 `dev`/`build`/`preview`/`check`/`sync`/`format`/`lint` 等脚本。

## 功能概览

- Markdown/MDX：`remark-math` + `rehype-katex` 支持数学公式
- 代码高亮：Shiki（GitHub Light/Dark 主题），带复制按钮、标题、语言标识、diff/highlight 标注
- 样式体系：UnoCSS + Typography 预设，已优化文章排版细节
- 评论系统：集成 `@waline/client`（按需在站点配置/页面中启用）

## 站点与部署

- 站点地址：在 `astro.config.ts` 设置 `site: 'https://zerohour.github.io'`
- 适配器与输出：使用 `@astrojs/vercel`，`output: 'server'`
- Vercel：`vercel.json` 指定 `bun run build`，输出目录 `dist/client`
- 若改用 GitHub Pages 静态部署，请切换为静态适配器并设置合适的 `base/site`

## 创建新文章

项目集成 `astro-pure`，可使用内置命令快速创建内容：

```bash
# 交互式创建新内容
yarn new   # 或 bun run new
```

也可在内容目录（按主题约定，如 `src/content`）手动添加 Markdown 文件。

## 开发提示

- 图片处理使用 `sharp` 服务
- 开发服务器开启 `server.host = true`，便于局域网调试
- 若网络限制导致 SSH 22 端口不可用，可改用 HTTPS 或将 SSH 端口切至 443

## 个性化修改方法

- 站点基础信息（标题/作者/描述/语言/图标/Logo）：编辑 `src/site.config.ts` 的 `theme`

```ts
// src/site.config.ts
export const theme = {
  title: "你的站点标题",
  author: "你的名字",
  description: "一句话简介",
  favicon: "/favicon/your-icon.svg", // 放在 public/ 下
  locale: { lang: "zh-CN", attrs: "zh_CN" },
  logo: { src: "src/assets/your-logo.png", alt: "Logo" }
}
```

- 顶部导航与页脚：修改 `header.menu`、`footer.links`、`footer.social`

```ts
// src/site.config.ts
header: { menu: [ { title: "Blog", link: "/blog" }, { title: "About", link: "/about" } ] },
footer: {
  links: [ { title: "Travelling", link: "https://www.travellings.cn/go.html" } ],
  social: { github: "https://github.com/your", x: "https://x.com/your", email: "mailto:you@example.com" }
}
```

- 评论系统（Waline）：在 `integ.waline` 中启用/禁用并配置服务端

```ts
// src/site.config.ts
integ: {
  waline: {
    enable: true,              // 关闭评论改为 false
    server: "https://your-waline.example.com/",
    emoji: ["bmoji", "weibo"],
    additionalConfigs: { pageview: true, comment: true }
  }
}
```

- 页脚语录/一言：切换接口或自定义解析

```ts
// src/site.config.ts
integ: {
  quote: {
    server: "https://api.quotable.io/quotes/random?maxLength=60",
    target: `(data) => data[0].content || 'Error'`
  }
}
```

- 排版与样式：更改 `integ.typography` 或 `uno.config.ts` 的 Typography 配置

```ts
// src/site.config.ts
integ: {
  typography: {
    class: "prose text-base text-muted-foreground",
    blockquoteStyle: "italic",          // 或 "normal"
    inlineCodeBlockStyle: "modern"       // 或 "code"
  }
}
```

- 代码高亮主题与功能：在 `astro.config.ts` 的 `markdown.shikiConfig` 中调整

```ts
// astro.config.ts
markdown: {
  shikiConfig: {
    themes: { light: "github-light", dark: "github-dark" },
    transformers: [ /* addTitle(), addCopyButton(2000) 等 */ ]
  }
}
```

- 数学公式：如不需要，可在 `astro.config.ts` 的 `markdown.rehypePlugins`/`remarkPlugins` 移除 `rehype-katex`/`remark-math`

```ts
// astro.config.ts
markdown: {
  remarkPlugins: [/* 移除 remarkMath */],
  rehypePlugins: [/* 移除 rehypeKatex */]
}
```

- 站点域名与部署目标：
  - 修改 `astro.config.ts` 中的 `site`（以及必要时的 `base`）
  - Vercel：保持 `adapter: vercel()` 与 `output: 'server'`
  - 静态部署（GitHub Pages 等）：切到静态适配器并按平台配置 `base/site`

```ts
// astro.config.ts（示例）
export default defineConfig({
  site: "https://your-domain.com",
  // base: "/your-sub-path",
})
```

- SEO/HEAD 扩展：在 `theme.head` 添加自定义 `<meta>`/`link>`

```ts
// src/site.config.ts
head: [
  { tag: "meta", attrs: { name: "keywords", content: "blog,astro" }, content: "" },
  { tag: "link", attrs: { rel: "canonical", href: "https://your-domain.com" }, content: "" }
]
```

> 静态资源（如图标）放在 `public/`，源码图片可置于 `src/assets/`；修改路径后注意与配置同步。

## 许可证

参见仓库内 `LICENSE` 文件。
