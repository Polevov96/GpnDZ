<template>
  <div class="taskListForm">
    <div class="BtnTaskListForm">
      <BtnInFormVue label="Все" />
      <BtnInFormVue label="В Ожидании" />
      <BtnInFormVue label="Выполнено" />
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
  //     data() { return { taskList: [{id: 1, text: "test", status: 0, isActive: false}]
  // } },
  //   methods:  {
  //      chengDoneStatus: function (value) {
  //      let idx = this.taskList.findIndex(el => el.id === value)
  //      this.taskList[idx].isActive = !this.taskList[idx].isActive;
  //     }
  //    },
  // },
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
