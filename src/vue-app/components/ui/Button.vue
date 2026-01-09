<template>
  <component
    :is="tag"
    :class="buttonClasses"
    :disabled="disabled"
    v-bind="$attrs"
    @click="handleClick"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  loading?: boolean
  tag?: string
  href?: string
  to?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
  loading: false,
  tag: 'button'
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

// 根据 props 确定使用的标签
const tag = computed(() => {
  if (props.href) return 'a'
  if (props.to) return 'router-link'
  return props.tag
})

// 计算按钮样式类
const buttonClasses = computed(() => {
  const classes = ['btn', `btn--${props.variant}`, `btn--${props.size}`]
  
  if (props.disabled || props.loading) {
    classes.push('btn--disabled')
  }
  
  if (props.loading) {
    classes.push('btn--loading')
  }
  
  return classes
})

const handleClick = (event: MouseEvent) => {
  if (!props.disabled && !props.loading) {
    emit('click', event)
  }
}
</script>

<style scoped lang="scss">
.btn {
  @include button-base;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: $border-radius-md;
  font-weight: $font-weight-medium;
  text-decoration: none;
  cursor: pointer;
  user-select: none;
  transition: all $transition-normal;
  
  &:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
  }
  
  // Primary - 主要按钮
  &--primary {
    background: var(--color-primary);
    color: var(--color-warm-white);
    border: none;
    box-shadow: var(--shadow-sm);
    
    &:hover:not(.btn--disabled) {
      background: var(--color-primary-dark);
      transform: translateY(-1px);
      box-shadow: var(--shadow-hover);
    }
    
    &:active {
      transform: translateY(0);
      box-shadow: var(--shadow-sm);
    }
  }
  
  // Secondary - 次要按钮
  &--secondary {
    background: transparent;
    color: var(--color-primary);
    border: 1.5px solid var(--color-accent);
    
    &:hover:not(.btn--disabled) {
      background: var(--color-soft-pink);
      border-color: var(--color-primary);
      transform: translateY(-1px);
    }
    
    &:active {
      transform: translateY(0);
      background: var(--color-light-gray);
    }
  }
  
  // Outline - 边框按钮
  &--outline {
    background: var(--color-surface);
    color: var(--color-text-secondary);
    border: 1px solid var(--color-border);
    box-shadow: var(--shadow-sm);
    
    &:hover:not(.btn--disabled) {
      background: var(--color-light-gray);
      color: var(--color-primary);
      border-color: var(--color-medium-gray);
      transform: translateY(-1px);
    }
  }
  
  // Ghost - 幽灵按钮
  &--ghost {
    background: transparent;
    color: var(--color-text-secondary);
    border: none;
    
    &:hover:not(.btn--disabled) {
      background: var(--color-light-gray);
      color: var(--color-primary);
    }
  }
  
  // 尺寸变体
  &--sm {
    padding: 8px 16px;
    font-size: $font-size-sm;
    min-height: 36px;
    border-radius: $border-radius-sm;
  }
  
  &--md {
    padding: 12px 24px;
    font-size: $font-size-base;
    min-height: 44px;
    border-radius: $border-radius-md;
  }
  
  &--lg {
    padding: 16px 32px;
    font-size: $font-size-lg;
    min-height: 52px;
    border-radius: $border-radius-lg;
  }
  
  // 状态
  &--disabled {
    opacity: 0.5;
    cursor: not-allowed;
    
    &:hover {
      transform: none;
    }
  }
  
  &--loading {
    cursor: wait;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 16px;
      height: 16px;
      margin: -8px 0 0 -8px;
      border: 2px solid transparent;
      border-top-color: currentColor;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }
  }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

// 特殊效果类
.btn-soft {
  box-shadow: none;
  
  &.btn--primary {
    background: var(--color-soft-pink);
    color: var(--color-primary);
    
    &:hover {
      background: var(--color-accent);
    }
  }
}

// 响应式调整
@media (max-width: $breakpoint-mobile) {
  .btn {
    &--sm {
      padding: 6px 12px;
      font-size: $font-size-xs;
      min-height: 32px;
    }
    
    &--md {
      padding: 10px 20px;
      font-size: $font-size-sm;
      min-height: 40px;
    }
    
    &--lg {
      padding: 14px 28px;
      font-size: $font-size-base;
      min-height: 48px;
    }
  }
}
</style>
