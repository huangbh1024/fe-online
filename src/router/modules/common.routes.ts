import { RouteRecordRaw } from 'vue-router';
import { MainPage } from '@/pages/main';

export const commonRoutes: RouteRecordRaw[] = [
  { name: 'Main', path: '/', component: () => Promise.resolve(MainPage), meta: { title: '主页' } },
];
