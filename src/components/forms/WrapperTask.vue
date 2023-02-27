<template>
  <div class="wrapper">
    <EditingTaskForm />
    <InfoTaskForm />
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