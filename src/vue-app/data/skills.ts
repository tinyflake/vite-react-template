import type { SkillCategory } from '../types'

export const skillCategories: SkillCategory[] = [
  {
    name: '前端开发',
    skills: [
      {
        name: 'Vue.js',
        icon: 'vue',
        level: 5,
        category: 'frontend'
      },
      {
        name: 'React',
        icon: 'react',
        level: 4,
        category: 'frontend'
      },
      {
        name: 'TypeScript',
        icon: 'typescript',
        level: 5,
        category: 'frontend'
      },
      {
        name: 'JavaScript',
        icon: 'javascript',
        level: 5,
        category: 'frontend'
      },
      {
        name: 'HTML5',
        icon: 'html5',
        level: 5,
        category: 'frontend'
      },
      {
        name: 'CSS3',
        icon: 'css3',
        level: 5,
        category: 'frontend'
      },
      {
        name: 'Sass/SCSS',
        icon: 'sass',
        level: 4,
        category: 'frontend'
      },
      {
        name: 'Tailwind CSS',
        icon: 'tailwindcss',
        level: 4,
        category: 'frontend'
      }
    ]
  },
  {
    name: '后端开发',
    skills: [
      {
        name: 'Node.js',
        icon: 'nodejs',
        level: 4,
        category: 'backend'
      },
      {
        name: 'Python',
        icon: 'python',
        level: 4,
        category: 'backend'
      },
      {
        name: 'Go',
        icon: 'go',
        level: 3,
        category: 'backend'
      },
      {
        name: 'Express.js',
        icon: 'express',
        level: 4,
        category: 'backend'
      },
      {
        name: 'FastAPI',
        icon: 'fastapi',
        level: 3,
        category: 'backend'
      },
      {
        name: 'MongoDB',
        icon: 'mongodb',
        level: 4,
        category: 'backend'
      },
      {
        name: 'PostgreSQL',
        icon: 'postgresql',
        level: 4,
        category: 'backend'
      },
      {
        name: 'Redis',
        icon: 'redis',
        level: 3,
        category: 'backend'
      }
    ]
  },
  {
    name: '开发工具',
    skills: [
      {
        name: 'Git',
        icon: 'git',
        level: 5,
        category: 'tools'
      },
      {
        name: 'Docker',
        icon: 'docker',
        level: 4,
        category: 'tools'
      },
      {
        name: 'Kubernetes',
        icon: 'kubernetes',
        level: 3,
        category: 'tools'
      },
      {
        name: 'AWS',
        icon: 'aws',
        level: 3,
        category: 'tools'
      },
      {
        name: 'Vercel',
        icon: 'vercel',
        level: 4,
        category: 'tools'
      },
      {
        name: 'Vite',
        icon: 'vite',
        level: 5,
        category: 'tools'
      },
      {
        name: 'Webpack',
        icon: 'webpack',
        level: 4,
        category: 'tools'
      },
      {
        name: 'ESLint',
        icon: 'eslint',
        level: 4,
        category: 'tools'
      }
    ]
  },
  {
    name: '设计工具',
    skills: [
      {
        name: 'Figma',
        icon: 'figma',
        level: 4,
        category: 'design'
      },
      {
        name: 'Adobe XD',
        icon: 'adobexd',
        level: 3,
        category: 'design'
      },
      {
        name: 'Sketch',
        icon: 'sketch',
        level: 3,
        category: 'design'
      },
      {
        name: 'Photoshop',
        icon: 'photoshop',
        level: 3,
        category: 'design'
      }
    ]
  }
]

// 获取所有技能的扁平列表
export const getAllSkills = () => {
  return skillCategories.flatMap(category => category.skills)
}

// 根据类别获取技能
export const getSkillsByCategory = (categoryName: string) => {
  const category = skillCategories.find(cat => cat.name === categoryName)
  return category ? category.skills : []
}

// 获取高级技能（level >= 4）
export const getAdvancedSkills = () => {
  return getAllSkills().filter(skill => skill.level >= 4)
}
