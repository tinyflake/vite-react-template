import type { PersonalData } from '../types'
import { personalInfo, contactInfo, socialLinks } from './personal'
import { projects } from './projects'
import { skillCategories } from './skills'

// 导出所有数据
export * from './personal'
export * from './projects'
export * from './skills'
export * from './theme'

// 完整的个人数据
export const personalData: PersonalData = {
  personal: personalInfo,
  projects,
  skills: skillCategories,
  contact: contactInfo,
  social: socialLinks
}
