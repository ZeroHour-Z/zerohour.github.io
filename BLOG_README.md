# VuePress Reco 博客项目使用说明

## 📖 项目简介

这是一个基于 **VuePress 2.x** 和 **vuepress-theme-reco** 主题的个人博客项目，具有现代化的设计和丰富的功能。

## 🚀 快速开始

### 环境要求
- Node.js >= 16
- npm >= 8

### 安装依赖
```bash
npm install
```

### 启动开发服务器
```bash
npm run dev
```
服务器将在 `http://localhost:8081/` 启动（如果 8080 端口被占用）

### 构建生产版本
```bash
npm run build
```

## 📁 项目结构

```
zero-hour-blog/
├── .vuepress/              # VuePress 配置目录
│   ├── config.ts           # 主配置文件
│   └── public/             # 静态资源
├── blogs/                  # 博客文章目录
│   ├── category1/          # 分类1
│   │   ├── 2018/          # 年份
│   │   └── 2019/
│   ├── category2/          # 分类2
│   └── other/              # 其他分类
├── docs/                   # 文档目录
├── package.json            # 项目配置
└── README.md               # 首页配置
```

## ✍️ 内容编辑指南

### 1. 添加新博客文章

#### 步骤：
1. 在 `blogs/` 下创建分类文件夹（如：`tech/`, `life/`, `study/`）
2. 在分类文件夹下创建年份文件夹（如：`2024/`）
3. 创建 `.md` 文件，建议命名格式：`MMDDHH.md`（月日时）

#### 文章格式：
```markdown
---
title: 文章标题
date: 2024/01/15
tags:
 - 标签1
 - 标签2
categories:
 - 分类名
---

# 文章内容

支持 Markdown 语法：
- **粗体**
- *斜体*
- [链接](URL)
- ![图片](图片路径)
- ```代码块```
```

### 2. 修改首页内容

编辑 `README.md` 文件中的配置：

```yaml
---
home: true
modules:
  - BannerBrand
  - Blog
  - MdContent
  - Footer
bannerBrand:
  bgImage: '/bg.svg'
  title: 您的博客名称
  description: 博客描述
  tagline: 标语
  buttons:
    - { text: 按钮文字, link: '/链接地址' }
  socialLinks:
    - { icon: 'LogoGithub', link: 'https://github.com/您的用户名' }
---
```

### 3. 自定义主题配置

编辑 `.vuepress/config.ts` 文件：

```typescript
export default defineUserConfig({
  title: "您的博客标题",
  description: "博客描述",
  theme: recoTheme({
    logo: "/logo.png",           // 网站 Logo
    author: "您的名字",          // 作者名
    authorAvatar: "/head.png",   // 头像
    navbar: [                    // 导航栏
      { text: "首页", link: "/" },
      { text: "分类", link: "/categories/" },
      { text: "标签", link: "/tags/" },
    ],
    // 更多配置...
  }),
});
```

## 🎨 主题功能

### 内置模块
- **BannerBrand**: 首页横幅
- **Blog**: 博客列表
- **MdContent**: Markdown 内容
- **Footer**: 页脚

### 导航功能
- 自动生成分类页面
- 自动生成标签页面
- 支持多级导航菜单
- 响应式设计

### 搜索功能
- 内置全文搜索
- 支持标题和内容搜索

## 🔧 部署配置

### Vercel 部署
项目已配置 Vercel 部署，包含：
- `vercel.json`: 部署配置
- `.npmrc`: npm 配置
- 自动构建和部署

### GitHub Pages 部署
如需部署到 GitHub Pages：
1. 在 GitHub 仓库设置中启用 Pages
2. 选择 `main` 分支的 `.vuepress/dist` 目录
3. 每次推送后自动部署

## 📝 Markdown 语法支持

### 基础语法
- **标题**: `# ## ### #### ##### ######`
- **强调**: `**粗体**` `*斜体*` `~~删除线~~`
- **列表**: `- 项目` `1. 项目`
- **链接**: `[文字](URL)`
- **图片**: `![alt](图片路径)`
- **代码**: `` `行内代码` ``

### 扩展语法
- **代码块**: ``` ``` ```
- **表格**: `| 列1 | 列2 |`
- **引用**: `> 引用内容`
- **任务列表**: `- [x] 已完成` `- [ ] 未完成`

## 🚨 常见问题解决

### 1. 开发服务器无法启动
```bash
# 清理依赖并重新安装
Remove-Item -Recurse -Force node_modules
npm install
npm run dev
```

### 2. 端口被占用
VuePress 会自动选择可用端口，查看终端输出中的实际端口号。

### 3. 样式不生效
确保开发服务器正在运行，VuePress 需要服务器来编译和渲染内容。

### 4. 文章不显示
检查：
- 文件名是否正确
- frontmatter 格式是否正确
- 分类和标签是否配置

## 🔄 开发工作流程

1. **启动开发服务器**: `npm run dev`
2. **编辑内容**: 修改 Markdown 文件
3. **实时预览**: 浏览器自动刷新
4. **保存更改**: `git add .`
5. **提交代码**: `git commit -m "描述"`
6. **推送到远程**: `git push origin main`
7. **自动部署**: Vercel 自动重新部署

## 📚 进阶配置

### 自定义样式
在 `.vuepress/styles/` 目录下添加 CSS 文件，在 `config.ts` 中引入。

### 插件配置
在 `config.ts` 中添加插件：
```typescript
import { defineUserConfig } from "vuepress";
import recoTheme from "vuepress-theme-reco";

export default defineUserConfig({
  plugins: [
    // 您的插件配置
  ],
  theme: recoTheme({
    // 主题配置
  }),
});
```

### 评论系统
在 `config.ts` 中配置评论：
```typescript
commentConfig: {
  type: 'valine',
  options: {
    appId: '您的AppId',
    appKey: '您的AppKey',
  },
},
```

## 📞 技术支持

- **VuePress 官方文档**: https://v2.vuepress.vuejs.org/
- **Reco 主题文档**: https://vuepress-theme-reco.recoluan.com/
- **GitHub Issues**: 在项目仓库中提交问题

## 📄 许可证

本项目采用 MIT 许可证。

---

**祝您使用愉快！** 🎉 