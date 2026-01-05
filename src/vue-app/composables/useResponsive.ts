import { ref, onMounted, onUnmounted } from 'vue'
import { breakpoints } from '../data/theme'

export function useResponsive() {
  const windowWidth = ref(0)
  
  const isMobile = ref(false)
  const isTablet = ref(false)
  const isDesktop = ref(false)
  
  const updateBreakpoints = () => {
    windowWidth.value = window.innerWidth
    isMobile.value = windowWidth.value < breakpoints.mobile
    isTablet.value = windowWidth.value >= breakpoints.mobile && windowWidth.value < breakpoints.tablet
    isDesktop.value = windowWidth.value >= breakpoints.tablet
  }
  
  const handleResize = () => {
    updateBreakpoints()
  }
  
  onMounted(() => {
    updateBreakpoints()
    window.addEventListener('resize', handleResize)
  })
  
  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
  })
  
  return {
    windowWidth,
    isMobile,
    isTablet,
    isDesktop
  }
}
