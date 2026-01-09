<template>
  <article 
    class="project-card"
    :class="{ 'project-card--featured': variant === 'featured' }"
    @click="handleCardClick"
  >
    <!-- 项目图片 -->
    <div class="project-card__image-container">
      <img 
        :src="project.image" 
        :alt="`${project.title}项目截图`"
        class="project-card__image"
        @error="handleImageError"
      />
      <!-- 特色标签 -->
      <div v-if="variant === 'featured'" class="project-card__badge">
        精选项目
      </div>
    </div>
    
    <!-- 项目信息 -->
    <div class="project-card__content">
      <h3 class="project-card__title">{{ project.title }}</h3>
      <p class="project-card__description">{{ project.description }}</p>
      
      <!-- 技术栈 -->
      <div class="project-card__tech-stack">
        <span 
          v-for="tech in project.technologies.slice(0, 3)" 
          :key="tech"
          class="tech-tag"
        >
          {{ tech }}
        </span>
        <span v-if="project.technologies.length > 3" class="tech-more">
          +{{ project.technologies.length - 3 }}
        </span>
      </div>
      
      <!-- 操作按钮 -->
      <div class="project-card__actions">
        <a 
          v-if="project.demoUrl"
          :href="project.demoUrl"
          target="_blank"
          class="action-btn action-btn--primary"
          @click.stop
        >
          查看
        </a>
        <a 
          v-if="project.githubUrl"
          :href="project.githubUrl"
          target="_blank"
          class="action-btn action-btn--secondary"
          @click.stop
        >
          代码
        </a>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { Project } from '../../types'

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
  background: var(--color-surface);
  border-radius: 16px;
  border: 1px solid var(--color-border);
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(139, 115, 85, 0.08);
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 32px rgba(139, 115, 85, 0.16);
    border-color: var(--color-primary);
    
    .project-card__image {
      transform: scale(1.02);
    }
    
    .action-btn {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  &--featured {
    border-color: var(--color-primary);
    box-shadow: 0 4px 16px rgba(139, 115, 85, 0.12);
  }
}

.project-card__image-container {
  position: relative;
  height: 200px;
  overflow: hidden;
  background: var(--color-light-gray);
}

.project-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.project-card__badge {
  position: absolute;
  top: 12px;
  right: 12px;
  background: var(--color-primary);
  color: var(--color-warm-white);
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
  box-shadow: 0 2px 8px rgba(139, 115, 85, 0.2);
}

.project-card__content {
  padding: 24px;
}

.project-card__title {
  font-size: 20px;
  font-weight: 600;
  color: var(--color-text-primary);
  margin-bottom: 8px;
  line-height: 1.3;
}

.project-card__description {
  font-size: 14px;
  color: var(--color-text-secondary);
  line-height: 1.5;
  margin-bottom: 16px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.project-card__tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 20px;
}

.tech-tag {
  display: inline-block;
  padding: 4px 10px;
  background: var(--color-light-gray);
  color: var(--color-text-secondary);
  border-radius: 8px;
  font-size: 12px;
  font-weight: 500;
  border: 1px solid var(--color-border-light);
  transition: all 0.2s ease;
  
  &:hover {
    background: var(--color-soft-pink);
    color: var(--color-primary);
    border-color: var(--color-primary);
  }
  
  &:nth-child(2) {
    background: var(--color-soft-blue);
  }
  
  &:nth-child(3) {
    background: var(--color-soft-green);
  }
}

.tech-more {
  display: inline-block;
  padding: 4px 10px;
  background: var(--color-medium-gray);
  color: var(--color-warm-white);
  border-radius: 8px;
  font-size: 12px;
  font-weight: 500;
}

.project-card__actions {
  display: flex;
  gap: 12px;
}

.action-btn {
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 16px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  opacity: 0.8;
  transform: translateY(4px);
  
  &--primary {
    background: var(--color-primary);
    color: var(--color-warm-white);
    
    &:hover {
      background: var(--color-primary-dark);
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(139, 115, 85, 0.3);
    }
  }
  
  &--secondary {
    background: transparent;
    color: var(--color-primary);
    border: 1px solid var(--color-primary);
    
    &:hover {
      background: var(--color-primary);
      color: var(--color-warm-white);
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(139, 115, 85, 0.2);
    }
  }
}

// 响应式设计
@media (max-width: 768px) {
  .project-card__image-container {
    height: 160px;
  }
  
  .project-card__content {
    padding: 20px;
  }
  
  .project-card__title {
    font-size: 18px;
  }
  
  .project-card__actions {
    flex-direction: column;
    gap: 8px;
  }
  
  .action-btn {
    padding: 12px 16px;
  }
}

// 加载状态
.project-card__image[src=""] {
  background: var(--color-light-gray);
  display: flex;
  align-items: center;
  justify-content: center;
  
  &::before {
    content: '📷';
    font-size: 32px;
    opacity: 0.5;
  }
}
</style>
