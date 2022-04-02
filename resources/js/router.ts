import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import Home from './pages/Home.vue'
import Catalog from './pages/Catalog.vue'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/catalog/:id',
        name: 'Catalog',
        component: Catalog,
        props: true,
    }
];

export default createRouter({
    history: createWebHistory(),
    routes
})
