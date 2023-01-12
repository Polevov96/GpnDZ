<!-- /*Поиск и редактирование формы Vue*/ -->
<template>
  <div class="searhEditForm">
    <div class="imputText">
      <input
        v-model="newTaskText"
        class="imputText_add"
        type="text"
        placeholder="Новая задача"
      />
    </div>
    <div v-if="isEdit" class="BtnSerhEditForm">
      <BtnInFormVue
        @click="updateTaskItem"
        class="BtnSave"
        :label="'Сохранить'"
      />
      <BtnInFormVue class="BtnCancel" :label="'Отменить'" />
    </div>
    <div v-else class="BtnSerhEditForm">
      <BtnInFormVue @click="addTextTask" :label="'Добавить'" />
      <BtnInFormVue class="BtnClean" :label="'Отчистить'" />
      <!-- :onCleanInput="onCleanInput" -->
    </div>
  </div>
</template>

<script>
import BtnInFormVue from "./BtnInForm.vue";
// import ImputTextVue from "./ImputText.vue";

export default {
  name: "SearhEditForm",

  components: {
    // ImputTextVue,
    BtnInFormVue,
  },
  // props: ["text"],

  data: () => {
    return {
      // inputValue: null,
      newTaskText: "",
      nextTodoId: 1,
      status: 0,
      isActive: false,
    };
  },
  watch: {
    isEdit: function (value) {
      if (value) {
        const activeTask = this.getTaskList.find(
          (task) => task.id == this.$store.state.editTaskId
        );

        this.newTaskText = activeTask.text;
      }
    },
  },

  methods: {
    addTextTask: function () {
      this.$store.state.taskList.push({
        id: this.nextTodoId++,
        text: this.newTaskText,
        status: 0,
        isActive: false,
        // isEdit: false,
      });
      this.newTaskText = "";
      // this.$store.dispatch("setEdit");

    },
    updateTaskItem: function () {
      const updateTask = {
        id: this.$store.state.editTaskId,
        text: this.newTaskText,
      };
      this.$store.dispatch("updateTask", updateTask);
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
