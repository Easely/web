<template>
  <div>
    <div class="container">
      <div class="row justify-content-center registerMenu">
        <div class="col-11 col-md-6">
          <div class="alert alert-primary" role="alert">
            Please <router-link :to="{ name: 'About'}" class="alert-link">read about Easely</router-link> before registering
          </div>
          <div class="card registerCard">
            <div class="card-body">
              <h4 class="card-title">Register on Easely</h4>
              <template v-if="registerError">
                <div class="alert alert-danger" role="alert">
                  There was an error during registration
                </div>
              </template>
              <form v-on:submit.prevent="onSubmit">
                <div class="form-group">
                  <!-- TODO validate email address -->
                  <label for="email">Email address</label>
                  <input type="email" class="form-control" id="email" v-model="email" required
                         v-bind:class="{ 'is-invalid':isEmailInvalid }">
                  <template v-if="!isEmailInvalid">
                    <small class="form-text text-muted">You must register with your Harding email address</small>
                  </template>
                  <div class="invalid-feedback">
                    You must register with your Harding email address
                  </div>
                </div>

                <div class="form-group">
                  <label for="password">Password</label>
                  <input id="password" type="password" class="form-control" v-model="password" required
                         v-bind:class="{ 'is-invalid':isPasswordInvalid }">
                  <div class="invalid-feedback">
                    Your password must be at least 8 characters long
                  </div>
                </div>
                <div class="form-group">
                  <label for="confirmPassword">Confirm password</label>
                  <input id="confirmPassword" type="password" class="form-control" v-model="confirmPassword" required
                         v-bind:class="{ 'is-invalid':isConfirmPasswordInvalid }">
                  <div class="invalid-feedback">
                    Your passwords don't match
                  </div>
                </div>

                <br>

                <div class="form-group">
                  <label for="easelUsername">EASEL Username</label>
                  <input id="easelUsername" type="text" class="form-control" v-model="easelUsername" required>

                  <label for="easelPassword">EASEL Password</label>
                  <input type="password" class="form-control" v-model="easelPassword" required>
                  <small id="easelPassword" class="form-text text-muted">
                    We need your EASEL credentials to load your classes, assignments, and grades from the EASEL website. They are stored in plain text.
                  </small>
                </div>

                <button type="submit" class="btn btn-primary">Register</button>
              </form>
            </div>
            <ul class="list-group list-group-flush">
              <router-link :to="{ name: 'Login' }" class="list-group-item list-group-item-action">
                Already have an account? Login now
              </router-link>
            </ul>
          </div>
        </div>
      </div>
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
        easelPassword: '',
        registerError: false
      };
    },
    computed: {
      isEmailInvalid: function () {
        // https://stackoverflow.com/questions/3270185/javascript-regex-to-determine-the-emails-domain-yahoo-com-for-example
        return /(@)/.test(this.email) && !/@harding.edu\s*$/.test(this.email.toLowerCase());
      },
      isPasswordInvalid: function () {
        return this.password.length < 8 && this.password.length > 0;
      },
      isConfirmPasswordInvalid: function () {
        return this.password !== this.confirmPassword && this.confirmPassword.length > 0
      }
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
          this.registerError = true;
        });
      }
    }
  };
</script>

<style lang="scss" scoped>
  .registerMenu {
    margin-top: 30px;
  }

  .registerCard {
    margin-bottom: 10px;
  }
</style>