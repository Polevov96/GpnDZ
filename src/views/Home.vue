<template>
  <div>
    <t>Добрый день!</t>
    <button @click="login" type="submit">Авторизация</button>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  methods: {
    login: function () {
      this.$router.push("/auth/login");
    },
  },
};
</script>

<style></style>
