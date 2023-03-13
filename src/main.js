/* eslint-disable import/no-extraneous-dependencies */
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import '@/assets/styles/app.css';

const pinia = createPinia();

createApp(App).use(router).use(pinia).mount('#app');
