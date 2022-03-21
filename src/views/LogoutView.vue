<template>
  <AbstractBlockView>
    <template #title>Logout</template>
    <template #content>
      <p>You've been log out successfully.</p>
    </template>
  </AbstractBlockView>
</template>

<script>
  import AbstractBlockView from "@/components/AbstractBlockView";

  export default {
    name: 'LogoutView',
    components: { AbstractBlockView },
    mounted(){
      this.$store.dispatch('authentication/clearToken');
    }
  };
</script>
