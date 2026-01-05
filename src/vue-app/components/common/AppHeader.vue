<template>
  <header class="app-header">
    <!-- 装饰背景 -->
    <div class="header-decorations">
      <div class="decoration-particle" v-for="n in 8" :key="n" :style="getParticleStyle(n)"></div>
    </div>
    
    <div class="container">
      <nav class="nav">
        <router-link to="/" class="logo">
          <div class="logo__icon">🌸</div>
          <span class="logo__text">个人网站</span>
          <div class="logo__sparkle">✨</div>
        </router-link>
        
        <ul class="nav-links" :class="{ 'nav-links--open': isMobileMenuOpen }">
          <li><router-link to="/" @click="closeMobileMenu" class="nav-link">
            <span class="nav-icon">🏠</span>
            <span class="nav-text">首页</span>
          </router-link></li>
          <li><router-link to="/about" @click="closeMobileMenu" class="nav-link">
            <span class="nav-icon">👋</span>
            <span class="nav-text">关于</span>
          </router-link></li>
          <li><router-link to="/projects" @click="closeMobileMenu" class="nav-link">
            <span class="nav-icon">🎨</span>
            <span class="nav-text">项目</span>
          </router-link></li>
          <li><router-link to="/skills" @click="closeMobileMenu" class="nav-link">
            <span class="nav-icon">⚡</span>
            <span class="nav-text">技能</span>
          </router-link></li>
          <li><router-link to="/contact" @click="closeMobileMenu" class="nav-link">
            <span class="nav-icon">💌</span>
            <span class="nav-text">联系</span>
          </router-link></li>
        </ul>
        
        <button 
          class="mobile-menu-toggle"
          @click="toggleMobileMenu"
          :aria-expanded="isMobileMenuOpen"
          aria-label="切换导航菜单"
        >
          <span class="hamburger"></span>
          <span class="hamburger"></span>
          <span class="hamburger"></span>
        </button>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

const handleResize = () => {
  if (window.innerWidth >= 768) {
    isMobileMenuOpen.value = false
  }
}

// 生成粒子样式
const getParticleStyle = (index: number) => {
  const size = Math.random() * 3 + 1
  const left = Math.random() * 100
  const animationDelay = Math.random() * 5
  const animationDuration = Math.random() * 10 + 5
  
  return {
    width: `${size}px`,
    height: `${size}px`,
    left: `${left}%`,
    animationDelay: `${animationDelay}s`,
    animationDuration: `${animationDuration}s`
  }
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped lang="scss">
.app-header {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  box-shadow: var(--shadow-md);
  position: sticky;
  top: 0;
  z-index: 100;
  border-bottom: 1px solid rgba(255, 107, 157, 0.1);
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--gradient-secondary);
    opacity: 0.1;
    pointer-events: none;
  }
}

// 装饰背景
.header-decorations {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
}

.decoration-particle {
  position: absolute;
  background: var(--gradient-primary);
  border-radius: 50%;
  opacity: 0.3;
  animation: headerFloat infinite ease-in-out;
}

@keyframes headerFloat {
  0%, 100% {
    transform: translateY(0px) translateX(0px);
    opacity: 0.3;
  }
  50% {
    transform: translateY(-10px) translateX(5px);
    opacity: 0.6;
  }
}

.nav {
  @include flex-between;
  padding: $spacing-lg 0;
  position: relative;
  z-index: 2;
}

.logo {
  display: flex;
  align-items: center;
  gap: $spacing-sm;
  font-size: $font-size-xl;
  font-weight: 700;
  color: var(--color-primary);
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  
  &:hover {
    transform: scale(1.05);
    
    .logo__icon {
      animation: bounce 0.6s ease;
    }
    
    .logo__sparkle {
      opacity: 1;
      transform: scale(1.2);
    }
  }
}

.logo__icon {
  font-size: $font-size-2xl;
  animation: rotate 10s linear infinite;
}

.logo__text {
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.logo__sparkle {
  font-size: $font-size-sm;
  opacity: 0.7;
  transition: all 0.3s;
  animation: twinkle 2s infinite ease-in-out;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-5px);
  }
  60% {
    transform: translateY(-3px);
  }
}

.nav-links {
  display: flex;
  gap: $spacing-lg;
  list-style: none;
  margin: 0;
  padding: 0;
  
  @include mobile {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(20px);
    flex-direction: column;
    gap: 0;
    box-shadow: var(--shadow-xl);
    border-radius: 0 0 $border-radius-2xl $border-radius-2xl;
    padding: $spacing-xl;
    transform: translateY(-20px);
    opacity: 0;
    visibility: hidden;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    border: 1px solid rgba(255, 107, 157, 0.1);
    
    &--open {
      transform: translateY(0);
      opacity: 1;
      visibility: visible;
    }
  }
}

.nav-link {
  display: flex;
  align-items: center;
  gap: $spacing-xs;
  color: var(--color-text-secondary);
  text-decoration: none;
  font-weight: 600;
  font-size: $font-size-sm;
  padding: $spacing-sm $spacing-lg;
  border-radius: $border-radius-xl;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  min-height: 44px;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: var(--gradient-primary);
    transition: left 0.3s;
    z-index: -1;
  }
  
  &:hover {
    color: white;
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
    
    &::before {
      left: 0;
    }
    
    .nav-icon {
      animation: bounce 0.6s ease;
    }
  }
  
  &.router-link-active {
    color: var(--color-primary);
    background: rgba(255, 107, 157, 0.1);
    
    &::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 50%;
      transform: translateX(-50%);
      width: 20px;
      height: 3px;
      background: var(--gradient-primary);
      border-radius: 2px;
      
      @include mobile {
        display: none;
      }
    }
    
    .nav-icon {
      animation: pulse 2s infinite;
    }
  }
  
  @include mobile {
    padding: $spacing-md $spacing-lg;
    border-bottom: 1px solid rgba(255, 107, 157, 0.1);
    border-radius: $border-radius-lg;
    margin-bottom: $spacing-sm;
    
    &:last-child {
      border-bottom: none;
      margin-bottom: 0;
    }
  }
}

.nav-icon {
  font-size: $font-size-base;
  transition: transform 0.3s;
}

.nav-text {
  font-weight: 600;
}

.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  gap: 4px;
  background: rgba(255, 255, 255, 0.9);
  border: 2px solid rgba(255, 107, 157, 0.2);
  cursor: pointer;
  padding: $spacing-sm;
  border-radius: $border-radius-lg;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  min-height: 44px;
  min-width: 44px;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(10px);
  
  &:hover {
    background: rgba(255, 107, 157, 0.1);
    border-color: var(--color-primary);
    transform: scale(1.05);
  }
  
  @include mobile {
    display: flex;
  }
}

.hamburger {
  width: 20px;
  height: 2px;
  background: var(--color-primary);
  border-radius: 2px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  .mobile-menu-toggle[aria-expanded="true"] & {
    &:nth-child(1) {
      transform: rotate(45deg) translate(5px, 5px);
    }
    
    &:nth-child(2) {
      opacity: 0;
      transform: scale(0);
    }
    
    &:nth-child(3) {
      transform: rotate(-45deg) translate(7px, -6px);
    }
  }
}

// 防止移动端菜单打开时页面滚动
.nav-links--open {
  @include mobile {
    position: fixed;
    top: 73px; // header height
    left: $spacing-lg;
    right: $spacing-lg;
    z-index: 1000;
  }
}

// 响应式调整
@include mobile {
  .logo {
    font-size: $font-size-lg;
    
    .logo__icon {
      font-size: $font-size-xl;
    }
  }
}
</style>
