<template>
  <header class="app-header">
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

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped lang="scss">
.app-header {
  background: rgba(254, 252, 250, 0.95);
  backdrop-filter: blur(20px);
  box-shadow: var(--shadow-sm);
  position: sticky;
  top: 0;
  z-index: 100;
  border-bottom: 1px solid var(--color-border);
}

.nav {
  @include flex-between;
  padding: $spacing-lg 0;
}

.logo {
  display: flex;
  align-items: center;
  gap: $spacing-sm;
  font-size: $font-size-xl;
  font-weight: $font-weight-semibold;
  color: var(--color-primary);
  text-decoration: none;
  transition: all $transition-normal;
  
  &:hover {
    color: var(--color-primary-dark);
    transform: translateY(-1px);
  }
}

.logo__icon {
  font-size: $font-size-2xl;
}

.logo__text {
  color: var(--color-text-primary);
  font-weight: $font-weight-semibold;
}

.logo__sparkle {
  font-size: $font-size-sm;
  opacity: 0.6;
  color: var(--color-primary);
}

.nav-links {
  display: flex;
  gap: $spacing-md;
  list-style: none;
  margin: 0;
  padding: 0;
  
  @include mobile {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: var(--color-surface);
    backdrop-filter: blur(20px);
    flex-direction: column;
    gap: 0;
    box-shadow: var(--shadow-lg);
    border-radius: 0 0 $border-radius-xl $border-radius-xl;
    padding: $spacing-xl;
    transform: translateY(-20px);
    opacity: 0;
    visibility: hidden;
    transition: all $transition-normal;
    border: 1px solid var(--color-border);
    border-top: none;
    
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
  font-weight: $font-weight-medium;
  font-size: $font-size-sm;
  padding: $spacing-sm $spacing-lg;
  border-radius: $border-radius-lg;
  transition: all $transition-normal;
  min-height: 44px;
  
  &:hover {
    color: var(--color-primary);
    background: var(--color-light-gray);
    transform: translateY(-1px);
  }
  
  &.router-link-active {
    color: var(--color-primary);
    background: var(--color-soft-pink);
    font-weight: $font-weight-semibold;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 50%;
      transform: translateX(-50%);
      width: 20px;
      height: 2px;
      background: var(--color-primary);
      border-radius: 1px;
      
      @include mobile {
        display: none;
      }
    }
  }
  
  @include mobile {
    padding: $spacing-md $spacing-lg;
    border-bottom: 1px solid var(--color-border-light);
    border-radius: $border-radius-md;
    margin-bottom: $spacing-sm;
    
    &:last-child {
      border-bottom: none;
      margin-bottom: 0;
    }
    
    &:hover {
      background: var(--color-light-gray);
    }
  }
}

.nav-icon {
  font-size: $font-size-base;
}

.nav-text {
  font-weight: inherit;
}

.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  gap: 4px;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  cursor: pointer;
  padding: $spacing-sm;
  border-radius: $border-radius-md;
  transition: all $transition-normal;
  min-height: 44px;
  min-width: 44px;
  justify-content: center;
  align-items: center;
  
  &:hover {
    background: var(--color-light-gray);
    border-color: var(--color-primary);
  }
  
  @include mobile {
    display: flex;
  }
}

.hamburger {
  width: 20px;
  height: 2px;
  background: var(--color-primary);
  border-radius: 1px;
  transition: all $transition-normal;
  
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

// 移动端菜单定位
.nav-links--open {
  @include mobile {
    position: fixed;
    top: 73px;
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
