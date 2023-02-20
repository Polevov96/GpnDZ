<template>
  <div class="nav">
    <nav>
      <router-link to="/auth/login">Login</router-link> |
      <router-link to="/">About</router-link> |
      <router-link to="/tasklist/task/id">SeparateTask</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>

<style scoped>
.nav {
  display: flex;
  justify-content: flex-start;
  padding: 20px;
  margin: 0px;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5px;
  padding-bottom: 5px;
}

nav {
  top: 0px;
}

nav a {
  font-weight: bold;
  /* color: #2c3e50; */
  color: #42b983;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
