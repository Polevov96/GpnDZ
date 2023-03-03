<template>
    <div class="task_list-form">
      <div class="">
        <div label="Подробное описание" />
        <div class = "data_display-form">Подробное описание</div>
        <span v-if="selectedItem">{{selectedItem.text}}</span>
      </div>
      <div class="">
        <div label="Проект" />
        <div class="data_display-form">Проект</div>
        <span> ttt</span>
      </div>
      <div class="">
        <div label="Отвественный" />
        <div class="data_display-form">Отвественный</div>
        <span>tttt</span>
      </div>
      <div>
      </div>
      <div class="delete_button">
      <BtnInFormVue  label="Удалить"/>
    </div>
    </div>
  </template>
  
  <script>

  import BtnInFormVue from "./BtnInForm.vue";

  export default {
    name: "TaskListForm",
    components: {
      BtnInFormVue,
    },
    props: {
      selectedItem: {
        type: Object,
        default: null,
      },
}


  };
  </script>
  
  <style scoped>
  .delete_button {
    display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(226, 82, 82);
  }
  .task_list-form {
    margin-bottom: 15px;
  }
  
  .task_list-form_btn {
    flex-direction: row;
    
  }
  .data_display-form {
    background: #b8bac6; /* Old browsers */
background: -moz-linear-gradient(left, #b8bac6 0%, #b8bac6 19%, #f5f6f6 41%, #f5f6f6 41%, #f5f6f6 41%, #f5f6f6 41%, #f5f6f6 46%, #f5f6f6 59%, #f5f6f6 95%);
background: -webkit-linear-gradient(left, #b8bac6 0%,#b8bac6 19%,#f5f6f6 41%,#f5f6f6 41%,#f5f6f6 41%,#f5f6f6 41%,#f5f6f6 46%,#f5f6f6 59%,#f5f6f6 95%);
background: linear-gradient(to right, #b8bac6 0%,#b8bac6 19%,#f5f6f6 41%,#f5f6f6 41%,#f5f6f6 41%,#f5f6f6 41%,#f5f6f6 46%,#f5f6f6 59%,#f5f6f6 95%); 
  }
  </style>
  