export const userModules = {
    namespaced: true,  
    state: {
        user: JSON.parse(localStorage.getItem('user')) || "",
        password: "",
        owner: "",
        ownerId: null,
        usersList: JSON.parse(localStorage.getItem('usersList')) || [{}],
        // localStorage.setItem('projects', JSON.stringify(state.projects));
        // JSON.parse(localStorage.getItem('projects')) || [{id: '', text: "", isActive: false, }]
    },
    mutations:{
        ADD_USER: (state, payload) => {
            const user = {
                id: payload.id,
                username: payload.username,
                email: payload.email,
            } ;
            state.user = user;
            localStorage.setItem('user', JSON.stringify(state.user));
          },
    },
    actions:{
        addUser: function (context, payload) {
            context.commit("ADD_USER", payload);
          },
    },
};