import { ref, computed } from 'vue'
import { themeConfig, darkThemeConfig } from '../data/theme'

export function useTheme() {
  const isDark = ref(false)
  
  const currentTheme = computed(() => {
    return isDark.value ? darkThemeConfig : themeConfig
  })
  
  const toggleTheme = () => {
    isDark.value = !isDark.value
    updateCSSVariables()
  }
  
  const setTheme = (dark: boolean) => {
    isDark.value = dark
    updateCSSVariables()
  }
  
  const updateCSSVariables = () => {
    const theme = currentTheme.value
    const root = document.documentElement
    
    root.style.setProperty('--color-primary', theme.primaryColor)
    root.style.setProperty('--color-secondary', theme.secondaryColor)
    root.style.setProperty('--color-background', theme.backgroundColor)
    root.style.setProperty('--color-text-primary', theme.textColor)
    root.style.setProperty('--color-surface', theme.cardBackground)
    root.style.setProperty('--shadow-sm', theme.shadows.small)
    root.style.setProperty('--shadow-md', theme.shadows.medium)
    root.style.setProperty('--shadow-lg', theme.shadows.large)
  }
  
  // 初始化主题
  const initTheme = () => {
    // 检查用户偏好
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const savedTheme = localStorage.getItem('theme')
    
    if (savedTheme) {
      isDark.value = savedTheme === 'dark'
    } else {
      isDark.value = prefersDark
    }
    
    updateCSSVariables()
  }
  
  // 保存主题偏好
  const saveTheme = () => {
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
  }
  
  return {
    isDark,
    currentTheme,
    toggleTheme,
    setTheme,
    initTheme,
    saveTheme
  }
}
