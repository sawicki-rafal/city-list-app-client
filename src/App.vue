<template>
  <div id="app">
    <ExceptionHandler/>
    <button v-if="this.$store.getters['authentication/isUserLoggedIn']" class="logout-button" @click="logout">
      Logout
    </button>
    <router-view class="router"/>
  </div>
</template>

<style lang="scss">
#app {
  color: #2c3e50;
  position: relative;
}

.router {
  @extend %full-page;
  padding-top: 100px;
  position: fixed;
  top: 0;
}

.logout-button {
  @include outline-button($red, $secondary-color);
  position: fixed;
  z-index: 1;
}

</style>
<script>
import ExceptionHandler from "@/components/ExceptionHandler";
import '@/assets/styles/common/citylistapp.scss';

export default {
  components: {
    ExceptionHandler
  },
  methods: {
    logout() {
      this.$router.push('logout');
    }
  }
};
</script>