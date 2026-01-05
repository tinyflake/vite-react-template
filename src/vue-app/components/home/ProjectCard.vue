<template>
  <Card 
    :variant="variant === 'featured' ? 'elevated' : 'default'"
    :hoverable="true"
    :clickable="true"
    @click="handleCardClick"
    class="project-card"
    :class="{ 'project-card--featured': variant === 'featured' }"
  >
    <!-- 装饰星星 -->
    <div class="project-card__decorations">
      <div class="decoration-star decoration-star--1">✦</div>
      <div class="decoration-star decoration-star--2">✧</div>
      <div class="decoration-heart">♡</div>
    </div>
    
    <div class="project-card__image">
      <img 
        :src="project.image" 
        :alt="`${project.title}项目截图`"
        @error="handleImageError"
      />
      <div class="project-card__overlay">
        <div class="project-card__links">
          <Button 
            v-if="project.demoUrl"
            variant="primary" 
            size="sm"
            class="btn-glow"
            :href="project.demoUrl"
            target="_blank"
            @click.stop
          >
            <span class="btn-icon">🚀</span>
            在线演示
          </Button>
          <Button 
            v-if="project.githubUrl"
            variant="outline" 
            size="sm"
            class="btn-kawaii"
            :href="project.githubUrl"
            target="_blank"
            @click.stop
          >
            <span class="btn-icon">💻</span>
            查看代码
          </Button>
        </div>
      </div>
      
      <!-- 特色标签 -->
      <div v-if="variant === 'featured'" class="project-card__featured-badge">
        <span class="badge-icon">⭐</span>
        精选
      </div>
    </div>
    
    <div class="project-card__content">
      <h3 class="project-card__title">
        <span class="title-text">{{ project.title }}</span>
        <span class="title-decoration">✨</span>
      </h3>
      <p class="project-card__description">{{ project.description }}</p>
      
      <div class="project-card__technologies">
        <span 
          v-for="(tech, index) in project.technologies" 
          :key="tech"
          class="project-card__tech-tag"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          {{ tech }}
        </span>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import type { Project } from '../../types'
import { Card, Button } from '../ui'

interface Props {
  project: Project
  variant?: 'default' | 'featured'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default'
})

const emit = defineEmits<{
  click: [project: Project]
}>()

const handleCardClick = () => {
  emit('click', props.project)
}

const handleImageError = (event: Event) => {
  const img = event.target as HTMLImageElement
  img.src = '/images/default-project.svg'
}
</script>

<style scoped lang="scss">
.project-card {
  overflow: visible;
  position: relative;
  
  &--featured {
    &::before {
      content: '';
      position: absolute;
      top: -2px;
      left: -2px;
      right: -2px;
      bottom: -2px;
      background: var(--gradient-primary);
      border-radius: $border-radius-2xl;
      z-index: -1;
      opacity: 0.3;
      animation: glow 3s ease-in-out infinite alternate;
    }
  }
  
  &:hover {
    .project-card__overlay {
      opacity: 1;
    }
    
    .project-card__image img {
      transform: scale(1.1);
    }
    
    .project-card__decorations {
      .decoration-star,
      .decoration-heart {
        opacity: 1;
        transform: scale(1.2);
      }
    }
    
    .project-card__tech-tag {
      transform: translateY(-2px);
    }
  }
}

@keyframes glow {
  from {
    opacity: 0.3;
    transform: scale(1);
  }
  to {
    opacity: 0.6;
    transform: scale(1.02);
  }
}

// 装饰元素
.project-card__decorations {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 2;
}

.decoration-star,
.decoration-heart {
  position: absolute;
  font-size: 1rem;
  opacity: 0;
  transition: all 0.3s ease;
  color: var(--color-neon-pink);
  
  &--1 {
    top: 10px;
    right: 15px;
    animation: twinkle 2s infinite ease-in-out;
  }
  
  &--2 {
    top: 20px;
    left: 15px;
    animation: twinkle 2s infinite ease-in-out 0.5s;
  }
}

.decoration-heart {
  bottom: 15px;
  right: 15px;
  animation: pulse 2s infinite ease-in-out 1s;
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

.project-card__image {
  position: relative;
  height: 220px;
  overflow: hidden;
  border-radius: $border-radius-xl $border-radius-xl 0 0;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }
}

.project-card__overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(255, 107, 157, 0.9), rgba(156, 39, 176, 0.9));
  @include flex-center;
  opacity: 0;
  transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(5px);
}

.project-card__links {
  display: flex;
  gap: $spacing-md;
  flex-direction: column;
  
  @include tablet-up {
    flex-direction: row;
  }
}

.project-card__featured-badge {
  position: absolute;
  top: 15px;
  left: 15px;
  background: var(--gradient-primary);
  color: white;
  padding: $spacing-xs $spacing-sm;
  border-radius: $border-radius-xl;
  font-size: $font-size-xs;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: $spacing-xs;
  box-shadow: var(--shadow-md);
  animation: bounce 2s infinite;
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

.badge-icon {
  animation: rotate 3s linear infinite;
}

.project-card__content {
  padding: $spacing-xl;
}

.project-card__title {
  @include text-heading-3;
  margin-bottom: $spacing-md;
  font-size: $font-size-xl;
  display: flex;
  align-items: center;
  gap: $spacing-sm;
  
  .title-text {
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  .title-decoration {
    font-size: $font-size-sm;
    animation: sparkle 2s infinite ease-in-out;
  }
}

@keyframes sparkle {
  0%, 100% {
    opacity: 0.5;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
}

.project-card__description {
  @include text-body;
  margin-bottom: $spacing-lg;
  @include text-truncate-lines(3);
  line-height: 1.6;
  color: var(--color-text-secondary);
}

.project-card__technologies {
  display: flex;
  flex-wrap: wrap;
  gap: $spacing-sm;
}

.project-card__tech-tag {
  display: inline-block;
  padding: $spacing-xs $spacing-md;
  background: var(--gradient-accent);
  color: white;
  border-radius: $border-radius-xl;
  font-size: $font-size-xs;
  font-weight: 600;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--shadow-sm);
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
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
    
    &::before {
      left: 100%;
    }
  }
  
  &:nth-child(even) {
    background: var(--gradient-primary);
  }
}

.btn-icon {
  margin-right: $spacing-xs;
}

// 响应式调整
@include mobile {
  .project-card__image {
    height: 180px;
  }
  
  .project-card__content {
    padding: $spacing-lg;
  }
  
  .project-card__title {
    font-size: $font-size-lg;
  }
}
</style>
