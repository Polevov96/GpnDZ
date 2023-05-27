<template>
<!-- TODO: реализовать разметку html как в фигме, ссылка: https://www.figma.com/file/PV8ykTmSylYveoSWLgUrNI/Todo-List?node-id=402%3A218&t=2aoMFEg7Am5IOb7b-0 -->
<div class="task">
  <WrapperTask :selectedItem="getTaskList()"/>
</div>
</template>

<script>

import WrapperTask from '@/components/forms/WrapperTask.vue';

export default {
    name: "TaskPage",
    // TODO: реализовать логику компонента.

    components: { WrapperTask },
   
  methods: {
    getTaskList() {
      const searchTask = this.$store.getters['taskModules/selectTaskById'](this.$route.params.id);
      
      if(!searchTask) {
        this.$router.push("/404"); 
      }

       return searchTask;

    },

}
}

</script>

<style scoped>

.task {
  display: flex;
  justify-content: flex-start;
  padding: 20px 20px 0px 20px;
  margin: 0px;
  flex-direction: column;
  align-items: center;
}
</style>