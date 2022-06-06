import { createRouter, createWebHistory } from "vue-router";
import HomePageView from "@/views/HomePageView.vue";

const routes = [{
    path: "/",
    name: "HomePageView",
    component: HomePageView,
}];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;