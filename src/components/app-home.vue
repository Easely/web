<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-sm-8">
          <div class="row">
            <template v-for="course in courses">
              <div class="col-sm-6">
                <div class="card courseCard">
                  <div class="card-body">
                    <h4 class="card-title">{{ course.name }}</h4>
                    <h6 class="card-subtitle mb-2 text-muted">{{ course.code.toUpperCase() }}</h6>
                    <router-link :to="{ name: 'Course Details', params: { 'id': course.id } }" class="card-link">Details
                    </router-link>
                  </div>
                </div>
              </div>
            </template>
          </div>
        </div>
        <div class="col">
          <h3>Upcoming Assignments</h3>
          <ul>
            <template v-for="assignment in upcomingAssignments">
              <li><router-link :to="{ name: 'Assignment Details', params: { 'id': assignment.id } }" class="card-link">{{ assignment.name }}</router-link></li>
            </template>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Helpers from '../helpers';

  export default {
    name: 'Home',
    computed: {
      assignments: function () {
        return this.$store.state.Assignments.assignments;
      },
      courses: function () {
        return this.$store.state.Courses.courses;
      },
      upcomingAssignments: function () {
        let assignments = this.assignments;
        let upcomingAssignments = [];

        let today = new Date();
        let nextWeek = new Date();
        nextWeek.setDate(nextWeek.getDate() + 7);

        Helpers.objectToArray(assignments).forEach(function (assignment) {
          let assignmentDate = new Date(assignment.date.year, assignment.date.monthValue - 1, assignment.date.dayOfMonth);

          if (assignmentDate.getTime() > today.getTime()) {
            if (assignmentDate.getTime() < nextWeek.getTime()) {
              upcomingAssignments.push(assignment);
            }
          }
        });
        return upcomingAssignments;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .courseCard {
    margin-top: 10px;
  }
</style>
