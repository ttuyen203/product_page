import { createWebHistory, createRouter } from "vue-router";
import HelloWorld from "../components/HelloWorld.vue";
import Page15 from "../views/Page15.vue";
import Page16 from "../views/Page16.vue";

const routes = [
  {
    path: "/",
    component: HelloWorld,
  },
  {
    path: "/page-15",
    component: Page15,
  },
  {
    path: "/page-16",
    component: Page16,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
