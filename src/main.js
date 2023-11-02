import { createApp } from 'vue';
import App from './App.vue';
import fontawesome from "./assets/fontawesome/fontawesome"
import router from "./router/index.js"

import 'bootstrap/dist/css/bootstrap.css';
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.js";

createApp(App).use(router).use(fontawesome).use(bootstrap).mount('#app');