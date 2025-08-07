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
      excerpt: 这是我的第一篇博客文章，简单介绍一下我自己和这个博客的定位。
    - title: 关于我
      tags: ["个人", "介绍"]
      path: /about
      excerpt: 了解更多关于我的信息，包括我的经历、技能和联系方式。

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
/* 主页特殊样式 */
.hero-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 4rem 0;
  text-align: center;
  position: relative;
  overflow: hidden;
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
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #fff, #f0f0f0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: glow 2s ease-in-out infinite alternate;
}

@keyframes glow {
  from { text-shadow: 0 0 20px rgba(255,255,255,0.5); }
  to { text-shadow: 0 0 30px rgba(255,255,255,0.8); }
}

.hero-subtitle {
  font-size: 1.25rem;
  opacity: 0.9;
  margin-bottom: 2rem;
}

.feature-card {
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.05);
  position: relative;
  overflow: hidden;
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
}

.feature-card:hover::before {
  left: 100%;
}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.article-card {
  background: white;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.article-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.tag {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border-radius: 1rem;
  font-size: 0.875rem;
  margin: 0.25rem;
  transition: all 0.3s ease;
}

.tag:hover {
  transform: scale(1.05);
}

.contact-section {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
  padding: 3rem 0;
  text-align: center;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
}

.social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.social-link:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px) scale(1.1);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .feature-card {
    padding: 1.5rem;
  }
  
  .social-links {
    flex-wrap: wrap;
  }
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
  document.querySelectorAll('.scroll-animate').forEach(el => {
    observer.observe(el);
  });

  // 添加粒子效果
  createParticles();
});

function createParticles() {
  const particlesContainer = document.createElement('div');
  particlesContainer.className = 'particles';
  document.body.appendChild(particlesContainer);

  for (let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 6 + 's';
    particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
    particlesContainer.appendChild(particle);
  }
}
</script>
