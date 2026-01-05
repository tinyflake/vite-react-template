<template>
  <div :class="spinnerClasses">
    <div class="spinner__circle" />
    <div v-if="text" class="spinner__text">{{ text }}</div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  size?: 'sm' | 'md' | 'lg'
  text?: string
  color?: string
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md'
})

const spinnerClasses = computed(() => [
  'spinner',
  `spinner--${props.size}`
])
</script>

<style scoped lang="scss">
.spinner {
  @include flex-center;
  flex-direction: column;
  gap: $spacing-sm;
  
  &--sm .spinner__circle {
    width: 20px;
    height: 20px;
    border-width: 2px;
  }
  
  &--md .spinner__circle {
    width: 32px;
    height: 32px;
    border-width: 3px;
  }
  
  &--lg .spinner__circle {
    width: 48px;
    height: 48px;
    border-width: 4px;
  }
}

.spinner__circle {
  border: 3px solid var(--color-gray-200);
  border-top-color: v-bind('props.color || "var(--color-primary)"');
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

.spinner__text {
  @include text-small;
  color: var(--color-text-secondary);
  text-align: center;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
