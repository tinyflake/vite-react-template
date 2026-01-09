import type { Project } from '../types'
import MainPng from '../assets/main.png'

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'mars3d-APi',
    description: 'Mars3D API 文档查看器，提供更友好的阅读体验',
    image: MainPng,
    technologies: ['Vue3','Mars3D API 文档'],
    demoUrl: 'http://mars3dapi.tinyflake.top/',
    githubUrl: '',
    featured: true
    },
//     {
//     id: 'project-2',
//     title: 'API 网关服务',
//     description: '高性能的 API 网关，提供请求路由、负载均衡、认证授权、限流等功能。支持微服务架构和容器化部署。',
//     image: '/images/projects/api-gateway.jpg',
//     technologies: ['Go', 'Redis', 'Nginx', 'Kubernetes', 'Prometheus'],
//     githubUrl: '',
//     featured: true
//   }
//   {
//     id: 'project-2',
//     title: '实时聊天应用',
//     description: '支持多人实时聊天的 Web 应用，具备消息推送、文件分享、表情包等功能。使用 WebSocket 技术实现低延迟通信，支持群组聊天和私聊。',
//     image: '/images/projects/chat-app.jpg',
//     technologies: ['React', 'Socket.io', 'Express', 'PostgreSQL', 'AWS S3'],
//     demoUrl: 'https://chat.example.com',
//     githubUrl: 'https://github.com/username/chat-app',
//     featured: true
//   },
//   {
//     id: 'project-3',
//     title: '数据可视化仪表板',
//     description: '企业级数据分析和可视化平台，提供丰富的图表类型和交互功能。支持实时数据更新、自定义报表生成和数据导出功能。',
//     image: '/images/projects/dashboard.jpg',
//     technologies: ['Vue 3', 'D3.js', 'Python', 'FastAPI', 'ClickHouse'],
//     demoUrl: 'https://dashboard.example.com',
//     githubUrl: 'https://github.com/username/data-dashboard',
//     featured: true
//   },
//   {
//     id: 'project-4',
//     title: '移动端 App',
//     description: '跨平台移动应用，提供流畅的用户体验和丰富的功能。支持离线使用、推送通知和社交分享等特性。',
//     image: '/images/projects/mobile-app.jpg',
//     technologies: ['React Native', 'TypeScript', 'Firebase', 'Redux'],
//     demoUrl: 'https://app.example.com',
//     githubUrl: 'https://github.com/username/mobile-app',
//     featured: false
//   },
//   {
//     id: 'project-5',
//     title: '博客系统',
//     description: '现代化的个人博客平台，支持 Markdown 编辑、标签分类、评论系统等功能。具备 SEO 优化和响应式设计。',
//     image: '/images/projects/blog.jpg',
//     technologies: ['Next.js', 'MDX', 'Tailwind CSS', 'Vercel'],
//     demoUrl: 'https://blog.example.com',
//     githubUrl: 'https://github.com/username/blog-system',
//     featured: false
//   },

]

// 获取精选项目（最多4个）
export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured).slice(0, 4)
}

// 根据技术栈筛选项目
export const getProjectsByTechnology = (tech: string): Project[] => {
  return projects.filter(project => 
    project.technologies.some(t => t.toLowerCase().includes(tech.toLowerCase()))
  )
}
