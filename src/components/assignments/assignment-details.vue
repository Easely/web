<template>
  <div>
    <div class="jumbotron">
      <div class="container">
        <h1 class="display-3">{{ assignment.name }}</h1>
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
