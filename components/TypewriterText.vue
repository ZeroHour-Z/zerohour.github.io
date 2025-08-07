<template>
  <div class="typewriter-container">
    <span class="typewriter-text" ref="textElement"></span>
    <span class="cursor" :class="{ 'blink': showCursor }">|</span>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  text: {
    type: String,
    required: true
  },
  speed: {
    type: Number,
    default: 100
  },
  delay: {
    type: Number,
    default: 1000
  }
})

const textElement = ref(null)
const showCursor = ref(true)
let currentIndex = 0
let intervalId = null
let cursorIntervalId = null

const typeText = () => {
  if (currentIndex < props.text.length) {
    textElement.value.textContent += props.text[currentIndex]
    currentIndex++
  } else {
    clearInterval(intervalId)
    // 打字完成后，光标停止闪烁
    setTimeout(() => {
      showCursor.value = false
    }, 2000)
  }
}

const startCursorBlink = () => {
  cursorIntervalId = setInterval(() => {
    showCursor.value = !showCursor.value
  }, 500)
}

onMounted(() => {
  // 开始光标闪烁
  startCursorBlink()
  
  // 延迟开始打字
  setTimeout(() => {
    intervalId = setInterval(typeText, props.speed)
  }, props.delay)
})

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId)
  }
  if (cursorIntervalId) {
    clearInterval(cursorIntervalId)
  }
})
</script>

<style scoped>
.typewriter-container {
  display: inline-block;
  font-family: 'Courier New', monospace;
  font-size: 1.2rem;
  line-height: 1.5;
}

.typewriter-text {
  color: inherit;
}

.cursor {
  color: #3b82f6;
  font-weight: bold;
  animation: blink 1s infinite;
}

.cursor.blink {
  animation: blink 1s infinite;
}

@keyframes blink {
  0%, 50% {
    opacity: 1;
  }
  51%, 100% {
    opacity: 0;
  }
}

/* 响应式设计 */
@media (max-width: 768px) {
  .typewriter-container {
    font-size: 1rem;
  }
}
</style> 