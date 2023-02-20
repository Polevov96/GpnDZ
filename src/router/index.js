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
      import(/* webpackChunkName: "tasklist-page" */ "../views/TasklistPage.vue"),
  },
  {
    path: "/tasklist/:id",
    name: "taskPage",
    component: () =>
      import(/* webpackChunkName: "task-page" */ "../views/TaskPage.vue"),
  },
  {
    path: "/tasklist/task/id",
    name: "/separateTask",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SeparateTask.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
