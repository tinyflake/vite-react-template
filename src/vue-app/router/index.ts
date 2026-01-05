import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

// 路由组件懒加载
const Home = () => import('../views/Home.vue')
const About = () => import('../views/About.vue')
const Projects = () => import('../views/Projects.vue')
const Skills = () => import('../views/Skills.vue')
const Contact = () => import('../views/Contact.vue')

// 路由配置
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: '首页 - 个人网站',
      description: '欢迎来到我的个人网站，了解我的专业技能和项目作品'
    }
  },
  {
    path: '/about',
    name: 'about',
    component: About,
    meta: {
      title: '关于我 - 个人网站',
      description: '了解更多关于我的背景、经历和专业技能'
    }
  },
  {
    path: '/projects',
    name: 'projects',
    component: Projects,
    meta: {
      title: '项目作品 - 个人网站',
      description: '查看我的项目作品集和技术实现'
    }
  },
  {
    path: '/skills',
    name: 'skills',
    component: Skills,
    meta: {
      title: '技能专长 - 个人网站',
      description: '了解我的技术栈和专业技能'
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
    meta: {
      title: '联系我 - 个人网站',
      description: '通过多种方式与我取得联系'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    redirect: '/'
  }
]

// 创建路由实例
const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, _, savedPosition) {
    // 如果有保存的位置（浏览器前进后退），恢复到该位置
    if (savedPosition) {
      return savedPosition
    }
    // 如果有锚点，滚动到锚点
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
    // 否则滚动到顶部
    return { top: 0, behavior: 'smooth' }
  }
})

// 路由守卫 - 更新页面标题
router.beforeEach((to, _, next) => {
  // 更新页面标题
  if (to.meta?.title) {
    document.title = to.meta.title as string
  }
  
  // 更新页面描述
  if (to.meta?.description) {
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', to.meta.description as string)
    } else {
      const meta = document.createElement('meta')
      meta.name = 'description'
      meta.content = to.meta.description as string
      document.head.appendChild(meta)
    }
  }
  
  next()
})

// 路由错误处理
router.onError((error) => {
  console.error('路由错误:', error)
  // 发生错误时重定向到首页
  router.push('/')
})

export default router
