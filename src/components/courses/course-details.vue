<template>
  <div>
    <div class="jumbotron">
      <div class="container">
        <h1 class="display-3">{{ course.name }}</h1>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="nav nav-pills justify-content-center">
            <a class="nav-link active">Assignments</a>
            <a class="nav-link">Grades</a>
            <a class="nav-link">Calendar</a>
            <a class="nav-link">Class Resources</a>
            <a class="nav-link" :href="'https://cs.harding.edu/easel/cgi-bin/class?id=' + course.id" target="_blank">Open on EASEL</a>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <h2>Current Assignments</h2>
          <div class="row">
            <template v-for="assignment in courseAssignmentsSortedByDate">
              <div class="col-sm-4">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">{{ assignment.name }}</h4>
                    <h6 class="card-subtitle mb-2 text-muted">{{ assignment.type }}</h6>
                    <router-link :to="{ name: 'Assignment Details', params: { 'id': assignment.id } }" class="card-link">
                      Details
                    </router-link>
                    <a href="#" class="card-link">Submit</a>
                  </div>
                </div>
              </div>
            </template>
          </div>
          <h1>Past Assignments</h1>
        </div>
        </div>
      </div>


  </div>
</template>

<script>
  import Helpers from '../../helpers';

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
      assignments: function () {
        return this.$store.state.Assignments.assignments;
      },
      courseAssignments: function () {
        let that = this;
        let courseAssignments = [];
        Helpers.objectToArray(this.assignments).forEach(function (assignment) {
          if (assignment.course.id === that.course.id) {
            courseAssignments.push(assignment);
          }
        });
        return courseAssignments;
      },
      courseAssignmentsSortedByDate: function () {
        let that = this;
        return Helpers.sortAssignmentArrayByDate(that.courseAssignments);
      }
    }
  };
</script>

<style lang="scss" scoped>

</style>
