import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import NotFound from "@/views/NotFound.vue";

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
    
    path: "/projectsList",
    name: "projectsListPage",
    component: () =>
      import(/* webpackChunkName: "projectslist-page" */ "../views/ProjectsListPage.vue"),
  
  },
  {
    path: "/projectsList/:id(\\d+)",
    name: "projectPage",
    component: () =>
      import(/* webpackChunkName: "project-page" */ "../views/ProjectPage.vue"),
    },
  {
    path: "/tasklist/:id(\\d+)",
    name: "taskPage",
    component: () =>
      import(/* webpackChunkName: "task-page" */ "../views/TaskPage.vue"),
    },
  { 
    path: '/404', 
    name: '404', 
    component: NotFound, 
  }, 
  { 
    path: '*', 
    redirect: '/404' 
  }
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

// const VueRouterPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push (to) {
//   return VueRouterPush.call(this, to).catch(err => err);
// };
