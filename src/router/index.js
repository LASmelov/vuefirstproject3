import { createRouter, createWebHistory } from "vue-router";



const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Главная',
            component: () => import('@/pages/MainPage.vue')
        },
        {
            path: '/AboutPage',
            name: 'О нас',
            component: () => import('@/pages/AboutPage.vue')
        },
        {
            path: '/ContactPage',
            name: 'Контакты',
            component: () => import('@/pages/ContactPage.vue')
        },
        {
            path: '/SignUpPage',
            name: 'Войти',
            component: () => import('@/pages/SignUpPage.vue')
        },




    ]
})

export default router

