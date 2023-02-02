import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  // FIXME: Удалить или сделать просто лендингом с рекламой продукта
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/auth/login",
    name: "loginPage",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/LoginPage.vue"),
  },
  {
    path: "/tasklist",
    name: "tasklistPage",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/TasklistPage.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
