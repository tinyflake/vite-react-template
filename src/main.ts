// @ts-ignore
// 统一入口文件
const framework = __FRAMEWORK__;

if (framework === 'vue') {
  document.title = 'Vite + Vue';
  const rootEl = document.getElementById('root');
  if (rootEl) rootEl.style.display = 'none';
  import('./vue-app/main.ts');
} else {
  document.title = 'Vite + React';
  const appEl = document.getElementById('app');
  if (appEl) appEl.style.display = 'none';
  import('./react-app/main.tsx');
}
