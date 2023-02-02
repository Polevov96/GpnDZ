<template>
  <PageLayout :useHeader="true">
    <template v-slot:content>
      <div class="tasklistPage">
        <WrapperTodo />
      </div>
    </template>
  </PageLayout>
</template>
<script>
import WrapperTodo from "..//components/WrapperTodo.vue";
import PageLayout from "@/components/layout/PageLayout.vue";

export default {
  name: "TasklistPage",
  components: {
    WrapperTodo,
    PageLayout,
  },
};
</script>

<style></style>
