---
# 是否为首页
home: true

# 首页模块配置
modules:
  - BannerBrand   # 横幅品牌模块
  - Blog          # 博客模块
  - MdContent     # Markdown内容模块
  - Footer        # 页脚模块

# BannerBrand模块配置
bannerBrand:
  bgImage: '/bg1.jpg'
  title: ZeroHour's Site
  titleStyle: "font-size: 100px;" 
  # description:
  tagline: 博客正在装修（迁移）中……   # 标语
  buttons:
    - { text: 网易云音乐人主页, link: 'https://music.163.com/#/artist?id=33400424', type: 'plain', style: 'color: #fff; background-color: #42b983;' }  # 通过style字段自定义按钮颜色，例如设置文字颜色和背景色
    - { text: 树莓派识别项目, link: 'https://github.com/ZeroHour-Z/raspberry', type: 'plain' }  # 默认样式按钮
  socialLinks:
    - { icon: 'LogoGithub', link: 'https://github.com/ZeroHour-Z' }   # 社交链接（GitHub）
    - { icon: 'LogoNeteaseCloudMusic', link: 'https://music.163.com/#/artist?id=33400424' }


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
