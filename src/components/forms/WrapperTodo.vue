<template>
  <div class="wrapper">
    <SearhEditFormVue />
    <TaskListFormVue />
  </div>
</template>

<script>
import SearhEditFormVue from "./SearhEditForm.vue";
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
  padding: 60px 154px 60px 172px;
  width: 874.02px;
  height: 1588.019px;
  left: 360px;
  top: 60px;
  background-color: white;
  /* overflow: auto; */
  border-radius: 50px;
  margin: 1px;
  justify-content:center;
}
</style>
