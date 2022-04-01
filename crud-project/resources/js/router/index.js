import {createRouter, createWebHistory} from 'vue-router';
import WikisIndex from '../components/wikis/WikisIndex';
import WikisCreate from '../components/wikis/WikisCreate';
import WikisEdit from '../components/wikis/WikisEdit';
const routes = [
    {
        path: '/dashboard',
        name: 'wikis.index',
        component: WikisIndex
    },
    {
        path: '/wikis/create',
        name: 'wikis.create',
        component: WikisCreate
    },
    {
        path: '/wikis/:id/edit',
        name: 'wikis.edit',
        component: WikisEdit
    }
];

export default createRouter( {
    history: createWebHistory(),
    routes
});
