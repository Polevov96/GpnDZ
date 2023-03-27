<template>
  <div class="wrapper">
    <EditingTaskForm />
    <InfoTaskForm :selectedItem="getTaskList"/>
  </div>
</template>

<script>

import EditingTaskForm from './EditingTaskForm.vue';
import InfoTaskForm from './InfoTaskForm.vue'

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
      return this.$store.getters.selectTaskById(this.$route.params.id);
    },
}
}
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
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  justify-content:center;
}
</style>