<template>
<!-- TODO: реализовать разметку html как в фигме, ссылка: https://www.figma.com/file/PV8ykTmSylYveoSWLgUrNI/Todo-List?node-id=402%3A218&t=2aoMFEg7Am5IOb7b-0 -->
<div class="task">
  <div>Task: {{ $route.params.id  }}</div>
  <WrapperTask />
</div>
</template>

<script>

import WrapperTask from '@/components/forms/WrapperTask.vue';

export default {
    name: "TaskPage",
    // TODO: реализовать логику компонента.

    components: { WrapperTask }
};

</script>

<style scoped>
/* TODO: добавить стили */

.task {

}
</style>