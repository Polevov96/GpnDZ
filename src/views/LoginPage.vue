<template>
  <PageLayout :useHeader="false">
    <template v-slot:content>
      <div class="home">
        <form class="login" @submit.prevent="login">
          <label>Имя пользователя</label>
          <input required v-model="username" type="text" placeholder="Login" />
          <label>Password</label>
          <input
            required
            v-model="password"
            type="password"
            placeholder="Password"
          />
          <hr />
          <button @click="login" type="submit">Login</button>
        </form>
      </div>
    </template>
  </PageLayout>
</template>

<script>
import PageLayout from "@/components/layout/PageLayout.vue";

export default {
  name: "LoginPage",
  components: {
    PageLayout,
  },
  data: function () {
    return {
      username: null,
      password: null,
    };
  },
  methods: {
    login: function () {
      if (!this.username) {
        alert("не заполненые данные");
        return;
      }
      if (!this.password) {
        alert("не заполненые данные");
        return;
      }
      //TODO: 1) отправить запрос на сервер
      //TODO: 2) Записать ответ сервера записать в store
      this.$router.push("/tasklist");
    },
  },
};
</script>

<style></style>
