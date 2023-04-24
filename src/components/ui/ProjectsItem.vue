<template>
    <div class="project-item">
      <StatusBtnVue @click="handleStatusClick" :isActive="project.isActive" />
      <div :class="project.isActive ? 'project-text_active' : ''">
        <div  class="project-item_text">
          <div @click="updateProject">{{ project.text }}</div>
        </div>
      </div>
      <BtnInFormVue @click="handleTaskDelete" class="delete_button" label="Удалить" />
    </div>
  </template>
  
  <script>
  import BtnInFormVue from "../forms/BtnInForm.vue";
  import StatusBtnVue from "./StatusBtn.vue";
  export default {
    name: "ProjectsItem",
  
    components: {
      BtnInFormVue,
       StatusBtnVue,
    },
    props: {
  /**
     * @return Object  {id: 1, text: "test", status: 0}
     */
      project: {
        type: Object,
        required: true,
      },
    },
    methods: {
      updateProject: function () {
          if (this.project.id) {
            this.$router.push(`/projectsList/${this.project.id}`);
            
            // this.$store.dispatch("projectModules/activateTask", this.project.id);
          } else {
            alert('error');
          }
      },
      handleStatusClick: function () {
        console.log(this.project.id);
        console.log(this.project.isActive);
        this.$store.dispatch("projectModules/changeStatus", this.project.id);
      },
      handleTaskDelete: function () {
        this.$store.dispatch("projectModules/deleteProject", this.project.id);
      },
   
    },
    computed: {
      // getProject() {
      //   return this.$store.state.projectModules.projects;
      // },
    },
  };
  </script>
  
  <style scoped>
  .project-item {
    flex-direction: column;
    justify-content: flex-end;
    margin-bottom: 15px;
    background: #F2F4F7;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 28px;
    width: 870px;
    min-height: 59.39px;
    background: #F2F4F7;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
    overflow-wrap: break-word;
  }
  .project-item_text {
    width: 612.61px;
    min-height: 45.06px;
    height: auto;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 36.8633px;
    line-height: 45px;
    color: #1D2939;
    flex: none;
    order: 1;
    flex-grow: 1;
  }
  .project-item_active {
    background: #F2C94C;
  }
  .delete_button {
    width: 150px;
    height: 45px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 36.8633px;
    line-height: 45px;
    color: #E0E0E0;
    flex: none;
    order: 2;
    flex-grow: 0;
    justify-content: flex-end;
    align-items:flex-end;
    margin-top: 7px;
    margin-bottom: 7px;
  }
  .delete_button:hover {
    color: #F2994A;
  }
  .project-text_active {
    text-decoration: line-through;
  }
  .status_button {
    background-color: rgb(60, 55, 55);
    border-radius: 100px;
    width: 53.25px;
    height: 53.25px;
    border: none;
    Top: 3.46px;
    Left: 2.05px;
  }

  </style>