<template>
  <div class="search-Edit-Form">
    <div class="text_input">
      <input
        class="add-text_input"
        type="text"
        placeholder="Заголовок задачи"
      /> <img v-if="false" src="@/assets/Vector.png" class="pencil">
    </div>
    <div v-if="false" class="search-edit-form_btn">
      <BtnInFormVue id="Cancel" class="BtnSave" label="Отменить" />
      <BtnInFormVue id="Save" 
        class="BtnCancel"
        label="Сохранить"
      />
    </div>
    <div v-else class="search-edit-form_btn">
      <BtnInFormVue id="Edit"  label="Редактировать" />
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
  width: 870px;
}
#Cancel.form-in_button {
  color: #F2C94C;
  font-family: 'Inter';
  width: 140px;
  height: 35px;
  font-style: normal;
  font-weight: 400;
  font-size: 30.6715px;
  line-height: 35px;
  justify-content: flex-end;
  text-align: right;
  margin-left: 24px;
}
#Save.form-in_button {
  color: #27AE60;
  font-family: 'Inter';
  width: 151px;
  height: 35px;
  font-style: normal;
  font-weight: 400;
  font-size: 28.6715px;
  line-height: 35px;
  justify-content: flex-end;
  text-align: right;
  margin-left: 24px;
}

#Edit.form-in_button {
  color: #BDBDBD;
  font-family: 'Inter';
  width: 214px;
  height: 35px;
  font-style: normal;
  font-weight: 400;
  font-size: 28.6715px;
  line-height: 35px;
  justify-content: flex-end;
  text-align: right;
  margin-left: 24px;
}
.search-edit-form_btn {
  flex-direction: row;
  display: flex;
  justify-content: flex-end;
  width: 870px;
  height: 35px;
  margin-bottom: 14px;
}
.text_input {
  height: 120px;
  width: 870px;
  display: flex;
  align-items: center;
  justify-content: left;
  border-radius: 34px;
  text-align: left;
  margin-bottom: 16px;
  font-family: 'Inter';
}
.add-text_input {
  border-radius: 34px;
  display: inline;
  align-items: center;
  justify-content: center;
  outline: none;
  color: #4F4F4F;
  border: 8px solid #FDB022;
  width: 468px;
  height: 48px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 48px;
  padding-top:28px;
  padding-left: 25px;
  padding-bottom: 28px;
  padding-right: 361px;
}
.search-edit-form_btn {
  flex-direction: row;
  display: flex;
  justify-content: flex-end;
  width: 870px;
  height: 35px;
  margin-bottom: 14px;
}
.pencil {
  width: 32px;
  height: 32px;
  flex: none;
  order: 1;
  flex-grow: 0;
  margin-left: -65px;
  }
</style>
