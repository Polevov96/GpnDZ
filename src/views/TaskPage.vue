<template>
<!-- TODO: реализовать разметку html как в фигме, ссылка: https://www.figma.com/file/PV8ykTmSylYveoSWLgUrNI/Todo-List?node-id=402%3A218&t=2aoMFEg7Am5IOb7b-0 -->
<div class="task">
  <div>Task: {{ $route.params.id  }} {{getTaskList}}</div>
  <WrapperTask :selectedItem="getTaskList"/>
</div>
</template>

<script>

import WrapperTask from '@/components/forms/WrapperTask.vue';

export default {
    name: "TaskPage",
    // TODO: реализовать логику компонента.

    components: { WrapperTask },
  // created() {
  //   const serchId = this.$route.params.id;
  //   this.selectedItem = this.$store.getters.taskListOpenTaskFilter(serchId);
  // }
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
/* TODO: добавить стили ( не успел еще исправлю )*/

.task {

}
</style>