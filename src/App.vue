<template>
  <div id="app">
      <app-navbar></app-navbar>
      <router-view></router-view>
  </div>
</template>

<script>
    import AppNavbar from './components/app-navbar.vue';

  export default {
    name: 'App',
    components: {
      AppNavbar
    },
    method: {
      updateData: function () {
        // TODO call this function in created
        this.$store.dispatch('getAssignments');
        this.$store.dispatch('getCourses');
      }
    },
    created: function () {
      this.$store.dispatch('updateUser');
    }
  };
</script>

<style lang="scss" scoped>

</style>
