import { createRouter, createWebHistory } from "vue-router";
const routerHistory = createWebHistory()

import HomePage from '@/pages/home'
import AboutPage from '@/pages/about'
import NotFoundPage from '@/pages/notFound'

const routers = createRouter({
    history: routerHistory,
    routes: [
        {
            path: '/',
            component: HomePage
        },
        {
            path: '/about',
            component: AboutPage
        },
        {
            path: '/:CatchAll(.*)',
            name: '404',
            component: NotFoundPage
        }
    ],
});

export default routers