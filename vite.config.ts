import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { createUnoCSSPluginConfig } from './plugins/unocss';

import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';
import vueJsx from '@vitejs/plugin-vue-jsx';

export default defineConfig({
  plugins: [
    vue(),
    vueJsx({ transformOn: true, mergeProps: true, enableObjectSlots: true }),
    createUnoCSSPluginConfig(),
    AutoImport({ imports: ['vue', 'vue-router', 'pinia'] }),
    Components({ resolvers: [NaiveUiResolver()] }),
  ],
  base: './',
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
});
