<template>
  <div class="task-text-edit">
    <textarea
        class="add-text_input"
        type="text"
      />
  </div>
</template>

<script>

// import TaskItem from '@/components/ui/TaskItem.vue';

export default {
    name: "SeparateTask",
    components: {

    },
    props: {
  
  }, computed: {
    getTaskList() {
      return this.$store.state.taskList;
    },
    isEdit() {
      return this.$store.state.isEdit;
    },
  },
}

</script>



<style>
.task-text-edit {
  padding: 10px;
  width: 530px;
  height: 130px;
  background-color: orange;
  overflow: auto;
  border-radius: 6px;
  margin: 0px;
}
.add-text_input {
  width: 524px;
  height: 120px;
  background-color:white ;
}
</style>