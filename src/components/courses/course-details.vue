<template>
  <div>
    <div class="jumbotron">
      <div class="container">
        <h1 class="display-3">{{ course.name }}</h1>
      </div>
    </div>
    <div class="container">
      <h1>Current Assignments</h1>
      <div class="row">
        <template v-for="assignment in courseAssignments">
          <div class="col-sm-3">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">{{ assignment.name }}</h4>
                <h6 class="card-subtitle mb-2 text-muted">{{ assignment.type }}</h6>
                <router-link :to="{ name: 'Assignment Details', params: { 'id': assignment.id } }" class="card-link">Details</router-link>
                <a href="#" class="card-link">Submit</a>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Course-Details',
    props: {
      id: {
        type: String,
        required: true
      }
    },
    computed: {
      course: function () {
        return this.courses[this.id];
      },
      courses: function () {
        return this.$store.state.Courses.courses;
      },
      courseAssignments: function () {
        return this.$store.state.Assignments.assignments;
      }
    }
  };
</script>

<style lang="scss" scoped>

</style>
