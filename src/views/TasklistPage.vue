<template>
  <PageLayout :useHeader="true">
    <template v-slot:content>
      <!-- FIXME: где сам класс? почему не в разделе стилей? -->
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
