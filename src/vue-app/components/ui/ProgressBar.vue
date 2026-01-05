<template>
  <div class="progress-bar">
    <div v-if="showLabel" class="progress-bar__label">
      <span>{{ label }}</span>
      <span v-if="showValue" class="progress-bar__value">{{ displayValue }}</span>
    </div>
    
    <div :class="progressClasses">
      <div 
        class="progress-bar__fill"
        :style="fillStyle"
        :aria-valuenow="value"
        :aria-valuemin="min"
        :aria-valuemax="max"
        role="progressbar"
      >
        <div v-if="animated" class="progress-bar__animation" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  value: number
  min?: number
  max?: number
  label?: string
  showLabel?: boolean
  showValue?: boolean
  variant?: 'default' | 'success' | 'warning' | 'error'
  size?: 'sm' | 'md' | 'lg'
  animated?: boolean
  striped?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  min: 0,
  max: 100,
  showLabel: false,
  showValue: false,
  variant: 'default',
  size: 'md',
  animated: false,
  striped: false
})

// 计算进度百分�?
const percentage = computed(() => {
  const range = props.max - props.min
  const normalizedValue = Math.max(props.min, Math.min(props.max, props.value))
  return ((normalizedValue - props.min) / range) * 100
})

// 显示�?
const displayValue = computed(() => {
  if (props.max === 100 && props.min === 0) {
    return `${Math.round(percentage.value)}%`
  }
  return `${props.value}/${props.max}`
})

// 进度条样式类
const progressClasses = computed(() => {
  const classes = ['progress-bar__track', `progress-bar__track--${props.variant}`, `progress-bar__track--${props.size}`]
  
  if (props.striped) {
    classes.push('progress-bar__track--striped')
  }
  
  return classes
})

// 填充样式
const fillStyle = computed(() => ({
  width: `${percentage.value}%`
}))
</script>

<style scoped lang="scss">
.progress-bar {
  width: 100%;
}

.progress-bar__label {
  @include flex-between;
  margin-bottom: $spacing-xs;
  font-size: $font-size-sm;
  color: var(--color-text-secondary);
}

.progress-bar__value {
  font-weight: 500;
  color: var(--color-text-primary);
}

.progress-bar__track {
  position: relative;
  background: var(--color-gray-200);
  border-radius: $border-radius-lg;
  overflow: hidden;
  
  &--sm {
    height: 4px;
  }
  
  &--md {
    height: 8px;
  }
  
  &--lg {
    height: 12px;
  }
  
  &--striped .progress-bar__fill {
    background-image: linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.15) 25%,
      transparent 25%,
      transparent 50%,
      rgba(255, 255, 255, 0.15) 50%,
      rgba(255, 255, 255, 0.15) 75%,
      transparent 75%,
      transparent
    );
    background-size: 1rem 1rem;
  }
}

.progress-bar__fill {
  height: 100%;
  background: var(--color-primary);
  border-radius: inherit;
  transition: width $transition-normal ease-out;
  position: relative;
  
  .progress-bar__track--success & {
    background: #10b981;
  }
  
  .progress-bar__track--warning & {
    background: #f59e0b;
  }
  
  .progress-bar__track--error & {
    background: #ef4444;
  }
}

.progress-bar__animation {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-image: linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.15) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.15) 50%,
    rgba(255, 255, 255, 0.15) 75%,
    transparent 75%,
    transparent
  );
  background-size: 1rem 1rem;
  animation: progress-bar-stripes 1s linear infinite;
}

@keyframes progress-bar-stripes {
  0% {
    background-position: 1rem 0;
  }
  100% {
    background-position: 0 0;
  }
}
</style>
