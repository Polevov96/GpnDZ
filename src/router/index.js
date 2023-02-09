import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";

Vue.use(VueRouter);

const routes = [  {
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
