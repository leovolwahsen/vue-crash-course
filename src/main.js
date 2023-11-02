import { createApp } from 'vue';
import App from './App.vue';
import router from "./router/index.js"

import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faHome);

import 'bootstrap/dist/css/bootstrap.css';
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.js";

createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).use(bootstrap).mount('#app');