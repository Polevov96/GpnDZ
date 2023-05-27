<template> 
    <div class="task_list-form">
      <div class="task_list_form-information">
        <div label="Подробное описание" />
        <div class = "data_display-form">Подробное описание <span class="pencil" v-if="getInputStatusChanges"  /></div>
        <div class="task_list_form_information-text"><input v-model="message" class="task-item_text" :disabled="!getInputStatusChanges" :v-if="selectedItem"  /></div>
        <div label="Проект" />
        <div class="data_display-form">Проект <span  v-if="getInputStatusChanges"  class="pencil"></span></div>
        <div id="project" class="task_list_form_information-text"><select @change="chooseProject"  :disabled="!getInputStatusChanges" id="project" class="task-item_text">
          <option v-if="taskProject" value="none" selected disabled hidden>{{taskProject.text}}</option>
          <option v-else value="none" selected disabled hidden></option>
          <option  v-for="project in getProjects"  :key="project.id"  v-bind:value="project.id" :disabled="!getInputStatusChanges" id="project" class="task-item_text" >{{ project.text }}</option>
        </select></div>
        <div label="Отвественный" />
        <div class="data_display-form">Отвественный <span v-if="getInputStatusChanges"  class="pencil"></span></div>
        <div id="Responsible" class="task_list_form_information-text"> <input v-model="getOwner.username" :disabled="!getInputStatusChanges" id="Responsible" class="task-item_text"  /></div>
      </div>
      <div class="delete_button">
      <BtnInFormVue @click="handleTaskDelete" id="delete" label="Удалить"/>
    </div>
    </div>
  </template>
  
  <script >

  import BtnInFormVue from "./BtnInForm.vue";
  

  export default {
    name: "InfoTaskForm",
    components: {
      BtnInFormVue,
    },
    data: () => {
      return {
      newProject: null,
      newProjectId: null,
      newResponsible: "",
      newDescriptionTask: "",
      }
    },

    props: {
      selectedItem: {
        type: Object,
        default: null,
      },
    },
    
      methods: {
    handleTaskDelete: function () {
      this.$store.dispatch("taskModules/deleteTask", this.selectedItem.id);
      if(this.getInputStatusChanges) {
        this.$store.dispatch("taskModules/changesInputStatus", false);
      }
      this.$router.push(`/tasklist`);
    },
 
    chooseProject: function () {
       this.newProjectId =  event.target.value;
       console.log(this.newProjectId);
       this.$store.dispatch("taskModules/addNewProjectId", this.newProjectId);
    },
  },

    computed: {
    getInputStatusChanges() {
      return this.$store.state.taskModules.inputStatusChanges
    },
    message: {
    get () {
      // console.log(this.$store.getters['taskModules/selectTaskById'](this.$route.params.id).descriptionTask);
     return this.$store.getters['taskModules/selectTaskById'](this.$route.params.id).descriptionTask;
    },
    set (value) {
      this.newDescriptionTask = value;
      this.$store.dispatch("taskModules/addDescription", this.newDescriptionTask);
    }

  },
  getOwner()  {
      return this.$store.state.userModules.user;
    
  },
  taskProject() {
       console.log(this.$store.getters['projectModules/selectProjectById'](this.getTaskProject))
   return this.$store.getters['projectModules/selectProjectById'](this.getTaskProject);
},
  getProjects() { 
      return this.$store.state.projectModules.projects;
  },
  getTaskProject() { 
    console.log(this.$store.getters['taskModules/selectTaskById'](this.$route.params.id).projectId)
    return this.$store.getters['taskModules/selectTaskById'](this.$route.params.id).projectId;
  },
  }
};
  </script>
  
  <style scoped>

  .task-item_text {
    width: 854px;
    height:auto;
    min-height: 45px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 36.8633px;
    line-height: 45px;
    color: #1D2939;
    flex: none;
    order: 0;
    flex-grow: 1;
    overflow-wrap: break-word;
    border: 0;
    background: transparent;
    outline:none;
}
#project.task-item_text {
  width: 255px;
  min-height: 45px;
  height:auto;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 36.8633px;
  line-height: 45px;
  color: #1D2939;
  flex: none;
  order: 0;
  flex-grow: 0;
  border: 0;
}
#Responsible.task-item_text {
  width: 220px;
  min-height: 45px;
  height:auto;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 36.8633px;
  line-height: 45px;
  color: #1D2939;
  flex: none;
  order: 0;
  flex-grow: 0;
  border: 0;
}
#project.task_list_form_information-text {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 8px;
  gap: 24px;
  width: 870px;
  min-height: 65px;
  height:auto;
  background: #F2F4F7;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  margin-bottom: 32px;
  border: 0;
}
#Responsible.task_list_form_information-text {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px 8px;
    gap: 24px;
    width: 870px;
    min-height: 65px;
    height:auto;
    background: #F2F4F7;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
    margin-bottom: 32px;
    border: 0;
}
  .delete_button {
    /* align-items: center;
    justify-content: center; */
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 8px;
    gap: 24px;
    width: 870px;
    min-height: 65.06px;
    height:auto;
    background: #EB5757;
    flex: none;
    order: 0;
    flex-grow: 0;
    border-radius: 10px;
  }
  #delete.form-in_button {
    width: 854px;
    min-height: 45.06px;
    height:auto;
    font-family: 'Inter';
    justify-content: center;
    font-style: normal;
    font-weight: 400;
    font-size: 36.8633px;
    line-height: 45px;
    text-align: center;
    color: #1D2939;
    flex: none;
    order: 0;
    flex-grow: 1;
  }
  .task_list-form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 32px;
    width: 870px;
    min-height: 696.59px;
    height:auto;
    flex: none;
    order: 1;
    flex-grow: 0;
  }
  
  .task_list-form_btn {
    flex-direction: row;
    
  }
  .data_display-form {
    width: 308px;
    min-height: 35px;
    height:auto;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 28.67px;
    line-height: 35px;
    color: #667085;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin-bottom: 14px;
  } 
  .task_list_form_information-text{

    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px 8px;
    gap: 24px;
    width: 870px;
    min-height: 65px;
    background: #F2F4F7;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
    margin-bottom: 32px;
  }
  .pencil {
    width: 24px;
    height: 24px;
    background-image: url('@/assets/Vector.png');
    display: inline-flex;
    
    border: 0;
  }

  .pencil_active {
    width: 24px;
    height: 24px;
    display: inline-flex;
    border: 0;
    box-shadow: none; 
    background-image: url('@/assets/Vector (1).png');
  }

  select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
select:disabled {
  color: #1D2939;
  opacity: 1;
    border-color: rgba(118, 118, 118, 0.3);
}

  </style>
  