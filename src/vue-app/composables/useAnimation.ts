import { ref, nextTick } from 'vue'

export function useAnimation() {
  const isAnimating = ref(false)
  
  const fadeIn = async (element: HTMLElement, duration = 300) => {
    if (!element) return
    
    isAnimating.value = true
    element.style.opacity = '0'
    element.style.transform = 'translateY(20px)'
    element.style.transition = `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`
    
    await nextTick()
    
    element.style.opacity = '1'
    element.style.transform = 'translateY(0)'
    
    setTimeout(() => {
      isAnimating.value = false
    }, duration)
  }
  
  const slideIn = async (element: HTMLElement, direction: 'left' | 'right' | 'up' | 'down' = 'up', duration = 300) => {
    if (!element) return
    
    isAnimating.value = true
    
    const transforms = {
      left: 'translateX(-100%)',
      right: 'translateX(100%)',
      up: 'translateY(-100%)',
      down: 'translateY(100%)'
    }
    
    element.style.opacity = '0'
    element.style.transform = transforms[direction]
    element.style.transition = `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`
    
    await nextTick()
    
    element.style.opacity = '1'
    element.style.transform = 'translate(0, 0)'
    
    setTimeout(() => {
      isAnimating.value = false
    }, duration)
  }
  
  const staggeredFadeIn = async (elements: HTMLElement[], delay = 100) => {
    if (!elements.length) return
    
    isAnimating.value = true
    
    for (let i = 0; i < elements.length; i++) {
      setTimeout(() => {
        fadeIn(elements[i])
      }, i * delay)
    }
    
    setTimeout(() => {
      isAnimating.value = false
    }, elements.length * delay + 300)
  }
  
  return {
    isAnimating,
    fadeIn,
    slideIn,
    staggeredFadeIn
  }
}
