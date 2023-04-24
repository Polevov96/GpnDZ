<template>
  <div class="wrapper">
    <SearchEditFormProjects />
    <ProjectsListFormVue />
  </div>
</template>

<script>
import SearchEditFormProjects from "./SearchEditFormProjects.vue";
import ProjectsListFormVue from "./ProjectsListForm.vue";

export default {
  name: "WrapperProjects",
  components: {
    SearchEditFormProjects,
    ProjectsListFormVue,
  },
};
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
  /* border-radius: 50px; */
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  justify-content:center;
}
</style>