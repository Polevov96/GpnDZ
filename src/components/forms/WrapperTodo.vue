<template>
  <div class="wrapper">
    <SearhEditFormVue />
    <TaskListFormVue />
  </div>
</template>

<script>
import SearhEditFormVue from "../ui/SearhEditForm.vue";
import TaskListFormVue from "../ui//TaskListForm.vue"; //Форма списка задач Vue

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
  margin: 1px;
}
</style>
