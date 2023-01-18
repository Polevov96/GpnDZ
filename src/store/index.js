import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    taskList: [],
    // taskList: [{id: '', text: "", status: 0, isActive: false,  isEdit: false}],
    isEdit: false,
    editTaskId: null,
    taskNewList: [],
  },
  getters: {
    TASK: (state) => {
      return state.taskList;
    },
  },
  mutations: {
    SET_TASK: (state, payload) => {
      state.taskList = payload;
    },
    SET_EDIT: (state, payload) => {
      state.isEdit = payload;
    },

    SET_EDITTASKID: (state, payload) => {
      state.editTaskId = payload;
      // state.taskList.map((task) => {
      //   if (task.id === payload) {
      //     state.editTaskId = payload;
      //   }
      // });
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

      // state.taskList.map((task) => {
      //   if (task.id === payload) {
      //     state.taskList.slice(payload, 1);
      //   }
      // });
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
    },
    FILTER_ALL: (state) => {
      state.taskList = state.taskList.filter((item) => {
        return item;
      });
    },
    FILTER_WAITING: (state) => {
      state.taskList = state.taskList.filter((item) => {
        if (!item.isActive) {
          return item;
        }
      });
    },
    FILTER_DONE: (state) => {
      state.taskList = state.taskList.filter((item) => {
        if (item.isActive) {
          return item;
        }
      });
    },
  },

  actions: {
    // payload = {id: 2, text: "tetst", status: sdsf} = task
    updateTask: async (context, payload) => {
      context.commit("UP_DATE_TASK", payload);
      context.commit("SET_EDIT");
      context.commit("SET_EDITTASKID", null);
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
    filterAll: function (context) {
      context.commit("FILTER_ALL");
    },
    filterInWaiting: function (context) {
      context.commit("FILTER_WAITING");
    },
    filterDone: function (context) {
      context.commit("FILTER_DONE");
    },
  },
  modules: {},
});
