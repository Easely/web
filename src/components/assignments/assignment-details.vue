<template>
  <div>
    <div class="jumbotron">
      <div class="container">
        <h1 class="display-3">{{ assignment.name }}</h1>
        <p class="lead">Due on {{ assignment.date.getMonth() + 1 }}/{{ assignment.date.getDate() }}/{{ assignment.date.getFullYear() }} at {{ assignment.date.getHours() }}:{{ assignment.date.getMinutes() }}</p>
        <p>Not yet graded, worth 10 points</p>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="nav nav-pills justify-content-center">
            <a class="nav-link active">Details</a>
            <a class="nav-link"
               :href="'https://cs.harding.edu/easel/cgi-bin/view?id=' + assignment.id + '&action=submit'"
               target="_blank">Submit</a>
            <a class="nav-link" :href="'https://cs.harding.edu/easel/cgi-bin/view?id=' + assignment.id" target="_blank">Open on EASEL</a>
          </div>
        </div>
      </div>
      <div class="row">
        <p>This assignment has no attachment</p>
      </div>
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
