import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const publicRoutes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/components/Home.vue"),
  },
  {
    path: "/Detail",
    name: "Detail",
    component: () => import("@/components/Detail.vue"),
  },
];
const routes = [...publicRoutes];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

function createRouter() {
  return new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes: publicRoutes,
  });
}
export { createRouter };
export default router;
