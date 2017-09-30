<template>
  <div>
    <div class="container">
      <h1>Login</h1>
      <template v-if="loginError">
        <div>
          Incorrect username or password
        </div>
      </template>
      <form v-on:submit.prevent="onSubmit">
        <div class="form-group">
          <label for="email">Email address</label>
          <input type="email" class="form-control" id="email" v-model="username" required>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" class="form-control" id="password" v-model="password" required>
        </div>
        <button type="submit" class="btn btn-primary">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'User-Login',
    data: function () {
      return {
        username: '',
        password: '',
        loginError: false
      };
    },
    methods: {
      onSubmit: function () {
        this.$http.post('/api/user/login', {
          'email': this.email,
          'password': this.password
        }).then(response => {
          console.log(response.body);
          localStorage.setItem('jwt', response.body.jsonWebToken);
          this.$store.dispatch('updateUser');
          this.$router.push({name: 'Home'});
        }, response => {
          console.log(response.body);
          this.loginError = true;
        });
      }
    }
  };
</script>

<style lang="scss" scoped>
</style>
