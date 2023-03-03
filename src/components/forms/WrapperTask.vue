<template>
  <div class="wrapper">
    <EditingTaskForm />
    <InfoTaskForm :selectedItem="getTaskList"/>
  </div>
</template>

<script>

import EditingTaskForm from '../ui/EditingTaskForm.vue';
import InfoTaskForm from '@/components/ui/InfoTaskForm.vue'

export default {
  name: "WrapperTask",
  components: {
    EditingTaskForm,
    InfoTaskForm
  },
  props: {
      selectedItem: {
        type: Object,
        default: null,
      },
},
computed: {
    getTaskList() {
      // console.log(this.$store.getters.taskListOpenTaskFilter(this.$route.params.id))
      return this.$store.getters.taskListOpenTaskFilter(this.$route.params.id);
      // return this.$store.state.taskList;
    },
}
}
</script>

<style scoped>
.wrapper {
  padding: 30px;
  width: 530px;
  height: 330px;
  background-color: white;
  overflow: auto;
  border-radius: 6px;
  margin: 1px;
}
</style>