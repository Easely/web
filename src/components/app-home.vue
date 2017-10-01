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
                    <router-link :to="{ name: 'Course Details', params: { 'id': course.id } }" class="card-link">
                      <h4 class="card-title">{{ course.name }}</h4>
                    </router-link>
                    <h6 class="card-subtitle mb-2 text-muted">{{ course.code.toUpperCase() }}</h6>
                  </div>
                </div>
              </div>
            </template>
          </div>
        </div>
        <div class="col">
          <h4 class="upcomingTitle">Upcoming Assignments</h4>
          <ul class="list-group upcomingList">
            <template v-for="assignment in upcomingAssignments">
              <router-link :to="{ name: 'Assignment Details', params: { 'id': assignment.id } }"
                           class="list-group-item list-group-item-action flex-column align-items-start">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">{{ assignment.name }}</h5>
                  <small class="text-muted">Due on {{ assignment.date.getMonth() + 1 }}/{{ assignment.date.getDate() }}</small>
                </div>
                <p class="mb-1">{{ assignment.type }} in {{ assignment.course.name }}</p>
              </router-link>
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
          if (assignment.date.getTime() > today.getTime()) {
            if (assignment.date.getTime() < nextWeek.getTime()) {
              upcomingAssignments.push(assignment);
            }
          }
        });
        let upcomingAssignmentsSortedByDate = Helpers.sortAssignmentArrayByDate(upcomingAssignments);
        return upcomingAssignmentsSortedByDate;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .courseCard {
    margin-top: 10px;
  }

  .upcomingTitle {
    margin-top: 10px;
  }

  .upcomingList {
    margin-top: 10px;
  }
</style>
