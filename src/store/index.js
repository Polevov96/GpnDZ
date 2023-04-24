import Vue from "vue";
import Vuex from "vuex";

import {taskModules} from "./taskModules";
import  {projectModules} from "./projectModules"
import {userModules} from "./userModules"

Vue.use(Vuex);

export const store = new Vuex.Store({
   
  modules: {
    taskModules,
    projectModules,
    userModules,

  },
});
