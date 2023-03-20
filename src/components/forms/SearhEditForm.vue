<template>
  <div class="search-Edit-Form">
    <div class="text_input">
      <input
        v-model.trim="$v.newTaskText.$model"
        class="add-text_input"
        type="text"
        placeholder="Введите текст задачи..."
      />
    </div>
    <div v-if="isEdit" class="search-edit-form_btn">
      <BtnInFormVue @click="updateTaskItem" class="BtnSave" label="Сохранить" />
      <BtnInFormVue
        @click="handleTaskClick"
        class="BtnCancel"
        label="Отменить"
      />
    </div>
    <div v-else class="search-edit-form_btn">
      <BtnInFormVue  @click="addTextTask" label="Добавить" />
      <BtnInFormVue @click="resetTaskText" label="Отчистить" />
    </div>
  </div>
</template>

<script>
import { required, minLength } from "vuelidate/lib/validators";
import BtnInFormVue from "./BtnInForm.vue";

export default {
  name: "SearhEditForm",

  components: {
    BtnInFormVue,
  },

  data: () => {
    return {
      newTaskText: "",
      nextTodoId: 1,
      status: 0,
      isActive: false,
    };
  },
  validations: {
    newTaskText: {
      required,
      minLength: minLength(3),
    },
  },
  watch: {
    isEdit: function (value) {
      if (value) {
        const activeTask = this.getTaskList.find(
          (task) => task.id == this.$store.state.editTaskId
        );

        this.newTaskText = activeTask.text;
      } else {
        this.resetTaskText();
      }
    },
  },

  methods: {
    addTextTask: function () {
      if (this.$v.$error) {
        return;
      }
      this.$store.dispatch("addTask", this.newTaskText);
      this.resetTaskText();
    },
    updateTaskItem: function () {
      const updateTask = {
        id: this.$store.state.editTaskId,
        text: this.newTaskText,
      };
      this.resetTaskText();
      this.$store.dispatch("updateTask", updateTask);
    },
    handleTaskClick: function () {
      this.resetTaskText();
      this.$store.dispatch("deactivateTask");
    },
    resetTaskText: function () {
      this.newTaskText = "";
    },
  },
  computed: {
    getTaskList() {
      return this.$store.state.taskList;
    },
    isEdit() {
      return this.$store.state.isEdit;
    },
  },
};
</script>

<style scoped>
.search-Edit-Form {
  margin-bottom: 5px;
  width: 870px;
}
.search-edit-form_btn {
  flex-direction: row;
  display: flex;
  justify-content: flex-end;
  width: 870px;
  height: 35px;
  margin-bottom: 14px;
}
.form-in_button {
  color: #BDBDBD;
  font-family: 'Inter';
  width: 135px;
  height: 35px;
  font-size: 30px;
  justify-content: flex-end;
  text-align: right;
  margin-left: 24px;
}
.text_input {
  height:auto;
  min-height: 120px;
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
  border: 8px solid #FDB022;
  width: 468px;
  min-height: 48px;
  height:auto;
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
</style>
