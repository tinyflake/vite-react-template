import type { PersonalInfo, ContactInfo, SocialLink } from '../types'

export const personalInfo: PersonalInfo = {
  name: 'tinyflake',
  title: '全栈开发工程师',
  description: '专注于现代 Web 技术，热爱创造优雅的用户体验。拥有丰富的前端和后端开发经验，致力于构建高质量的数字产品。',
  avatar: '/images/avatar.jpg',
  resumeUrl: '/resume.pdf'
}

export const contactInfo: ContactInfo = {
  email: 'huan@tinyflake.top',
  phone: '+86 189 8337 3149',
  location: '武汉, 中国'
}

export const socialLinks: SocialLink[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com/tinyflake',
    icon: 'github'
  },
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com/in/username',
    icon: 'linkedin'
  },
  {
    platform: 'Twitter',
    url: 'https://twitter.com/username',
    icon: 'twitter'
  },
  {
    platform: 'Email',
    url: 'mailto:huan@tinyflake.top',
    icon: 'email'
  }
]
