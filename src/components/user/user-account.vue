<template>
  <div>
    <h1>{{ username }}</h1>
    <button class="button" v-on:click="onClick()">Log out</button>
  </div>
</template>

<script>
  export default {
    name: 'User-Account',
    computed: {
      username: function () {
        return this.$store.state.User.username;
      }
    },
    methods: {
      onClick: function () {
        localStorage.removeItem('jwt');
        this.$store.dispatch('updateUser');
        this.$router.push({ name: 'Home' });
      }
    }
  };
</script>

<style lang="scss" scoped>
</style>