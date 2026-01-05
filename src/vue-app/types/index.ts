// 个人信息接口
export interface PersonalInfo {
  name: string;
  title: string;
  description: string;
  avatar: string;
  resumeUrl?: string;
}

// 项目接口
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

// 技能接口
export interface Skill {
  name: string;
  icon: string;
  level: number; // 1-5
  category: 'frontend' | 'backend' | 'tools' | 'design';
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

// 联系信息接口
export interface ContactInfo {
  email: string;
  phone?: string;
  location?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

// 主题配置接口
export interface ThemeConfig {
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

// 响应式断点接口
export interface Breakpoints {
  mobile: number;    // 768px
  tablet: number;    // 1024px
  desktop: number;   // 1280px
}

// 路由配置接口
export interface RouteConfig {
  path: string;
  name: string;
  component: any;
  meta: {
    title: string;
    description?: string;
  };
}

// 完整个人数据接口
export interface PersonalData {
  personal: PersonalInfo;
  projects: Project[];
  skills: SkillCategory[];
  contact: ContactInfo;
  social: SocialLink[];
}

// 组件 Props 接口
export interface HeroProps {
  personalInfo: PersonalInfo;
}

export interface ProjectCardProps {
  project: Project;
  variant?: 'default' | 'featured';
}

export interface SkillsProps {
  categories: SkillCategory[];
  showLevels?: boolean;
}

export interface ContactProps {
  contactInfo: ContactInfo;
  socialLinks: SocialLink[];
}
