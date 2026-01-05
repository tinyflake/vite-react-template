<template>
  <div class="skills-overview">
    <div 
      v-for="category in categories" 
      :key="category.name"
      class="skills-category"
    >
      <h3 class="skills-category__title">{{ category.name }}</h3>
      <div class="skills-grid">
        <div 
          v-for="skill in category.skills" 
          :key="skill.name"
          class="skill-item"
        >
          <div class="skill-item__icon">
            <img 
              :src="`/icons/${skill.icon}.svg`" 
              :alt="`${skill.name}图标`"
              @error="handleIconError"
            />
          </div>
          <div class="skill-item__content">
            <h4 class="skill-item__name">{{ skill.name }}</h4>
            <ProgressBar 
              v-if="showLevels"
              :value="skill.level * 20"
              :max="100"
              size="sm"
              :variant="getSkillVariant(skill.level)"
              class="skill-item__progress"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { SkillCategory } from '../../types'
import { ProgressBar } from '../ui'

interface Props {
  categories: SkillCategory[]
  showLevels?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  showLevels: true
})

const getSkillVariant = (level: number) => {
  if (level >= 4) return 'success'
  if (level >= 3) return 'default'
  if (level >= 2) return 'warning'
  return 'error'
}

const handleIconError = (event: Event) => {
  const img = event.target as HTMLImageElement
  // 使用文字作为后备
  const skillName = img.alt.replace('图标', '')
  img.style.display = 'none'
  const parent = img.parentElement
  if (parent) {
    parent.innerHTML = `<span class="skill-icon-text">${skillName.charAt(0)}</span>`
  }
}
</script>

<style scoped lang="scss">
.skills-overview {
  display: grid;
  gap: $spacing-2xl;
  
  @include tablet-up {
    @include grid(2, $spacing-2xl);
  }
}

.skills-category__title {
  @include text-heading-3;
  margin-bottom: $spacing-lg;
  color: var(--color-primary);
}

.skills-grid {
  @include grid(1, $spacing-lg);
  
  @include mobile-up {
    @include grid(2, $spacing-lg);
  }
}

.skill-item {
  display: flex;
  align-items: center;
  gap: $spacing-md;
  padding: $spacing-md;
  background: var(--color-surface);
  border-radius: $border-radius-lg;
  border: 1px solid var(--color-border);
  transition: all $transition-fast;
  
  &:hover {
    box-shadow: var(--shadow-md);
    transform: translateY(-2px);
  }
}

.skill-item__icon {
  width: 40px;
  height: 40px;
  @include flex-center;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  
  .skill-icon-text {
    width: 40px;
    height: 40px;
    @include flex-center;
    background: var(--color-primary);
    color: white;
    border-radius: 50%;
    font-weight: 600;
    font-size: $font-size-lg;
  }
}

.skill-item__content {
  flex: 1;
}

.skill-item__name {
  @include text-body;
  font-weight: 600;
  margin-bottom: $spacing-xs;
  color: var(--color-text-primary);
}

.skill-item__progress {
  width: 100%;
}
</style>
