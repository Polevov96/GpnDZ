<template>
  <div class="wrapper">
    <SearhEditFormVue />
    <TaskListFormVue />
  </div>
</template>

<script>
import SearhEditFormVue from "./SearhEditForm.vue"; //Форма ввода задач Vue
import TaskListFormVue from "./TaskListForm.vue"; //Форма списка задач Vue

export default {
  name: "WrapperTodo",
  components: {
    SearhEditFormVue,
    TaskListFormVue,
  },
};
</script>

<style scoped>
.wrapper {
  padding: 20px;
  width: 530px;
  height: 330px;
  background-color: white;
  overflow: auto;
  border-radius: 6px;
}
</style>
