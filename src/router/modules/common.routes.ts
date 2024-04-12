import { RouteRecordRaw } from 'vue-router';
import { ExampleNaiveUIPage } from '@/pages/example/naiveUI';
import { DefaultLayout } from '@/layout';
import { ExampleDefaultUIPage } from '@/pages/example/defaultUI';

export const commonRoutes: RouteRecordRaw[] = [
  { name: 'Index', path: '/', redirect: '/example/naiveUI' },
  {
    name: 'Example',
    path: '/example',
    component: DefaultLayout,
    children: [
      { path: 'naiveUI', component: () => Promise.resolve(ExampleNaiveUIPage), meta: { title: '使用naiveUI' } },
      { path: 'defaultUI', component: () => Promise.resolve(ExampleDefaultUIPage), meta: { title: '使用原生UI' } },
    ],
  },
];
