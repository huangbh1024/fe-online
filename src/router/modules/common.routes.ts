import { RouteRecordRaw } from 'vue-router';
import { MainPage } from '@/pages/main';
import { DefaultLayout } from '@/layout';

export const commonRoutes: RouteRecordRaw[] = [
  {
    name: 'Components',
    path: '/components',
    component: DefaultLayout,
    children: [{ path: 'naiveUI', component: () => Promise.resolve(MainPage), meta: { title: '使用naiveUI' } }],
  },
];
