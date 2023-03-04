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
    path: "/tasklist/:id(\\d+)",
    name: "taskPage",
    // redirect: to => {
    //   if (to.params.id) {
    //     return ;
        
    //    } else {
    //     return '/404';
    //    }},
   
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
