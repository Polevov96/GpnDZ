<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
 name:"app",
 comments: {

 },
}
</script>

<style>

</style>
<style>

#app {
  width: 100%;
  min-height: 100vh;
  background-color: black;
  display: flex;
  justify-content: flex-start;
  padding: 20px;
  margin: 0px;
  background-image: url("@/assets/fon.png");
  flex-direction: column;
  align-items: center;
}
* {
  margin: 0;
  padding: 0;
}
</style>
