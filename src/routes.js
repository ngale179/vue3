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
        component: User
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
