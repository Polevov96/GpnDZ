import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    taskList: [],
    // taskList: [{id: '', text: "", status: 0, isActive: false,  isEdit: false}],
    isEdit: false,
    editTaskId: null,
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
      if (!state.isEdit) {
        state.isEdit = !state.isEdit;
      } else {
        state.taskList.map((task) => {
          if (task.id === payload) {
            state.editTaskId = null;
            state.isEdit = !state.isEdit;
          }
        });
      }
    },

    SET_EDITTASKID: (state, payload) => {
      state.taskList.map((task) => {
        if (task.id === payload) {
          state.editTaskId = payload;
        }
      });
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
  },

  actions: {
    // payload = {id: 2, text: "tetst", status: sdsf} = task
    updateTask: async (context, payload) => {
      // payload =  {text: "jhjfsfd"}
      // payload =  {status: "jhjfsfd"}
      // TODO: найти таску по id
      // TODO: обновить статус на противоположный
      context.commit("UP_DATE_TASK", payload);
      context.commit("SET_EDIT");
      context.commit("SET_EDITTASKID", null);
    },

    changeStatus: async (context, payload) => {
      // TODO: найти таску по id
      // TODO: обновить статус на противоположный
      context.commit("CHANGE_STATUS", payload);
    },
    deleteTask: (context, payload) => {
      // TODO: найти таску по id
      // TODO: удалить эту таску из стора
      context.commit("DELETE_TASK", payload);
    },
    // taskClick: (context, payload) => {
    //   if (context.isEdit) {
    //     context.commit("SET_EDITTASKID", null);
    //   } else {
    //     context.commit("SET_EDITTASKID", payload);
    //   }
    //   context.commit("SET_EDIT");
    // },
    activetTask: function (context, payload) {
      if (context.isEdit) {
        context.commit("SET_EDITTASKID", null);
      } else {
        context.commit("SET_EDITTASKID", payload);
      }
      context.commit("SET_EDIT");
    },
    deactivetTask: function (context, payload) {
      // console.log("deactive", context);
      // context.commit("SET_EDITTASKID", null);
      // context.commit("SET_EDIT");
      context.commit("SET_EDIT", payload);
    },
    addTask: function (context, payload) {
      context.commit("ADD_TASK", payload);
    },
  },
  modules: {},
});
