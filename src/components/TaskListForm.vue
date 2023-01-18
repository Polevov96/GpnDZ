<template>
  <div class="taskListForm">
    <div class="BtnTaskListForm">
      <BtnInFormVue @click="ClickFilterAll" label="Все" />
      <BtnInFormVue @click="ClickFilterInWaiting" label="В Ожидании" />
      <BtnInFormVue @click="ClickFilterDone" label="Выполнено" />
    </div>
    <div>
      <TaskItemVue v-for="task in getTaskList" :key="task.id" :task="task" />
    </div>
  </div>
</template>

<script>
import TaskItemVue from "./TaskItem.vue";
import BtnInFormVue from "./BtnInForm.vue";

export default {
  name: "TaskListForm",
  components: {
    BtnInFormVue,
    TaskItemVue,
  },

  methods: {
    ClickFilterAll: function () {
      this.$store.dispatch("filterAll", this.$store.state.taskList);
    },
    ClickFilterInWaiting: function () {
      this.$store.dispatch("filterInWaiting", this.$store.state.taskList);
    },
    ClickFilterDone: function () {
      this.$store.dispatch("filterDone", this.$store.state.taskList);
    },
  },
  computed: {
    getTaskList() {
      return this.$store.state.taskList;
    },
  },
};
</script>

<style scoped>
.taskListForm {
  margin-bottom: 15px;
}

.BtnTaskListForm {
  flex-direction: row;
  display: inline-flex;
}
</style>
