import { createWebHistory, createRouter } from "vue-router";
import Home from './components/Home.vue';
import User from './components/users/index.vue';

const routes = [
    {
        path: "/:catchAll(.*)",
        redirect: { name: 'home' },
    },
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/user",
        name: "user",
        component: User,
        children: [
            {
                path: "detail",
                name: "detail",
                component: () => import('./components/users/detail.vue')
            },
            {
                path: "edit",
                name: "edit",
                component: () => import('./components/users/edit.vue')
            },
            {
                path: "delete",
                name: "delete",
                component: () => import('./components/users/delete.vue')
            }
        ]
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
