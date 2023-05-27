import { FiltersConstants } from "../utils/constants";

export const projectModules = {
    namespaced: true,
    state: {
        projects: JSON.parse(localStorage.getItem('projects')) || [],
        //{id: '', text: "", isActive: false, }
        inputStatusChanges: false,
        filter: FiltersConstants.ALL,
      },
      
    getters: {
 filteredProjects: (state) => {
        if (state.filter === FiltersConstants.IN_PROGRESS) {
          return state.projects.filter((item) => !item.isActive);
        }
  
        if (state.filter === FiltersConstants.DONE) {
          return state.projects.filter((item) => item.isActive);
        }
  
        return state.projects;
      },  
      selectProjectById: (state) => id => {
          return state.projects.find((item) => item.id === parseInt(id));
      },
    //   selectProjectByText: (state) => id => {
        
    // },
    },
      mutations: {
        ADD_PROJECT: (state, payload) => {
            state.projects.push(payload);
            localStorage.setItem('projects', JSON.stringify(state.projects));
          },
          SET_PROJECT_FILTER: (state, value) => {
            state.filter = value;
          },
          DELETE_PROJECT: (state, payload) => {
            state.projects = state.projects.filter((item) => {
              return item.id !== payload;
            });
            localStorage.setItem('projects', JSON.stringify(state.projects)); 
        },
        CHANGE_STATUS: (state, payload) => {
          state.projects.map((item) => {
            if (item.id === payload) {
              item.isActive = !item.isActive;
            }
          });
        },
        CHANGES_INPUT_STATUS: (state, payload) => {
          state.inputStatusChanges = payload;
        },
        UPDATE_PROJECT: (state, payload) => {
          const {id, ...props2} = payload;
          state.projects = state.projects.map((project) => {
            if(project.id == id) {
              project = {
                ...project,
                ...props2,
              };
            }
            return project;
          });
          localStorage.setItem('projects', JSON.stringify(state.projects));
        }
      },
      actions: {

        changeStatus: async (context, payload) => {
          context.commit("CHANGE_STATUS", payload);
        },
        addProject: function (context, payload) {
            context.commit("ADD_PROJECT", {
              id: Math.round(Math.random() * 1000000),
              text: payload,
              isActive: false,
            });
      },
      setProjectFilter: function (context, payload) {
        context.commit("SET_PROJECT_FILTER", payload);
      },
      deleteProject: (context, payload) => {
        context.commit("DELETE_PROJECT", payload);
      },
      changesInputStatus: function (context, payload) {
        context.commit("CHANGES_INPUT_STATUS", payload);
      },
      updateProject: function (context, payload) {
        context.commit("UPDATE_PROJECT", payload);
      },
    } 
};