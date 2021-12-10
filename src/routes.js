import { createWebHistory, createRouter } from "vue-router";
import Home from './components/Home.vue';
import User from './components/users/index.vue';

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/user",
        name: "User",
        component: User,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
