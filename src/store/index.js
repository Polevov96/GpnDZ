import Vue from "vue";
import Vuex from "vuex";
import { taskFiltersConstants } from "../utils/constants";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    user: null,
    taskList: JSON.parse(localStorage.getItem('taskList')) ||  [{id: '', text: "", status: 0, isActive: false,  isEdit: false}],
    // taskList: [{id: '', text: "", status: 0, isActive: false,  isEdit: false}],
    isEdit: false,
    editTaskId: null,

    // NEW_VARIANT: добавил флаг фильтра, теперь по нему можно смотреть какая кнопка нажата и подкрашивать ее как активную
    filter: taskFiltersConstants.ALL, // одно из ["all", "inProgress", "done"]
  },
  getters: {
    // OLD_VARIANT: так было непонятно, таска одна в названии, а отправляешь список
    // TASK: (state) => {
    // OLD_VARIANT:  так было
    // return state.taskList

    // NEW_VARIANT: так понятнее, в верхнем регистре нужно писать только мутации, остальное не нужно! негласное правило
    filteredTasklist: (state) => {
      // NEW_VARIANT:  так стало
      if (state.filter === taskFiltersConstants.IN_PROGRESS) {
        return state.taskList.filter((item) => !item.isActive);
      }

      if (state.filter === taskFiltersConstants.DONE) {
        return state.taskList.filter((item) => item.isActive);
      }

      return state.taskList;
    },  
    selectTaskById: (state) => id => {
      // if (state.filter === taskFiltersConstants.OPEN_TASK) {
        // eslint-disable-next-line 
  //  debugger;
        return state.taskList.find((item) => item.id === parseInt(id));
      // }
      // return state.taskList;
    }
  },
  mutations: {
    SET_TASK: (state, payload) => {
      state.taskList = payload;
    },
    ADD_USER: (state, payload) => {
      state.user = payload;
    },

    SET_EDIT: (state, payload) => {
      state.isEdit = payload;
  
    },

    SET_EDITTASKID: (state, payload) => {
      state.editTaskId = payload;
    },

    CHANGE_STATUS: (state, payload) => {
      state.taskList.map((task) => {
        if (task.id === payload) {
          task.isActive = !task.isActive;
        }
      });
    },

    TASK_CLICK: (state, payload) => {
      state.taskList.map((task) => {
        if (task.id === payload) {
          task.isEdit = !task.isEdit;
        }
      });
    },

    DELETE_TASK: (state, payload) => {
      state.taskList = state.taskList.filter((item) => {
        return item.id !== payload;
      });
      localStorage.setItem('taskList', JSON.stringify(state.taskList));
       
    // }
    
      //    state.taskList = state.taskList.filter((item) => {
      //     console.log(state.taskList.length);
      //   console.log(item);
      //   payload =  state.taskList.findIndex(item => item.id === payload);
      //   console.log(payload);
      //  return state.taskList.slice(payload, payload+1);
      // });
      // localStorage.setItem('taskList', JSON.stringify(state.taskList));
      
      // if(state.taskList.length <= +1) {
      //  localStorage.removeItem('taskList');
      //  localStorage.setItem('taskList', JSON.stringify(state.taskList));
      // }
    },

    UP_DATE_TASK: (state, payload) => {
      const { id, ...props2 } = payload;

      state.taskList = state.taskList.map((task) => {
        if (task.id === id) {
          task = {
            ...task,
            ...props2,
          };
        }
        return task;
      });
    },

    ADD_TASK: (state, payload) => {
      state.taskList.push(payload);
      localStorage.setItem('taskList', JSON.stringify(state.taskList));
    },


    SET_TASK_FILTER: (state, value) => {
      state.filter = value;
    },
  },

  actions: {
    updateTask: async (context, payload) => {
      context.commit("UP_DATE_TASK", payload);
      context.commit("SET_EDIT");
      context.commit("SET_EDITTASKID", null);
    },
    setEdit: async (context, payload) => {
      context.commit("SET_EDIT", payload);
    },
    changeStatus: async (context, payload) => {
      context.commit("CHANGE_STATUS", payload);
    },

    deleteTask: (context, payload) => {
      context.commit("DELETE_TASK", payload);
    },

    activateTask: function (context, payload) {
      context.commit("SET_EDIT", true);
      context.commit("SET_EDITTASKID", payload);
    },

    deactivateTask: function (context) {
      context.commit("SET_EDIT", false);
      context.commit("SET_EDITTASKID", null);
    },

    addTask: function (context, payload) {
      context.commit("ADD_TASK", {
        id: Math.round(Math.random() * 1000000),
        text: payload,
        status: 0,
        isActive: false,
      });
    },
    addUser: function (context, payload) {
      context.commit("ADD_USER", payload);
    },
    setTaskFilter: function (context, payload) {
      context.commit("SET_TASK_FILTER", payload);
    },
    openTask: function(context, payload) {
      context.commit("OPEN_TASK", payload);
    }
  },
  modules: {},
});
