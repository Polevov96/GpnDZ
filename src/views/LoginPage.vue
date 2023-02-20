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
import {getUser} from "../api"

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
    login: async function () {
      if (!this.username) {
        alert("не заполненые данные");
        return;
      }
      if (!this.password) {
        alert("не заполненые данные");
        return;
      } else {
      //TODO: 1) отправить запрос на сервер
      const allUsers = await getUser();
      console.log(allUsers);

      const result = allUsers.find((user) => {
        return this.username === user.username;
      }); if(result) {
      this.$store.dispatch("addUser", result);
      this.$router.push("/tasklist");
      } else {
        alert("неверно имя пользователя или пароль учетной записи")
      }
    }
      
      
      // TODO:  проверить на возврат ошибки из api (result instanceof Error)
      // TODO: переписать логику ниже на новые условия

    //    .then((res) => {
    //       const result = res.data.find((user) => {
    //         return this.username === user.username;
    //       });
    //       console.log(result);
    //       if (result) {
    //         this.$store.dispatch("addUser", result);
    //         // Если true 6
    //         //TODO: 2) Записать ответ сервера записать в store
    //         this.$router.push("/tasklist");
    //       }
    //       // Если false - вывести ошибку
    //     })
    //     .catch((err) => console.log(err));
    },
  },
};
</script>

<style></style>
