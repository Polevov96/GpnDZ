<template>
    <div class="task_list-form">
      <div class="task_list_form-information">
        <div label="Подробное описание" />
        <div class = "data_display-form">Подробное описание <img src="@/assets/Vector (1).png"  v-if="false"  class="pencil"></div>
        <div class="task_list_form_information-text"><span class="task-item_text" v-if="selectedItem">{{selectedItem.text}}</span></div>
      
        <div label="Проект" />
        <div class="data_display-form">Проект <img src="@/assets/Vector.png"  v-if="false"  class="pencil"></div>
        <div id="project" class="task_list_form_information-text"> <span id="project" class="task-item_text"> ttt</span></div>
        <div label="Отвественный" />
        <div class="data_display-form">Отвественный <img src="@/assets/Vector.png"  v-if="false"  class="pencil"></div>
        <div id="Responsible" class="task_list_form_information-text"> <span id="Responsible" class="task-item_text" >tttt</span></div>
      </div>
      <div class="delete_button">
      <BtnInFormVue id="delete" label="Удалить"/>
    </div>
    </div>
  </template>
  
  <script>

  import BtnInFormVue from "./BtnInForm.vue";
  

  export default {
    name: "InfoTaskForm",
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
  }
  </style>
  