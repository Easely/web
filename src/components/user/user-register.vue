<template>
  <div>
    <div class="container">
      <h1>Register</h1>
      <form v-on:submit.prevent="onSubmit">
        <div class="form-group">
          <!-- TODO validate email address -->
          <label for="email">Email address</label>
          <input type="email" class="form-control" id="email" v-model="email" required>
          <small class="form-text text-muted">You must register with your Harding email address</small>
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <input id="password" type="password" class="form-control" v-model="password" required>
          <template v-if="password.length < 8 && password.length > 0">
            <p>
              <span>Your password must be at least 8 characters long</span>
            </p>
          </template>
          <p class="help">
            <a href="https://lastpass.com/generatepassword.php">Password generator</a>
          </p>
          <label for="confirmPassword">Confirm password</label>
          <input id="confirmPassword" type="password" class="form-control" v-model="confirmPassword" required>
          <template v-if="password !== confirmPassword && confirmPassword.length > 0">
            <span>Your password doesn't match!</span>
          </template>
        </div>

        <div class="form-group">
          <label for="easelUsername">EASEL username</label>
          <input id="easelUsername" type="text" class="form-control">
          <label for="easelPassword">EASEL password</label>
          <input type="password" class="form-control">
          <small id="easelPassword" class="form-text text-muted">
            We need your EASEL credentials to load your classes, assignments, and grades from the EASEL website.
          </small>
        </div>

        <button type="submit" class="btn btn-primary">Register</button>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'User-Register',
    data: function () {
      return {
        email: '',
        password: '',
        confirmPassword: '',
        easelUsername: '',
        easelPassword: ''
      };
    },
    methods: {
      onSubmit: function () {
        if (this.password !== this.confirmPassword) {
          return;
        }
        this.$http.post('/api/user/register', {
          'email': this.email,
          'password': this.password,
          'easelUsername': this.easelUsername,
          'easelPassword': this.easelPassword
        }).then(response => {
          console.log(response.body);
          localStorage.setItem('jwt', response.body.jsonWebToken);
          this.$store.dispatch('updateUser');
          this.$router.push({name: 'Home'});
        }, response => {
          console.log(response.body);
        });
      }
    }
  };
</script>

<style lang="scss" scoped>
</style>