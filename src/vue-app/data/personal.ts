import type { PersonalInfo, ContactInfo, SocialLink } from '../types'

export const personalInfo: PersonalInfo = {
  name: '张三',
  title: '全栈开发工程师',
  description: '专注于现代 Web 技术，热爱创造优雅的用户体验。拥有丰富的前端和后端开发经验，致力于构建高质量的数字产品。',
  avatar: '/images/avatar.jpg',
  resumeUrl: '/resume.pdf'
}

export const contactInfo: ContactInfo = {
  email: 'hello@example.com',
  phone: '+86 138 0000 0000',
  location: '北京, 中国'
}

export const socialLinks: SocialLink[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com/username',
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
    url: 'mailto:hello@example.com',
    icon: 'email'
  }
]
