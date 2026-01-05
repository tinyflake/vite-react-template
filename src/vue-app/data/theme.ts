import type { ThemeConfig, Breakpoints } from '../types'

export const themeConfig: ThemeConfig = {
  primaryColor: '#3b82f6',
  secondaryColor: '#8b5cf6',
  backgroundColor: '#ffffff',
  textColor: '#111827',
  cardBackground: '#ffffff',
  borderRadius: '0.5rem',
  shadows: {
    small: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    medium: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    large: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)'
  }
}

export const breakpoints: Breakpoints = {
  mobile: 768,
  tablet: 1024,
  desktop: 1280
}

// 深色主题配置
export const darkThemeConfig: ThemeConfig = {
  primaryColor: '#60a5fa',
  secondaryColor: '#a78bfa',
  backgroundColor: '#111827',
  textColor: '#f9fafb',
  cardBackground: '#1f2937',
  borderRadius: '0.5rem',
  shadows: {
    small: '0 1px 2px 0 rgb(0 0 0 / 0.3)',
    medium: '0 4px 6px -1px rgb(0 0 0 / 0.3), 0 2px 4px -2px rgb(0 0 0 / 0.3)',
    large: '0 10px 15px -3px rgb(0 0 0 / 0.3), 0 4px 6px -4px rgb(0 0 0 / 0.3)'
  }
}
