# 个人网站设计文档

## 概述

个人网站是一个基于 Vue 3 的现代化单页应用，采用组合式 API 和 TypeScript 构建。网站使用哈希路由实现页面导航，具备完全响应式设计，展示个人专业档案、项目作品和技能。

## 架构

### 技术栈
- **前端框架**: Vue 3 (Composition API)
- **路由**: Vue Router 4 (Hash 模式)
- **样式**: SCSS + CSS3
- **图标**: Heroicons
- **动画**: CSS Transitions + Transform
- **构建工具**: Vite
- **部署**: Cloudflare Workers

### 项目结构
```
src/vue-app/
├── components/           # 可复用组件
│   ├── common/          # 通用组件
│   │   ├── AppHeader.vue
│   │   ├── AppFooter.vue
│   │   └── LoadingSpinner.vue
│   ├── home/            # 首页组件
│   │   ├── HeroSection.vue
│   │   ├── ProjectCard.vue
│   │   ├── SkillsOverview.vue
│   │   └── ContactSection.vue
│   └── ui/              # UI 组件
│       ├── Button.vue
│       ├── Card.vue
│       └── ProgressBar.vue
├── views/               # 页面组件
│   ├── Home.vue
│   ├── About.vue
│   ├── Projects.vue
│   ├── Skills.vue
│   └── Contact.vue
├── router/              # 路由配置
│   └── index.ts
├── composables/         # 组合式函数
│   ├── useTheme.ts
│   ├── useAnimation.ts
│   └── useResponsive.ts
├── data/                # 静态数据
│   ├── projects.ts
│   ├── skills.ts
│   └── personal.ts
├── styles/              # 样式文件
│   ├── main.scss
│   ├── variables.scss
│   ├── mixins.scss
│   └── components.scss
└── assets/              # 静态资源
    ├── images/
    └── icons/
```

## 组件和接口

### 核心组件

#### 1. App.vue (根组件)
```typescript
interface AppState {
  isLoading: boolean;
  currentRoute: string;
}
```

#### 2. HeroSection.vue
```typescript
interface PersonalInfo {
  name: string;
  title: string;
  description: string;
  avatar: string;
  resumeUrl?: string;
}

interface HeroProps {
  personalInfo: PersonalInfo;
}
```

#### 3. ProjectCard.vue
```typescript
interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

interface ProjectCardProps {
  project: Project;
  variant?: 'default' | 'featured';
}
```

#### 4. SkillsOverview.vue
```typescript
interface Skill {
  name: string;
  icon: string;
  level: number; // 1-5
  category: 'frontend' | 'backend' | 'tools' | 'design';
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

interface SkillsProps {
  categories: SkillCategory[];
  showLevels?: boolean;
}
```

#### 5. ContactSection.vue
```typescript
interface ContactInfo {
  email: string;
  phone?: string;
  location?: string;
}

interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

interface ContactProps {
  contactInfo: ContactInfo;
  socialLinks: SocialLink[];
}
```

### 路由配置
```typescript
interface RouteConfig {
  path: string;
  name: string;
  component: Component;
  meta: {
    title: string;
    description?: string;
  };
}
```

## 数据模型

### 个人信息模型
```typescript
interface PersonalData {
  personal: PersonalInfo;
  projects: Project[];
  skills: SkillCategory[];
  contact: ContactInfo;
  social: SocialLink[];
}
```

### 主题配置模型
```typescript
interface ThemeConfig {
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;
  textColor: string;
  cardBackground: string;
  borderRadius: string;
  shadows: {
    small: string;
    medium: string;
    large: string;
  };
}
```

### 响应式断点模型
```typescript
interface Breakpoints {
  mobile: number;    // 768px
  tablet: number;    // 1024px
  desktop: number;   // 1280px
}
```

## 正确性属性

*属性是应该在系统所有有效执行中保持为真的特征或行为——本质上是关于系统应该做什么的正式声明。属性作为人类可读规范和机器可验证正确性保证之间的桥梁。*

### 属性 1: 主视觉区域内容完整性
*对于任何* 个人信息数据，当渲染主视觉区域时，应该显示姓名、职业标题、简介和头像等所有必需元素
**验证需求: 1.1, 1.2, 1.4**

### 属性 2: 介绍文本长度限制
*对于任何* 输入的介绍文本，显示的内容应该限制在 2-3 句话以保持清晰
**验证需求: 1.3**

### 属性 3: 哈希路由导航一致性
*对于任何* 导航操作，URL 应该使用哈希片段更新，并且直接访问哈希 URL 应该加载正确的页面内容
**验证需求: 2.1, 2.2, 2.3, 2.5**

### 属性 4: 项目卡片内容完整性
*对于任何* 项目数据，项目卡片应该包含标题、描述、技术标签和图片等所有必需元素
**验证需求: 3.1, 3.2, 3.4**

### 属性 5: 条件性链接显示
*对于任何* 包含演示或代码仓库链接的项目，项目卡片应该显示相应的可点击链接
**验证需求: 3.3**

### 属性 6: 响应式布局适配
*对于任何* 屏幕尺寸变化，项目卡片在移动设备上应该垂直堆叠，触摸目标应该满足最小尺寸要求
**验证需求: 3.5, 6.2, 6.4**

### 属性 7: 技能分类显示
*对于任何* 技能数据，应该按类别正确分组显示，每个技能项应该包含图标和熟练度指示器
**验证需求: 4.2, 4.3, 4.4, 4.5**

### 属性 8: 联系信息完整性
*对于任何* 联系数据，联系部分应该包含邮箱、社交媒体链接和相应的图标
**验证需求: 5.1, 5.2, 5.4**

### 属性 9: 外部链接行为
*对于任何* 社交媒体链接，点击时应该在新标签页中打开
**验证需求: 5.3**

### 属性 10: 交互效果响应
*对于任何* 可交互元素，悬停时应该提供视觉反馈效果
**验证需求: 7.3**

### 属性 11: 卡片布局结构
*对于任何* 内容组织，应该使用基于卡片的布局和明确的区域划分
**验证需求: 7.4**

### 属性 12: 无障碍对比度
*对于任何* 文本和背景颜色组合，对比度应该符合 WCAG 无障碍标准
**验证需求: 7.5**

## 错误处理

### 数据加载错误
- 个人信息加载失败时显示默认占位符
- 项目图片加载失败时显示默认图片
- 技能图标加载失败时显示文字标签

### 路由错误
- 无效路由重定向到首页
- 路由加载失败时显示错误页面

### 响应式错误
- 极小屏幕尺寸的降级处理
- 图片加载失败的响应式占位符

## 测试策略

### 单元测试
- 组件渲染测试
- 数据处理函数测试
- 路由配置测试
- 响应式工具函数测试

### 属性基于测试
- 使用 **@fast-check/vitest** 进行属性测试
- 每个属性测试运行最少 100 次迭代
- 测试数据生成器覆盖边界情况
- 每个正确性属性对应一个属性测试

### 集成测试
- 页面导航流程测试
- 响应式布局测试
- 用户交互流程测试

### 测试标注要求
- 每个属性测试必须使用注释标注对应的设计文档属性
- 格式: `**Feature: personal-website, Property {number}: {property_text}**`
- 每个正确性属性必须由单个属性测试实现
