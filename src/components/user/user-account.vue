<template>
  <div>
    <div class="jumbotron">
      <div class="container">
        <h1 class="display-3">{{ email }}</h1>
      </div>
    </div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-11 col-md-2">
          <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist">
            <router-link :to="{ name: 'User Edit' }" class="nav-link" activeClass="active">Account</router-link>
            <router-link :to="{ name: 'User EASEL' }" class="nav-link" activeClass="active">EASEL Credentials</router-link>
            <a class="nav-link" href="" v-on:click="onClick()">Logout</a>
          </div>
        </div>
        <div class="col-11 col-md-10">

        </div>
      </div>
    </div>
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
