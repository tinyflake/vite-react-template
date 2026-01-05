<template>
  <div class="home">
    <!-- 主视觉区域 -->
    <HeroSection :personal-info="personalData.personal" />
    
    <!-- 精选项目 -->
    <section class="featured-projects section-kawaii">
      <div class="section-decorations">
        <div class="decoration-element decoration-element--1">🌟</div>
        <div class="decoration-element decoration-element--2">💫</div>
        <div class="decoration-element decoration-element--3">✨</div>
      </div>
      
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">
            <span class="title-icon">🎨</span>
            精选项目
            <span class="title-decoration">✦</span>
          </h2>
          <p class="section-subtitle">展示我最引以为豪的作品集合</p>
        </div>
        
        <div class="projects-grid">
          <ProjectCard
            v-for="project in featuredProjects"
            :key="project.id"
            :project="project"
            variant="featured"
          />
        </div>
        
        <div class="section-action">
          <Button variant="outline" size="lg" to="/projects" class="btn-kawaii">
            <span class="btn-icon">🚀</span>
            查看所有项目
            <span class="btn-sparkle">✨</span>
          </Button>
        </div>
      </div>
    </section>
    
    <!-- 技能概览 -->
    <section class="skills-overview section-kawaii section-kawaii--alt">
      <div class="section-decorations">
        <div class="decoration-element decoration-element--4">⚡</div>
        <div class="decoration-element decoration-element--5">🔥</div>
        <div class="decoration-element decoration-element--6">💎</div>
      </div>
      
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">
            <span class="title-icon">⚡</span>
            技能专长
            <span class="title-decoration">✧</span>
          </h2>
          <p class="section-subtitle">掌握的技术栈和专业能力</p>
        </div>
        
        <SkillsOverview :categories="personalData.skills" :show-levels="true" />
        
        <div class="section-action">
          <Button variant="outline" size="lg" to="/skills" class="btn-kawaii">
            <span class="btn-icon">🎯</span>
            了解更多技能
            <span class="btn-sparkle">⭐</span>
          </Button>
        </div>
      </div>
    </section>
    
    <!-- 联系方式 -->
    <section class="contact-section section-kawaii">
      <div class="section-decorations">
        <div class="decoration-element decoration-element--7">💌</div>
        <div class="decoration-element decoration-element--8">🌸</div>
        <div class="decoration-element decoration-element--9">💖</div>
      </div>
      
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">
            <span class="title-icon">💌</span>
            联系我
            <span class="title-decoration">♡</span>
          </h2>
          <p class="section-subtitle">期待与你的交流合作</p>
        </div>
        
        <ContactSection 
          :contact-info="personalData.contact"
          :social-links="personalData.social"
        />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import HeroSection from '../components/home/HeroSection.vue'
import ProjectCard from '../components/home/ProjectCard.vue'
import SkillsOverview from '../components/home/SkillsOverview.vue'
import ContactSection from '../components/home/ContactSection.vue'
import { Button } from '../components/ui'
import { personalData, getFeaturedProjects } from '../data'

// 获取精选项目
const featuredProjects = computed(() => getFeaturedProjects())
</script>

<style scoped lang="scss">
.home {
  min-height: 100vh;
}

// 二次元风格区域
.section-kawaii {
  position: relative;
  padding: $spacing-3xl 0;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 20%, rgba(255, 107, 157, 0.05) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(156, 39, 176, 0.05) 0%, transparent 50%);
    pointer-events: none;
  }
  
  &--alt {
    background: var(--gradient-secondary);
    
    &::before {
      background: 
        radial-gradient(circle at 30% 70%, rgba(0, 188, 212, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 70% 30%, rgba(255, 107, 157, 0.08) 0%, transparent 50%);
    }
  }
}

// 区域装饰元素
.section-decorations {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.decoration-element {
  position: absolute;
  font-size: 2rem;
  opacity: 0.6;
  animation: floatDecoration 6s ease-in-out infinite;
  
  &--1 {
    top: 10%;
    left: 5%;
    animation-delay: 0s;
  }
  
  &--2 {
    top: 20%;
    right: 10%;
    animation-delay: 1s;
  }
  
  &--3 {
    bottom: 30%;
    left: 8%;
    animation-delay: 2s;
  }
  
  &--4 {
    top: 15%;
    left: 15%;
    animation-delay: 0.5s;
  }
  
  &--5 {
    top: 60%;
    right: 5%;
    animation-delay: 1.5s;
  }
  
  &--6 {
    bottom: 20%;
    right: 20%;
    animation-delay: 2.5s;
  }
  
  &--7 {
    top: 25%;
    left: 10%;
    animation-delay: 0.8s;
  }
  
  &--8 {
    top: 50%;
    right: 15%;
    animation-delay: 1.8s;
  }
  
  &--9 {
    bottom: 15%;
    left: 20%;
    animation-delay: 2.8s;
  }
}

@keyframes floatDecoration {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
    opacity: 0.6;
  }
  50% {
    transform: translateY(-20px) rotate(10deg);
    opacity: 1;
  }
}

// 区域头部
.section-header {
  text-align: center;
  margin-bottom: $spacing-3xl;
  position: relative;
  z-index: 2;
}

.section-title {
  @include text-heading-2;
  margin-bottom: $spacing-lg;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: $spacing-md;
  flex-wrap: wrap;
  
  .title-icon {
    font-size: $font-size-3xl;
    animation: bounce 2s infinite ease-in-out;
  }
  
  .title-decoration {
    font-size: $font-size-lg;
    color: var(--color-neon-pink);
    animation: twinkle 3s infinite ease-in-out;
  }
}

.section-subtitle {
  @include text-body;
  font-size: $font-size-lg;
  color: var(--color-text-secondary);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

// 项目网格
.projects-grid {
  @include grid(1, $spacing-xl);
  margin-bottom: $spacing-3xl;
  position: relative;
  z-index: 2;
  
  @include tablet-up {
    @include grid(2, $spacing-xl);
  }
  
  @include desktop {
    @include grid(3, $spacing-xl);
  }
}

// 区域操作按钮
.section-action {
  text-align: center;
  position: relative;
  z-index: 2;
}

.btn-kawaii {
  position: relative;
  
  .btn-icon {
    margin-right: $spacing-xs;
    animation: pulse 2s infinite;
  }
  
  .btn-sparkle {
    margin-left: $spacing-xs;
    animation: sparkle 2s infinite ease-in-out;
  }
  
  &:hover {
    .btn-icon {
      animation: bounce 0.6s ease;
    }
    
    .btn-sparkle {
      animation: rotate 0.8s ease;
    }
  }
}

@keyframes sparkle {
  0%, 100% {
    opacity: 0.7;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
}

// 区域间距调整
.featured-projects,
.skills-overview,
.contact-section {
  scroll-margin-top: 100px; // 为固定导航栏留出空间
}

// 响应式调整
@include mobile {
  .section-kawaii {
    padding: $spacing-2xl 0;
  }
  
  .section-header {
    margin-bottom: $spacing-2xl;
  }
  
  .section-title {
    flex-direction: column;
    gap: $spacing-sm;
    
    .title-icon {
      font-size: $font-size-2xl;
    }
  }
  
  .projects-grid {
    @include grid(1, $spacing-lg);
    margin-bottom: $spacing-2xl;
  }
  
  .decoration-element {
    font-size: 1.5rem;
  }
}

@include tablet-up {
  .section-title {
    flex-direction: row;
  }
}
</style>
