import { createApp } from 'vue';
import { App } from './App';
import 'virtual:uno.css';
import '@unocss/reset/sanitize/sanitize.css';
import '@unocss/reset/sanitize/assets.css';
import './assets/style/public.css';
import { setupRouter } from './router';

const initApp = async () => {
  const app = createApp(App);
  setupRouter(app);
  app.mount('#app');
};

initApp();
