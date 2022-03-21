<template>
  <AbstractBlockView>
    <template #title>Login</template>
    <template #content>
      <form @submit.prevent="login" class="form">
        <label for="username"></label>
        <input
            v-model="username"
            type="text"
            name="username"
            id="username"
            placeholder="username"/>
        <label for="password"></label>
        <input
            v-model="password"
            type="password"
            name="password"
            id="password"
            placeholder="password"/>
        <button type="submit">Login</button>
      </form>
    </template>
  </AbstractBlockView>
</template>

<script>
import AbstractBlockView from "@/components/AbstractBlockView";
import loginService from "@/helpers/loginService";

export default {
  name: "LoginView",
  components: { AbstractBlockView },
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    async login() {
      const credentials = {
        username: this.username,
        password: this.password,
      };
      console.log(credentials.username);
      loginService.login(credentials)
          .then(() => {
            this.$store.dispatch('authentication/setToken', btoa(`${credentials.username}:${credentials.password}`));
            this.$router.push('dashboard');
          })
          .catch(error => {
            this.$store.dispatch('exception/addError', error);
            console.log(error.response.status);
          });
    },
  },
}
</script>

<style scoped>

</style>