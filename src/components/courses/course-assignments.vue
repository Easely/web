<template>
  <div class="row">
    <div class="col">
      <h2>Current Assignments</h2>
      <div class="row">
        <template v-for="assignment in courseAssignmentsSortedByDate">
          <div class="col-sm-4">
            <div class="card">
              <div class="card-body">
                <router-link :to="{ name: 'Assignment Details', params: { 'id': assignment.id } }"><h4
                  class="card-title">{{ assignment.name }}</h4></router-link>
                <h6 class="card-subtitle mb-2 text-muted">{{ assignment.type }}</h6>
              </div>
            </div>
          </div>
        </template>
      </div>
      <h2>Past Assignments</h2>
    </div>
  </div>
</template>

<script>
  import Helpers from '../../helpers';

  export default {
    name: 'Course-Assignments',
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
  }
</script>

<style lang="scss" scoped>
</style>
