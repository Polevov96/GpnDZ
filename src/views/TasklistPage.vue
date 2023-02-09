<template>
  <PageLayout :useHeader="true">
    <template v-slot:content>
      <!-- FIXME: где сам класс? почему не в разделе стилей? -->
      <div class="task-list-page">
        <WrapperTodo />
      </div>
    </template>
  </PageLayout>
</template>
<script>
import WrapperTodo from "@/components/forms/WrapperTodo.vue";
import PageLayout from "@/components/layout/PageLayout.vue";

export default {
  name: "TasklistPage",
  components: {
    WrapperTodo,
    PageLayout,
  },
};
</script>

<style>
.task-list-page {
  display: flex;
  justify-content: flex-start;
  padding: 20px;
  margin: 0px;
  flex-direction: column;
  align-items: center;
}
</style>
