<template>
  <div class="search-Edit-Form">
    <div class="text_input">
      <input
        class="add-text_input"
        type="text"
      />
    </div>
    <div class="search-edit-form_btn">
      <BtnInFormVue class="BtnSave" label="Сохранить" />
      <BtnInFormVue
        class="BtnCancel"
        label="Отменить"
      />
    </div>
    <div class="search-edit-form_btn">
      <BtnInFormVue  label="Редактировать" />
    </div>
  </div>
</template>

<script>

import BtnInFormVue from "./BtnInForm.vue";

export default {
  name: "EditingTaskForm",

  components: {
    BtnInFormVue,
  },


};
</script>

<style scoped>
.search-Edit-Form {
  margin-bottom: 5px;
  
}
.search-edit-form_btn {
  flex-direction: row;
  display: flex;
  justify-content: flex-end;
}
.text_input {
  width: 98%;
  height: 35px;
  align-items: center;
  justify-content: center;
  border: 4px solid orange;
  border-radius: 8px;
  text-align: left;
  margin-bottom: 3px;
}
.add-text_input {
  border-color: white;
  width: 99.4%;
  height: 91%;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
}
</style>
