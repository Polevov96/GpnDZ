<template>
  <div>
    <!-- FIXME: Эта страница не нужна, или удалить или сделать из нее лендинг с описанием проекта -->
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
