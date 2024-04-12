import { createApp } from 'vue';
import { App } from './App';
import 'virtual:uno.css';
import '@unocss/reset/sanitize/sanitize.css';
import '@unocss/reset/sanitize/assets.css';
import './assets/style/public.css';
import './assets/style/transition.css';
import { setupRouter } from './router';
import { setupStore } from './store';

const initApp = async () => {
  const app = createApp(App);
  setupRouter(app);
  setupStore(app);
  app.mount('#app');
};

initApp();
