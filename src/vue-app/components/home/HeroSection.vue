<template>
  <section class="hero">
    <!-- 动态背景粒子 -->
    <div class="hero__particles">
      <div class="particle" v-for="n in 20" :key="n" :style="getParticleStyle(n)"></div>
    </div>
    
    <!-- 浮动装饰元素 -->
    <div class="hero__decorations">
      <div class="decoration decoration--star decoration--star-1">✦</div>
      <div class="decoration decoration--star decoration--star-2">✧</div>
      <div class="decoration decoration--star decoration--star-3">✦</div>
      <div class="decoration decoration--heart decoration--heart-1">♡</div>
      <div class="decoration decoration--heart decoration--heart-2">♥</div>
      <div class="decoration decoration--sparkle decoration--sparkle-1">✨</div>
      <div class="decoration decoration--sparkle decoration--sparkle-2">⭐</div>
    </div>
    
    <div class="container">
      <div class="hero__content">
        <div class="hero__text">
          <div class="hero__greeting">
            <span class="greeting-text">こんにちは！</span>
            <span class="greeting-wave">👋</span>
          </div>
          
          <h1 class="hero__name">
            <span class="name-text">{{ personalInfo.name }}</span>
            <div class="name-decoration">
              <div class="decoration-line"></div>
              <div class="decoration-dot"></div>
            </div>
          </h1>
          
          <h2 class="hero__title">
            <span class="title-icon">🌸</span>
            {{ personalInfo.title }}
            <span class="title-icon">🌸</span>
          </h2>
          
          <p class="hero__description">{{ limitedDescription }}</p>
          
          <div class="hero__stats">
            <div class="stat-item">
              <div class="stat-number">5+</div>
              <div class="stat-label">年经验</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">50+</div>
              <div class="stat-label">项目完成</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">100%</div>
              <div class="stat-label">客户满意</div>
            </div>
          </div>
          
          <div class="hero__actions">
            <Button 
              variant="primary" 
              size="lg"
              class="btn-glow"
              @click="scrollToProjects"
            >
              <span class="btn-icon">🎨</span>
              查看作品
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              class="btn-kawaii"
              @click="scrollToContact"
            >
              <span class="btn-icon">💌</span>
              联系我
            </Button>
            <Button 
              v-if="personalInfo.resumeUrl"
              variant="ghost" 
              size="lg"
              class="btn-download"
              :href="personalInfo.resumeUrl"
              target="_blank"
            >
              <span class="btn-icon">📄</span>
              下载简历
            </Button>
          </div>
        </div>
        
        <div class="hero__avatar">
          <div class="hero__avatar-container">
            <!-- 装饰环 -->
            <div class="avatar-ring avatar-ring--outer"></div>
            <div class="avatar-ring avatar-ring--middle"></div>
            <div class="avatar-ring avatar-ring--inner"></div>
            
            <!-- 头像 -->
            <div class="avatar-wrapper">
              <img 
                :src="myLogo" 
                :alt="`${personalInfo.name}的头像`"
                class="hero__avatar-image"
                @error="handleImageError"
              />
              <div class="avatar-glow"></div>
            </div>
            
            <!-- 浮动表情 -->
            <div class="floating-emoji floating-emoji--1">🌟</div>
            <div class="floating-emoji floating-emoji--2">💫</div>
            <div class="floating-emoji floating-emoji--3">✨</div>
            <div class="floating-emoji floating-emoji--4">🎀</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { PersonalInfo } from '../../types'
import { Button } from '../ui'
import { limitDescriptionLength } from '../../utils/text'
import myLogo from '@/vue-app/assets/myLogo.jpg'
interface Props {
  personalInfo: PersonalInfo
}

const props = defineProps<Props>()

// 限制描述文本长度
const limitedDescription = computed(() => {
  return limitDescriptionLength(props.personalInfo.description, 3)
})

// 生成粒子样式
const getParticleStyle = (index: number) => {
  const size = Math.random() * 4 + 2
  const left = Math.random() * 100
  const animationDelay = Math.random() * 10
  const animationDuration = Math.random() * 20 + 10
  
  return {
    width: `${size}px`,
    height: `${size}px`,
    left: `${left}%`,
    animationDelay: `${animationDelay}s`,
    animationDuration: `${animationDuration}s`
  }
}

// 滚动到项目部分
const scrollToProjects = () => {
  const projectsSection = document.querySelector('.featured-projects')
  if (projectsSection) {
    projectsSection.scrollIntoView({ behavior: 'smooth' })
  }
}

// 滚动到联系部分
const scrollToContact = () => {
  const contactSection = document.querySelector('.contact-section')
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' })
  }
}

// 处理头像加载错误
const handleImageError = (event: Event) => {
  const img = event.target as HTMLImageElement
  // 使用默认头像或占位符
  img.src = '/images/default-avatar.svg'
}
</script>

<style scoped lang="scss">
.hero {
  min-height: 100vh;
  @include flex-center;
  padding: $spacing-3xl 0;
  background: var(--gradient-secondary);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 30%, rgba(255, 107, 157, 0.15) 0%, transparent 50%),
      radial-gradient(circle at 80% 70%, rgba(156, 39, 176, 0.15) 0%, transparent 50%),
      radial-gradient(circle at 50% 50%, rgba(0, 188, 212, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }
}

// 粒子背景
.hero__particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.particle {
  position: absolute;
  background: var(--gradient-primary);
  border-radius: 50%;
  opacity: 0.6;
  animation: float infinite ease-in-out;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
    opacity: 0.6;
  }
  50% {
    transform: translateY(-20px) rotate(180deg);
    opacity: 1;
  }
}

// 装饰元素
.hero__decorations {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 2;
}

.decoration {
  position: absolute;
  font-size: 1.5rem;
  animation: twinkle 3s infinite ease-in-out;
  
  &--star {
    color: var(--color-neon-blue);
    
    &-1 {
      top: 15%;
      left: 10%;
      animation-delay: 0s;
    }
    
    &-2 {
      top: 25%;
      right: 15%;
      animation-delay: 1s;
    }
    
    &-3 {
      bottom: 30%;
      left: 20%;
      animation-delay: 2s;
    }
  }
  
  &--heart {
    color: var(--color-neon-pink);
    
    &-1 {
      top: 40%;
      right: 10%;
      animation-delay: 0.5s;
    }
    
    &-2 {
      bottom: 20%;
      right: 25%;
      animation-delay: 1.5s;
    }
  }
  
  &--sparkle {
    &-1 {
      top: 60%;
      left: 5%;
      animation-delay: 2.5s;
    }
    
    &-2 {
      top: 10%;
      left: 50%;
      animation-delay: 3s;
    }
  }
}

@keyframes twinkle {
  0%, 100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
}

.hero__content {
  @include grid(1, $spacing-3xl);
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 3;
  
  @include tablet-up {
    @include grid(2, $spacing-3xl);
  }
}

.hero__text {
  text-align: center;
  
  @include tablet-up {
    text-align: left;
  }
}

// 问候语
.hero__greeting {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: $spacing-sm;
  margin-bottom: $spacing-lg;
  
  @include tablet-up {
    justify-content: flex-start;
  }
}

.greeting-text {
  font-size: $font-size-lg;
  color: var(--color-secondary);
  font-weight: 600;
  animation: slideInLeft 0.8s ease-out;
}

.greeting-wave {
  font-size: $font-size-xl;
  animation: wave 2s infinite;
}

@keyframes wave {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(20deg); }
  75% { transform: rotate(-10deg); }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

// 名字样式
.hero__name {
  position: relative;
  margin-bottom: $spacing-lg;
}

.name-text {
  @include text-heading-1;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: inline-block;
  animation: slideInUp 0.8s ease-out 0.2s both;
}

.name-decoration {
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 8px;
  
  @include tablet-up {
    left: 0;
    transform: none;
  }
}

.decoration-line {
  width: 60px;
  height: 3px;
  background: var(--gradient-primary);
  border-radius: 2px;
  animation: expandWidth 0.8s ease-out 0.4s both;
}

.decoration-dot {
  width: 8px;
  height: 8px;
  background: var(--color-neon-pink);
  border-radius: 50%;
  box-shadow: var(--shadow-neon);
  animation: pulse 2s infinite;
}

@keyframes expandWidth {
  from { width: 0; }
  to { width: 60px; }
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.8;
  }
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

// 标题样式
.hero__title {
  @include text-heading-3;
  color: var(--color-text-secondary);
  margin-bottom: $spacing-xl;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: $spacing-sm;
  
  @include tablet-up {
    justify-content: flex-start;
  }
  
  animation: slideInUp 0.8s ease-out 0.4s both;
}

.title-icon {
  animation: rotate 4s linear infinite;
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

// 描述文字
.hero__description {
  @include text-body;
  font-size: $font-size-lg;
  line-height: 1.7;
  margin-bottom: $spacing-xl;
  max-width: 600px;
  
  @include mobile {
    margin: 0 auto $spacing-xl;
  }
  
  @include tablet-up {
    margin-bottom: $spacing-xl;
  }
  
  animation: slideInUp 0.8s ease-out 0.6s both;
}

// 统计数据
.hero__stats {
  display: flex;
  gap: $spacing-xl;
  margin-bottom: $spacing-2xl;
  justify-content: center;
  
  @include tablet-up {
    justify-content: flex-start;
  }
  
  animation: slideInUp 0.8s ease-out 0.8s both;
}

.stat-item {
  text-align: center;
  
  .stat-number {
    font-size: $font-size-2xl;
    font-weight: 700;
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    line-height: 1.2;
  }
  
  .stat-label {
    font-size: $font-size-sm;
    color: var(--color-text-muted);
    margin-top: $spacing-xs;
  }
}

// 按钮样式
.hero__actions {
  display: flex;
  gap: $spacing-lg;
  flex-wrap: wrap;
  justify-content: center;
  
  @include tablet-up {
    justify-content: flex-start;
  }
  
  animation: slideInUp 0.8s ease-out 1s both;
}

.btn-glow {
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.5s;
  }
  
  &:hover::before {
    left: 100%;
  }
}

.btn-kawaii {
  border: 2px solid var(--color-primary);
  color: var(--color-primary);
  
  &:hover {
    background: var(--color-primary);
    color: white;
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
  }
}

.btn-download {
  &:hover {
    background: var(--gradient-accent);
    color: white;
  }
}

.btn-icon {
  margin-right: $spacing-xs;
}

// 头像区域
.hero__avatar {
  @include flex-center;
  
  @include tablet-up {
    order: 2;
  }
}

.hero__avatar-container {
  position: relative;
  width: 320px;
  height: 320px;
  
  @include mobile {
    width: 280px;
    height: 280px;
  }
  
  animation: slideInRight 0.8s ease-out 0.4s both;
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

// 装饰环
.avatar-ring {
  position: absolute;
  border-radius: 50%;
  border: 2px solid;
  
  &--outer {
    top: -20px;
    left: -20px;
    right: -20px;
    bottom: -20px;
    border-color: var(--color-primary);
    opacity: 0.3;
    animation: rotateClockwise 20s linear infinite;
  }
  
  &--middle {
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    border-color: var(--color-secondary);
    opacity: 0.5;
    animation: rotateCounterClockwise 15s linear infinite;
  }
  
  &--inner {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-color: var(--color-accent);
    opacity: 0.7;
    animation: rotateClockwise 10s linear infinite;
  }
}

@keyframes rotateClockwise {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes rotateCounterClockwise {
  from { transform: rotate(360deg); }
  to { transform: rotate(0deg); }
}

// 头像包装器
.avatar-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  z-index: 2;
}

.hero__avatar-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid white;
  box-shadow: var(--shadow-xl);
  transition: transform $transition-normal;
  
  &:hover {
    transform: scale(1.05);
  }
}

.avatar-glow {
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  background: var(--gradient-primary);
  border-radius: 50%;
  z-index: -1;
  opacity: 0.3;
  animation: glow 3s ease-in-out infinite alternate;
}

@keyframes glow {
  from {
    opacity: 0.3;
    transform: scale(1);
  }
  to {
    opacity: 0.6;
    transform: scale(1.1);
  }
}

// 浮动表情
.floating-emoji {
  position: absolute;
  font-size: 1.5rem;
  animation: floatEmoji 4s ease-in-out infinite;
  
  &--1 {
    top: 10%;
    left: 10%;
    animation-delay: 0s;
  }
  
  &--2 {
    top: 20%;
    right: 10%;
    animation-delay: 1s;
  }
  
  &--3 {
    bottom: 20%;
    left: 15%;
    animation-delay: 2s;
  }
  
  &--4 {
    bottom: 10%;
    right: 15%;
    animation-delay: 3s;
  }
}

@keyframes floatEmoji {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
    opacity: 0.7;
  }
  50% {
    transform: translateY(-15px) rotate(10deg);
    opacity: 1;
  }
}

// 响应式调整
@include mobile {
  .hero {
    min-height: 90vh;
    padding: $spacing-2xl 0;
  }
  
  .hero__content {
    grid-template-columns: 1fr;
    gap: $spacing-2xl;
  }
  
  .hero__avatar {
    order: -1;
    margin-bottom: $spacing-lg;
  }
  
  .hero__stats {
    gap: $spacing-lg;
  }
  
  .stat-item .stat-number {
    font-size: $font-size-xl;
  }
}
</style>
