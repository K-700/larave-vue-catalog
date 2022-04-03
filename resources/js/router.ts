import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import Home from './pages/Home.vue'
import Catalog from './pages/Catalog.vue'
import Search from './pages/Search.vue'

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
    },
    {
        path: '/search/:query',
        name: 'Search',
        component: Search,
        props: true,
    }
];

export default createRouter({
    history: createWebHistory(),
    routes
})
