<template>
  <div id="app">
 <WrapperTodo />
  </div>
</template>

<script>
import WrapperTodo from './components/WrapperTodo.vue';

export default {
  name: 'App',
  components: {
    WrapperTodo,
  }
}
</script>


<style>
#app {
  width: 100%;
  height: 100%;
  background-color: black;
  display: flex;
  justify-content: center;
  padding: 20px;
  margin: 0px;
  background-image: url('@/assets/fon.png');
}
* {
  margin: 0;
  padding: 0;
}
</style>
