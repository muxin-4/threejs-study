import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
  },
  routes: [
    {
      path: '/',
      redirect: '/helloWorld',
    },
    {
      name: '入门简单示例',
      path: '/helloWorld',
      component: './HelloWorld',
    },
    {
      name: '轨道控制器',
      path: '/OrbitControls',
      component: './OrbitControls',
    },
    {
      name: '权限演示',
      path: '/access',
      component: './Access',
    },
    {
      name: ' CRUD 示例',
      path: '/table',
      component: './Table',
    },
  ],
  npmClient: 'pnpm',
});
