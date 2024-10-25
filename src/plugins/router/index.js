import { createRouter, createWebHistory } from "vue-router";
import components from "./components";
import implementations from "./implementations";

const routes = [...components, ...implementations];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
