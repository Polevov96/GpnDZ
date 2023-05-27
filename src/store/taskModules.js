import { FiltersConstants } from "../utils/constants";


export const taskModules = {
  namespaced: true,
    state: {
      taskList: JSON.parse(localStorage.getItem('taskList')) || [],
      //{id: '', text: "", isActive: false, projectId: null,}
      description: "",
      newTaskText: "",
      newProjectId: null,
      inputStatusChanges: false,
      filter: FiltersConstants.ALL, 
    },
    
    getters: {
      filteredTasklist: (state) => {
        if (state.filter === FiltersConstants.IN_PROGRESS) {
          return state.taskList.filter((item) => !item.isActive);
        }
        if (state.filter === FiltersConstants.DONE) {
          return state.taskList.filter((item) => item.isActive);
        }
        return state.taskList;
      },  
      selectTaskById: (state) => id => {
          return state.taskList.find((item) => item.id === parseInt(id));
      }
    },

    mutations: {
      ADD_NEW_PROJECT_ID: (state, payload) => {
        state.newProjectId = payload;
      },
      ADD_NEW_TASK_TEXT: (state, payload) => {
        state.newTaskText = payload;
      },
      ADD_DESCRIPTION: (state, payload) => {
        state.description = payload;
      },
      CHANGES_INPUT_STATUS: (state, payload) => {
        state.inputStatusChanges = payload;
    
      },
      CHANGE_STATUS: (state, payload) => {
        state.taskList.map((task) => {
          if (task.id === payload) {
            task.isActive = !task.isActive;
          }
        });
      },
      DELETE_TASK: (state, payload) => {
        state.taskList = state.taskList.filter((item) => {
          return item.id !== payload;
        });
        localStorage.setItem('taskList', JSON.stringify(state.taskList));
      },
      UP_DATE_TASK: (state, payload) => {        
        state.taskList = state.taskList.map((item) => {
          if (item.id == payload) {
            if (state.newTaskText.length >= 1) {
              item.text = state.newTaskText;
              console.log(item.text);
            }
            if (state.description.length >= 1) {
              item.descriptionTask = state.description;
              console.log(item.descriptionTask);
            }
            if (state.newProjectId != null) {
              item.projectId = state.newProjectId;
              console.log(item.projectId);
            }
          }
          // if (item.id == payload & state.newTaskText.length >= 1 & state.description.length >= 1 & state.newProjectId != null) {
          //   item.text = state.newTaskText;
          //   item.descriptionTask = state.description;
          //   item.projectId = state.newProjectId;
          // } else if (state.newTaskText.length >= 1 & state.description.length == "") {
          //   item.text = state.newTaskText;
          // } else if (state.description.length >= 1 & state.newTaskText.length == "") {
          //   item.descriptionTask = state.description;
          // } 
          return item;
      });
      localStorage.setItem('taskList', JSON.stringify(state.taskList));
    },
    //   UP_DATE_TASK: (state, payload) => {
    //     const { id, ...props2 } = payload;
    //       state.taskList = state.taskList.map((task) => {
    //           if (task.id == id) {
    //             task = {
    //               ...task,
    //               ...props2,
    //             };
    //           }
    //           return task;
    //         });
    //         localStorage.setItem('taskList', JSON.stringify(state.taskList));
    // },
      ADD_TASK: (state, payload) => {
        state.taskList.push(payload);
        localStorage.setItem('taskList', JSON.stringify(state.taskList));
      },
      SET_TASK_FILTER: (state, value) => {
        state.filter = value;
      },
      UPDATE_PROJECT: (state, payload) => {
        // console.log(state);
        // console.log(payload);
        const { id, ...props2 } = payload;
        state.taskList = state.taskList.map((task) => {
            if (task.id == id) {
              task = {
                ...task,
                ...props2,
              };
            }
            return task;
          });
          localStorage.setItem('taskList', JSON.stringify(state.taskList));
      },
    },
  
    actions: {
      updateTask: async (context, payload) => {
        context.commit("UP_DATE_TASK", payload);
      },
      // updateTask: async (context, payload) => {
      //   context.commit("UP_DATE_TASK", payload);
      // },
      changeStatus: async (context, payload) => {
        context.commit("CHANGE_STATUS", payload);
      },
      deleteTask: (context, payload) => {
        context.commit("DELETE_TASK", payload);
      },
      addTask: function (context, payload) {
        context.commit("ADD_TASK", {
          id: Math.round(Math.random() * 1000000),
          text: payload,
          isActive: false,
          descriptionTask: "",
          projectId: null,
        });
      },
      setTaskFilter: function (context, payload) {
        context.commit("SET_TASK_FILTER", payload);
      },
      openTask: function(context, payload) {
        context.commit("OPEN_TASK", payload);
      },
      changesInputStatus: function (context, payload) {
        context.commit("CHANGES_INPUT_STATUS", payload);
      },
      updateProject: function (context, payload) {
        context.commit("UPDATE_PROJECT", payload);
      },
      addDescription: function (context, payload) {
        context.commit("ADD_DESCRIPTION", payload);
      },
      addNewTaskText: function (context, payload) {
        context.commit("ADD_NEW_TASK_TEXT", payload);
    },
    addNewProjectId: function (context, payload) {
      context.commit("ADD_NEW_PROJECT_ID", payload)
    }
  }
  };