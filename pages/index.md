---
title: 主页

features:
  subtitle: 关于我
  title: ZeroHour的个人空间
  text: 欢迎来到我的个人博客，这里记录着我的生活点滴、技术分享和思考感悟

  cards:
    - title: 技术分享
      details: 分享我在学习和工作中遇到的技术问题和解决方案，希望能帮助到有同样困惑的朋友
      icon: i-carbon-code
      num: "01"
    - title: 生活记录
      details: 记录生活中的美好瞬间，分享我的所见所闻和所思所想
      icon: i-carbon-camera
      num: "02"
    - title: 学习笔记
      details: 整理学习过程中的重要知识点，方便日后查阅和复习
      icon: i-carbon-notebook
      num: "03"
    - title: 个人成长
      details: 记录个人成长轨迹，反思过去，规划未来
      icon: i-carbon-growth
      num: "04"
    - title: 兴趣爱好
      details: 分享我的兴趣爱好，包括音乐、阅读、旅行等
      icon: i-carbon-heart
      num: "05"
    - title: 交流分享
      details: 欢迎与我交流，分享你的想法和经验
      icon: i-carbon-chat
      num: "06"

featuredArticles:
  subtitle: 最新文章
  title: 最近更新的内容
  description: 这里是我最近发布的文章和笔记，希望能给你带来一些启发和帮助。

  articles:
    - title: 欢迎来到我的博客
      tags: ["介绍", "开始"]
      path: /posts/hello-world
      excerpt: 这是我的第一篇博客文章，简单介绍一下我自己和这个博客的定位，以及我为什么要开始写博客。
    - title: 使用Valaxy搭建个人博客
      tags: ["技术", "教程", "Valaxy"]
      path: /posts/valaxy-blog-setup
      excerpt: 详细介绍如何使用Valaxy框架搭建个人博客，包括环境准备、项目创建、配置说明和部署方法。
    - title: 生活中的小确幸
      tags: ["生活", "感悟", "思考"]
      path: /posts/life-reflection
      excerpt: 分享生活中的美好瞬间，包括清晨的阳光、一杯咖啡的时光、阅读的乐趣和音乐的力量。
    - title: 我的音乐收藏
      tags: ["音乐", "分享", "推荐"]
      path: /posts/music-sharing
      excerpt: 分享我喜欢的音乐和歌手，包括不同心情下的音乐选择，以及音乐对我的影响。

contributors:
  subtitle: 联系方式
  title: 与我联系
  text: 如果你有任何问题或建议，欢迎通过以下方式与我联系！

getStarted:
  title: 开始探索
  text: 感谢你访问我的博客，希望这里的内容能给你带来一些价值。欢迎常来看看！
  actions:
    - text: 查看博客
      link: /posts
    - text: 了解更多
      link: /about
  cards:
    - img: https://valaxy.site/valaxy-logo.png
      alt: Valaxy Logo
      color: '#9333EA'
    - img: /favicon.svg
      alt: ZeroHour Logo
      color: '#17ead9'
    - img: https://vite.dev/logo.svg
      alt: Vite Logo
      color: '#9499ff'
---

<style>
/* 主页特殊样式 - 增强版 */
.hero-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
  color: white !important;
  padding: 4rem 0 !important;
  text-align: center !important;
  position: relative !important;
  overflow: hidden !important;
  min-height: 60vh !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="white" opacity="0.1"/><circle cx="75" cy="75" r="1" fill="white" opacity="0.1"/><circle cx="50" cy="10" r="0.5" fill="white" opacity="0.1"/><circle cx="10" cy="60" r="0.5" fill="white" opacity="0.1"/><circle cx="90" cy="40" r="0.5" fill="white" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
  animation: float 20s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
}

.hero-title {
  font-size: 3.5rem !important;
  font-weight: 700 !important;
  margin-bottom: 1rem !important;
  background: linear-gradient(45deg, #fff, #f0f0f0) !important;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
  background-clip: text !important;
  animation: glow 2s ease-in-out infinite alternate !important;
  text-shadow: 0 0 30px rgba(255,255,255,0.5) !important;
}

@keyframes glow {
  from { text-shadow: 0 0 20px rgba(255,255,255,0.5); }
  to { text-shadow: 0 0 30px rgba(255,255,255,0.8); }
}

.hero-subtitle {
  font-size: 1.25rem !important;
  opacity: 0.9 !important;
  margin-bottom: 2rem !important;
  animation: slideUp 1s ease-out 0.5s both !important;
}

.feature-card {
  background: white !important;
  border-radius: 1rem !important;
  padding: 2rem !important;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1) !important;
  transition: all 0.3s ease !important;
  border: 1px solid rgba(0, 0, 0, 0.05) !important;
  position: relative !important;
  overflow: hidden !important;
  margin-bottom: 2rem !important;
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
  transition: left 0.5s;
  z-index: 1;
}

.feature-card:hover::before {
  left: 100%;
}

.feature-card:hover {
  transform: translateY(-8px) !important;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1) !important;
}

.feature-icon {
  font-size: 3rem !important;
  margin-bottom: 1rem !important;
  background: linear-gradient(135deg, #667eea, #764ba2) !important;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
  background-clip: text !important;
  display: block !important;
}

.article-card {
  background: white !important;
  border-radius: 1rem !important;
  padding: 1.5rem !important;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1) !important;
  transition: all 0.3s ease !important;
  border: 1px solid rgba(0, 0, 0, 0.05) !important;
  margin-bottom: 1.5rem !important;
}

.article-card:hover {
  transform: translateY(-4px) !important;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1) !important;
}

.tag {
  display: inline-block !important;
  padding: 0.25rem 0.75rem !important;
  background: linear-gradient(135deg, #667eea, #764ba2) !important;
  color: white !important;
  border-radius: 1rem !important;
  font-size: 0.875rem !important;
  margin: 0.25rem !important;
  transition: all 0.3s ease !important;
  text-decoration: none !important;
}

.tag:hover {
  transform: scale(1.05) !important;
  text-decoration: none !important;
}

.contact-section {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%) !important;
  color: white !important;
  padding: 3rem 0 !important;
  text-align: center !important;
  margin-top: 3rem !important;
}

.social-links {
  display: flex !important;
  justify-content: center !important;
  gap: 1rem !important;
  margin-top: 2rem !important;
  flex-wrap: wrap !important;
}

.social-link {
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  width: 3rem !important;
  height: 3rem !important;
  background: rgba(255, 255, 255, 0.2) !important;
  border-radius: 50% !important;
  color: white !important;
  text-decoration: none !important;
  transition: all 0.3s ease !important;
  backdrop-filter: blur(10px) !important;
}

.social-link:hover {
  background: rgba(255, 255, 255, 0.3) !important;
  transform: translateY(-2px) scale(1.1) !important;
  text-decoration: none !important;
}

/* 滚动动画 */
.scroll-animate {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease;
}

.scroll-animate.visible {
  opacity: 1;
  transform: translateY(0);
}

/* 粒子效果 */
.particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
}

.particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  animation: particle-float 6s infinite linear;
}

@keyframes particle-float {
  0% {
    transform: translateY(100vh) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(-100px) rotate(360deg);
    opacity: 0;
  }
}

/* 响应式设计 */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem !important;
  }
  
  .feature-card {
    padding: 1.5rem !important;
  }
  
  .social-links {
    flex-wrap: wrap !important;
  }
  
  .hero-content {
    padding: 0 1rem;
  }
}

/* 深色模式支持 */
html.dark .feature-card, 
html.dark .article-card {
  background: var(--card-bg) !important;
  border-color: var(--border-color) !important;
  color: var(--text-primary) !important;
}

html.dark .hero-section {
  background: var(--bg-gradient) !important;
}

html.dark .hero-title,
html.dark .hero-subtitle {
  color: var(--text-primary) !important;
}

html.dark .feature-card h3,
html.dark .article-card h3 {
  color: var(--text-primary) !important;
}

html.dark .feature-card p,
html.dark .article-card p {
  color: var(--text-secondary) !important;
}

/* 特殊效果 */
.gradient-bg {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.text-glow {
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
}

.floating {
  animation: floating 3s ease-in-out infinite;
}

@keyframes floating {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

/* 确保所有元素都有动画 */
* {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* 强制应用样式 */
.va-content, .oceanus-content {
  background: transparent !important;
}

.va-main, .oceanus-main {
  background: transparent !important;
}
</style>

<script>
// 滚动动画
document.addEventListener('DOMContentLoaded', function() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  // 观察所有需要动画的元素
  document.querySelectorAll('.scroll-animate, .feature-card, .article-card').forEach(el => {
    observer.observe(el);
  });

  // 添加粒子效果
  createParticles();
  
  // 添加浮动动画
  addFloatingAnimation();
});

function createParticles() {
  const particlesContainer = document.createElement('div');
  particlesContainer.className = 'particles';
  document.body.appendChild(particlesContainer);

  for (let i = 0; i < 30; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 6 + 's';
    particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
    particlesContainer.appendChild(particle);
  }
}

function addFloatingAnimation() {
  // 为卡片添加浮动动画
  const cards = document.querySelectorAll('.feature-card, .article-card');
  cards.forEach((card, index) => {
    card.style.animationDelay = (index * 0.1) + 's';
    card.classList.add('floating');
  });
}

// 添加鼠标跟随效果
document.addEventListener('mousemove', function(e) {
  const cursor = document.querySelector('.cursor-follower');
  if (!cursor) {
    const newCursor = document.createElement('div');
    newCursor.className = 'cursor-follower';
    newCursor.style.cssText = `
      position: fixed;
      width: 20px;
      height: 20px;
      background: linear-gradient(135deg, #667eea, #764ba2);
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      transition: all 0.1s ease;
      opacity: 0.7;
    `;
    document.body.appendChild(newCursor);
  }
  
  if (cursor) {
    cursor.style.left = e.clientX - 10 + 'px';
    cursor.style.top = e.clientY - 10 + 'px';
  }
});
</script>
