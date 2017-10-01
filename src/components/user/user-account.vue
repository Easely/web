<template>
  <div>
    <div class="jumbotron">
      <div class="container">
        <h1 class="display-3">{{ email }}</h1>
        <br>
        <button class="btn btn-primary" v-on:click="onClick()">Log out</button>
      </div>
    </div>
    <h1></h1>

  </div>
</template>

<script>
  export default {
    name: 'User-Account',
    computed: {
      email: function () {
        return this.$store.state.User.email;
      }
    },
    methods: {
      onClick: function () {
        localStorage.removeItem('jwt');
        this.$store.dispatch('updateUser');
        this.$router.push({name: 'Home'});
      }
    }
  };
</script>

<style lang="scss" scoped>
</style>
