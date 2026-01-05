<template>
  <footer class="app-footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h4 class="footer-section__title">个人网站</h4>
          <p class="footer-section__description">
            展示我的专业技能和项目作品，欢迎与我联系交流。
          </p>
        </div>
        
        <div class="footer-section">
          <h4 class="footer-section__title">快速链接</h4>
          <ul class="footer-links">
            <li><router-link to="/">首页</router-link></li>
            <li><router-link to="/about">关于我</router-link></li>
            <li><router-link to="/projects">项目作品</router-link></li>
            <li><router-link to="/skills">技能专长</router-link></li>
            <li><router-link to="/contact">联系我</router-link></li>
          </ul>
        </div>
        
        <div class="footer-section">
          <h4 class="footer-section__title">联系方式</h4>
          <div class="footer-contact">
            <a href="mailto:hello@example.com" class="footer-contact__item">
              <svg viewBox="0 0 24 24" fill="currentColor" class="footer-contact__icon">
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
              hello@example.com
            </a>
            <span class="footer-contact__item">
              <svg viewBox="0 0 24 24" fill="currentColor" class="footer-contact__icon">
                <path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
              </svg>
              北京, 中国
            </span>
          </div>
        </div>
        
        <div class="footer-section">
          <h4 class="footer-section__title">关注我</h4>
          <div class="footer-social">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" class="footer-social__link">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="footer-social__link">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" class="footer-social__link">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      <div class="footer-bottom">
        <div class="footer-bottom__content">
          <p>&copy; {{ currentYear }} 个人网站. 保留所有权利。</p>
          <p class="footer-bottom__tech">
            使用 <span class="tech-highlight">Vue 3</span> + <span class="tech-highlight">TypeScript</span> 构建
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped lang="scss">
.app-footer {
  background: var(--color-gray-900);
  color: var(--color-gray-300);
  margin-top: auto;
}

.footer-content {
  @include grid(1, $spacing-2xl);
  padding: $spacing-3xl 0 $spacing-2xl;
  
  @include tablet-up {
    @include grid(2, $spacing-2xl);
  }
  
  @include desktop {
    @include grid(4, $spacing-2xl);
  }
}

.footer-section {
  &__title {
    color: var(--color-gray-100);
    font-size: $font-size-lg;
    font-weight: 600;
    margin-bottom: $spacing-lg;
  }
  
  &__description {
    @include text-small;
    color: var(--color-gray-400);
    line-height: 1.6;
  }
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: $spacing-sm;
  
  a {
    color: var(--color-gray-400);
    text-decoration: none;
    font-size: $font-size-sm;
    transition: color $transition-fast;
    padding: $spacing-xs 0;
    
    &:hover {
      color: var(--color-gray-100);
    }
  }
}

.footer-contact {
  display: flex;
  flex-direction: column;
  gap: $spacing-sm;
}

.footer-contact__item {
  display: flex;
  align-items: center;
  gap: $spacing-sm;
  color: var(--color-gray-400);
  text-decoration: none;
  font-size: $font-size-sm;
  transition: color $transition-fast;
  
  &:hover {
    color: var(--color-gray-100);
  }
}

.footer-contact__icon {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}

.footer-social {
  display: flex;
  gap: $spacing-md;
}

.footer-social__link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: var(--color-gray-800);
  border-radius: $border-radius-md;
  color: var(--color-gray-400);
  transition: all $transition-fast;
  
  &:hover {
    background: var(--color-primary);
    color: white;
    transform: translateY(-2px);
  }
  
  svg {
    width: 20px;
    height: 20px;
  }
}

.footer-bottom {
  border-top: 1px solid var(--color-gray-800);
  padding: $spacing-xl 0;
}

.footer-bottom__content {
  @include flex-between;
  flex-wrap: wrap;
  gap: $spacing-md;
  
  @include mobile {
    flex-direction: column;
    text-align: center;
  }
  
  p {
    @include text-small;
    color: var(--color-gray-500);
    margin: 0;
  }
}

.footer-bottom__tech {
  .tech-highlight {
    color: var(--color-primary);
    font-weight: 500;
  }
}

// 响应式调整
@include mobile {
  .footer-content {
    @include grid(1, $spacing-xl);
    padding: $spacing-2xl 0 $spacing-xl;
  }
  
  .footer-social {
    justify-content: center;
  }
}
</style>
