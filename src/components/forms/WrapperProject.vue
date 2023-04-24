<template>
    <div class="wrapper">
      <!-- to="/tasklist" -->
      <div class="form-btn_task"><router-link to="/projectslist" class="task" >
       <span  @click="isEditInputStatusChanges()" >Вернуться в список проектов</span> 
      </router-link>
      </div>
      <EditingProjectForm :selectedItem="getProjectsList"/>
      <InfoProjectForm :selectedItem="getProjectsList"/>
    </div>
  </template>
  
  <script>
  
  import EditingProjectForm from './EditingProjectForm.vue';
  import InfoProjectForm from './InfoProjectForm.vue'
  
  export default {
    name: "WrapperTask",
    components: {
        EditingProjectForm,
      InfoProjectForm,
    },
    props: {
        selectedItem: {
          type: Object,
          default: null,
        },
  },
  methods: {
      isEditInputStatusChanges: function(){

        if(this.getInputStatusChanges) {
           this.$store.dispatch("projectModules/changesInputStatus", false);
        }
      },
    },
  computed: {
    getProjectsList() {
    
    
       return this.$store.getters['projectModules/selectProjectById'](this.$route.params.id);
  
      },
      isEditTask() {
        return this.$store.state.taskModules.isEdit
      },
      getInputStatusChanges() {
        return this.$store.state.taskModules.inputStatusChanges
      },
  }
  }
  </script>
  
  <style scoped>
  .wrapper {
    padding: 60px 154px 60px 172px;
    width: 874.02px;
    height: 1588.019px;
    left: 360px;
    top: 60px;
    background-color: white;
    /* overflow: auto; */
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    justify-content:center;
  }
  .form-btn_task {
    padding-left: 30px;
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    user-select: none;
    
  }
  /* #task.form-in_button */
  .task {
    text-decoration: none;
    font-family: 'Inter';
    color: black;
    transform: skewX(-20deg);
    border: 2px solid #FDB022;
    border-radius: 5px;
    background: linear-gradient(#eea61f, #FDB022) no-repeat 100% 0;
    background-size: calc(6*(1em*90/135) + .5em) 100%;
    transition: .3s;
    box-shadow: inset calc(-6*(1em*90/135) - .5em) 0 rgba(255,255,255,.2);
    
  }
  </style>