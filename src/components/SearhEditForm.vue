<template>
  <div class="searhEditForm">
    <div class="imputText">
      <input
        v-model.trim="$v.newTaskText.$model"
        class="imputText_add"
        type="text"
        placeholder="Новая задача"
      />
    </div>
    <div v-if="isEdit" class="BtnSerhEditForm">
      <BtnInFormVue @click="updateTaskItem" class="BtnSave" label="Сохранить" />
      <BtnInFormVue
        @click="handleTaskClick"
        class="BtnCancel"
        label="'Отменить'"
      />
    </div>
    <div v-else class="BtnSerhEditForm">
      <BtnInFormVue @click="addTextTask" label="Добавить" />
      <BtnInFormVue @click="resetTaskText" class="BtnClean" label="Отчистить" />
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
    // addTextTask: function () {
    //   if (this.$v.$error) {
    //     return;
    //   }
    //   this.$store.state.taskList.push({
    //     id: this.nextTodoId++,
    //     text: this.newTaskText,
    //     status: 0,
    //     isActive: false,
    //   });
    //   this.resetTaskText();
    // },
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
.searhEditForm {
  margin-bottom: 5px;
}
.BtnSerhEditForm {
  flex-direction: row;
  display: flex;
  justify-content: flex-end;
}
.imputText {
  width: 98%;
  height: 35px;
  align-items: center;
  justify-content: center;
  border: 4px solid orange;
  border-radius: 8px;
  text-align: left;
  margin-bottom: 3px;
}
.imputText_add {
  border-color: white;
  width: 99.4%;
  height: 91%;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
}
</style>
