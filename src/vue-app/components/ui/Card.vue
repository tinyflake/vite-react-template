<template>
  <div :class="cardClasses">
    <div v-if="$slots.header" class="card__header">
      <slot name="header" />
    </div>
    
    <div class="card__body">
      <slot />
    </div>
    
    <div v-if="$slots.footer" class="card__footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  variant?: 'default' | 'elevated' | 'outlined' | 'filled'
  padding?: 'none' | 'sm' | 'md' | 'lg'
  hoverable?: boolean
  clickable?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  padding: 'md',
  hoverable: false,
  clickable: false
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const cardClasses = computed(() => {
  const classes = ['card', `card--${props.variant}`, `card--padding-${props.padding}`]
  
  if (props.hoverable) {
    classes.push('card--hoverable')
  }
  
  if (props.clickable) {
    classes.push('card--clickable')
  }
  
  return classes
})

const handleClick = (event: MouseEvent) => {
  if (props.clickable) {
    emit('click', event)
  }
}
</script>

<style scoped lang="scss">
.card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: $border-radius-2xl;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  
  // 添加微妙的边框光效
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: $border-radius-2xl;
    padding: 1px;
    background: var(--gradient-primary);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.3s;
  }
  
  &--default {
    box-shadow: var(--shadow-sm);
    border: 1px solid rgba(255, 107, 157, 0.1);
  }
  
  &--elevated {
    box-shadow: var(--shadow-lg);
    border: 1px solid rgba(255, 107, 157, 0.2);
    
    &::before {
      opacity: 0.3;
    }
  }
  
  &--outlined {
    border: 2px solid var(--color-primary);
    box-shadow: var(--shadow-sm);
    
    &::before {
      opacity: 0.5;
    }
  }
  
  &--filled {
    background: var(--gradient-secondary);
    border: none;
    box-shadow: var(--shadow-md);
  }
  
  &--hoverable:hover {
    box-shadow: var(--shadow-xl);
    transform: translateY(-4px) scale(1.02);
    
    &::before {
      opacity: 0.6;
    }
  }
  
  &--clickable {
    cursor: pointer;
    
    &:hover {
      box-shadow: var(--shadow-xl);
      transform: translateY(-3px) scale(1.01);
      
      &::before {
        opacity: 0.5;
      }
    }
    
    &:active {
      transform: translateY(-1px) scale(1);
    }
  }
  
  // 内边距变体
  &--padding-none {
    .card__header,
    .card__body,
    .card__footer {
      padding: 0;
    }
  }
  
  &--padding-sm {
    .card__header,
    .card__body,
    .card__footer {
      padding: $spacing-sm;
    }
  }
  
  &--padding-md {
    .card__header,
    .card__body,
    .card__footer {
      padding: $spacing-lg;
    }
  }
  
  &--padding-lg {
    .card__header,
    .card__body,
    .card__footer {
      padding: $spacing-xl;
    }
  }
}

.card__header {
  border-bottom: 1px solid rgba(255, 107, 157, 0.1);
  background: rgba(255, 255, 255, 0.5);
  
  &:empty {
    display: none;
  }
}

.card__body {
  flex: 1;
}

.card__footer {
  border-top: 1px solid rgba(255, 107, 157, 0.1);
  background: rgba(255, 255, 255, 0.5);
  
  &:empty {
    display: none;
  }
}
</style>
