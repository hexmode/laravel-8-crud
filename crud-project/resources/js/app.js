require('./bootstrap');

import Alpine from 'alpinejs';
import { createApp } from "vue";
import router from './router';
import WikisIndex from './components/wikis/WikisIndex';
import WikisCreate from './components/wikis/WikisCreate';
window.Alpine = Alpine;

Alpine.start();

createApp( {
    components: {
        WikisIndex,
        WikisCreate
    }
} ).use(router).mount( "#app" );
