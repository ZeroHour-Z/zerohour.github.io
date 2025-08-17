---
# 是否为首页
home: true

# 首页模块配置
modules:
  - BannerBrand   # 横幅品牌模块
  - Blog          # 博客模块
  - MdContent     # Markdown内容模块
  # - Footer        # 页脚模块

# BannerBrand模块配置
bannerBrand:
  bgImage: '/bg.svg'
  title: ZeroHour's Site
  titleStyle: "font-size: 60px;" 
  # description:
  tagline: 亦余心之所善兮 虽九死其犹未悔   # 标语
  buttons:
    - { text: Guide, link: '/blogs/other/guide.html', type: 'primary', style: 'color: #fff; background-color: #42b983;' }  # 通过style字段自定义按钮颜色，例如设置文字颜色和背景色
    - { text: Default Style, link: '/docs/style-default-api/introduce', type: 'plain' }  # 默认样式按钮
  socialLinks:
    - { icon: 'LogoGithub', link: 'https://github.com/ZeroHour-Z' }   # 社交链接（GitHub）
    - { icon: 'LogoNeteaseCloudMusic', link: 'https://music.163.com/#/user/home?id=12345' }


# 博客模块配置
blog:
  socialLinks:
    - { icon: 'LogoGithub', link: 'https://github.com/ZeroHour' }   # 博客社交链接（GitHub）
   
# 首页是否显示标题
isShowTitleInHome: true

# 首页操作按钮文本
actionText: About

# 首页操作按钮链接
actionLink: /views/other/about
---
