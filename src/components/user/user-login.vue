<template>
  <div>
    <div class="container">
      <div class="row justify-content-center loginMenu">
        <div class="col-11 col-md-6">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">Login to Easely</h4>
              <form v-on:submit.prevent="onSubmit">
                <div class="form-group">
                  <label for="email">Email address</label>
                  <input type="email" class="form-control" id="email" v-bind:class="{ 'is-invalid':loginError }" v-model="email" required>
                </div>
                <div class="form-group">
                  <label for="password">Password</label>
                  <input type="password" class="form-control" id="password" v-bind:class="{ 'is-invalid':loginError }" v-model="password" required>
                  <div class="invalid-feedback">
                    Invalid email or password
                  </div>
                </div>
                <button type="submit" class="btn btn-primary">Login</button>
                <button type="button" class="btn btn-link">Forgot password?</button>
              </form>
            </div>
            <ul class="list-group list-group-flush">
              <router-link :to="{ name: 'Register' }" class="list-group-item list-group-item-action">Don't have an account? Register now</router-link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'User-Login',
    data: function () {
      return {
        email: '',
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
  .loginMenu {
    margin-top: 30px;
  }
</style>
