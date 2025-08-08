<template>
  <div 
    class="animated-card"
    :class="{ 'is-visible': isVisible }"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <div class="card-content">
      <slot />
    </div>
    <div class="card-glow" :style="glowStyle"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'

const props = defineProps({
  delay: {
    type: Number,
    default: 0
  }
})

const isVisible = ref(false)
const isHovered = ref(false)

const glowStyle = computed(() => ({
  opacity: isHovered.value ? 1 : 0,
  transform: isHovered.value ? 'scale(1.05)' : 'scale(1)'
}))

const handleMouseEnter = () => {
  isHovered.value = true
}

const handleMouseLeave = () => {
  isHovered.value = false
}

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, props.delay)
})
</script>

<style scoped>
.animated-card {
  position: relative;
  background: white;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(0, 0, 0, 0.05);
  overflow: hidden;
  opacity: 0;
  transform: translateY(30px);
}

.animated-card.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.animated-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

.card-content {
  position: relative;
  z-index: 2;
}

.card-glow {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
  border-radius: 1rem;
  transition: all 0.3s ease;
  z-index: 1;
}

.animated-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
  transition: left 0.5s;
  z-index: 1;
}

.animated-card:hover::before {
  left: 100%;
}

/* 深色模式支持 */
html.dark .animated-card {
  background: var(--card-bg);
  border-color: var(--border-color);
  color: var(--text-primary);
}

html.dark .card-glow {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.2), rgba(118, 75, 162, 0.2));
}
</style> 