<template>
    <!-- TODO: реализовать разметку html как в фигме, ссылка: https://www.figma.com/file/PV8ykTmSylYveoSWLgUrNI/Todo-List?node-id=402%3A218&t=2aoMFEg7Am5IOb7b-0 -->
    <div class="task">
      <WrapperProject :selectedItem="getProjectsList()"/>
    </div>
    </template>
    
    <script>
    
    import WrapperProject from '@/components/forms/WrapperProject.vue';
    
    export default {
        name: "TaskPage",
    
        components: { WrapperProject },

       
      methods: {
        getProjectsList() {
          const searchProject = this.$store.getters['projectModules/selectProjectById'](this.$route.params.id);
          
          if(!searchProject) {
            this.$router.push("/404"); 
          }
            return searchProject;

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