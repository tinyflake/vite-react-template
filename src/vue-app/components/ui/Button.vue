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
  overflow: hidden;
  border-radius: 16px;
  font-weight: 500;
  text-transform: none;
  letter-spacing: 0.3px;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  cursor: pointer;
  user-select: none;
  
  // 基础光效
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg, 
      transparent, 
      rgba(255, 255, 255, 0.4), 
      transparent
    );
    transition: left 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    z-index: 1;
  }
  
  // 悬浮光效
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.3) 0%,
      transparent 70%
    );
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    z-index: 0;
  }
  
  &:hover {
    &::before {
      left: 100%;
    }
    
    &::after {
      width: 120%;
      height: 120%;
    }
  }
  
  // Primary - 梦幻粉紫渐变
  &--primary {
    background: linear-gradient(
      135deg,
      #ff6b9d 0%,
      #c44569 25%,
      #f8b500 50%,
      #ff6b9d 75%,
      #c44569 100%
    );
    background-size: 200% 200%;
    color: white;
    border: none;
    box-shadow: 
      0 4px 15px rgba(255, 107, 157, 0.3),
      0 2px 8px rgba(196, 69, 105, 0.2),
      inset 0 1px 0 rgba(255, 255, 255, 0.3);
    
    &:hover:not(.btn--disabled) {
      transform: translateY(-3px) scale(1.02);
      background-position: 100% 100%;
      box-shadow: 
        0 8px 25px rgba(255, 107, 157, 0.4),
        0 4px 15px rgba(196, 69, 105, 0.3),
        inset 0 1px 0 rgba(255, 255, 255, 0.4);
      animation: shimmer 2s ease-in-out infinite;
    }
    
    &:active {
      transform: translateY(-1px) scale(1.01);
    }
  }
  
  // Secondary - 清新蓝绿渐变
  &--secondary {
    background: linear-gradient(
      135deg,
      #4facfe 0%,
      #00f2fe 50%,
      #4facfe 100%
    );
    background-size: 200% 200%;
    color: white;
    border: none;
    box-shadow: 
      0 4px 15px rgba(79, 172, 254, 0.3),
      0 2px 8px rgba(0, 242, 254, 0.2);
    
    &:hover:not(.btn--disabled) {
      transform: translateY(-3px) scale(1.02);
      background-position: 100% 100%;
      box-shadow: 
        0 8px 25px rgba(79, 172, 254, 0.4),
        0 4px 15px rgba(0, 242, 254, 0.3);
    }
  }
  
  // Outline - 玻璃态边框
  &--outline {
    background: rgba(255, 255, 255, 0.1);
    color: var(--color-primary);
    border: 2px solid;
    border-image: linear-gradient(135deg, #ff6b9d, #4facfe, #00f2fe) 1;
    backdrop-filter: blur(20px);
    position: relative;
    
    &::before {
      background: linear-gradient(
        90deg, 
        transparent, 
        rgba(255, 107, 157, 0.2), 
        transparent
      );
    }
    
    &:hover:not(.btn--disabled) {
      background: rgba(255, 255, 255, 0.2);
      transform: translateY(-2px) scale(1.02);
      box-shadow: 
        0 8px 25px rgba(255, 107, 157, 0.2),
        inset 0 0 20px rgba(255, 255, 255, 0.1);
    }
  }
  
  // Ghost - 极简透明
  &--ghost {
    background: rgba(255, 255, 255, 0.05);
    color: var(--color-text-secondary);
    border: 1px solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    
    &:hover:not(.btn--disabled) {
      background: rgba(255, 255, 255, 0.15);
      color: var(--color-primary);
      transform: translateY(-1px);
      border-color: rgba(255, 107, 157, 0.3);
    }
  }
  
  // 尺寸变体
  &--sm {
    padding: 8px 20px;
    font-size: 13px;
    min-height: 36px;
    border-radius: 12px;
  }
  
  &--md {
    padding: 12px 28px;
    font-size: 14px;
    min-height: 44px;
    border-radius: 14px;
  }
  
  &--lg {
    padding: 16px 36px;
    font-size: 16px;
    min-height: 52px;
    border-radius: 18px;
  }
  
  &--disabled {
    opacity: 0.4;
    cursor: not-allowed;
    filter: grayscale(0.5);
    
    &:hover {
      transform: none;
      background-position: 0% 0%;
    }
  }
  
  &--loading {
    cursor: wait;
    
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 18px;
      height: 18px;
      margin: -9px 0 0 -9px;
      border: 2px solid transparent;
      border-top-color: currentColor;
      border-radius: 50%;
      animation: spin 1s linear infinite;
      z-index: 2;
    }
  }
}

// 动画效果
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes shimmer {
  0%, 100% { 
    background-position: 0% 50%; 
  }
  50% { 
    background-position: 100% 50%; 
  }
}

@keyframes pulse-glow {
  0%, 100% {
    box-shadow: 
      0 4px 15px rgba(255, 107, 157, 0.3),
      0 0 20px rgba(255, 107, 157, 0.1);
  }
  50% {
    box-shadow: 
      0 8px 25px rgba(255, 107, 157, 0.5),
      0 0 30px rgba(255, 107, 157, 0.3);
  }
}

// 特殊效果类
.btn-glow {
  animation: pulse-glow 2s ease-in-out infinite;
  
  &:hover {
    animation: none;
  }
}

.btn-kawaii {
  position: relative;
  
  &::before {
    content: '✨';
    position: absolute;
    top: -8px;
    right: -8px;
    font-size: 14px;
    opacity: 0;
    transform: rotate(0deg) scale(0.8);
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    z-index: 3;
  }
  
  &:hover::before {
    opacity: 1;
    transform: rotate(15deg) scale(1);
  }
}

// 响应式调整
@media (max-width: 768px) {
  .btn {
    &--sm {
      padding: 6px 16px;
      font-size: 12px;
      min-height: 32px;
    }
    
    &--md {
      padding: 10px 24px;
      font-size: 13px;
      min-height: 40px;
    }
    
    &--lg {
      padding: 14px 32px;
      font-size: 15px;
      min-height: 48px;
    }
  }
}
</style>
