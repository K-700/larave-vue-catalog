require('./bootstrap');

import { createApp } from 'vue';
import router from './router'
import { rootStore } from "./store/root";

import App from './layouts/App.vue'
createApp(App)
    .use(router)
    .use(rootStore)
    .mount('#app')
