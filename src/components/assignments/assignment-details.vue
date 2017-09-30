<template>
  <div>
    <div class="jumbotron">
      <div class="container">
        <h1 class="display-3">{{ assignment.name }}</h1>
        <a class="btn btn-primary" :href="'https://cs.harding.edu/easel/cgi-bin/view?id=' + assignment.id" role="button">Open on EASEL</a>
      </div>
    </div>
    <div class="container">

    </div>
  </div>
</template>

<script>
  export default {
    name: 'Assignment-Details',
    props: {
      id: {
        type: String,
        required: true
      }
    },
    computed: {
      assignment: function () {
        return this.assignments[this.id];
      },
      assignments: function () {
        return this.$store.state.Assignments.assignments;
      }
    }
  };
</script>

<style lang="scss" scoped>

</style>
