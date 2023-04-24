<template>
    <PageLayout :useHeader="true">
      <template v-slot:content>
        <div class="task-list-page">
          <WrapperProjects />
        </div>
      </template>
    </PageLayout>
  </template>
  <script>
  import WrapperProjects from "@/components/forms/WrapperProjects.vue";
  import PageLayout from "@/components/layout/PageLayout.vue";
  
  export default {
    name: "ProjectsListPage",
    components: {
      WrapperProjects,
      PageLayout,
    },
  };
  </script>
  
  <style>
  .task-list-page {
    display: flex;
    justify-content: center;
    padding: 20px 20px 0px 20px;
    margin: 0px;
    flex-direction: column;
    align-items: center;
  }
  </style>