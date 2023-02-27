<template>
    <div class="task_list-form">
      <div class="task_list-form_btn">
        <div label="Подробное описание" />
        <span>ttt</span>
      </div>
      <div class="task_list-form_btn">
        <div label="Проект" />
        <span> ttt</span>
      </div>
      <div class="task_list-form_btn">
        <div label="Отвественный" />
        <span>tttt</span>
      </div>
      <div>
      </div>
      <BtnInFormVue class="Delete_button" label="Удалить" />
    </div>
  </template>
  
  <script>

  import BtnInFormVue from "./BtnInForm.vue";

  export default {
    name: "TaskListForm",
    components: {
      BtnInFormVue,
    },

  };
  </script>
  
  <style scoped>
  .Delete_button {
    
  }
  .task_list-form {
    margin-bottom: 15px;
  }
  
  .task_list-form_btn {
    flex-direction: row;
    display: inline-flex;
  }
  </style>
  