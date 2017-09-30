<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col">
          <course-cards></course-cards>
        </div>
        <div class="col-4">
          <h3>Upcoming Assignments</h3>
            <assignment-list :assignments="upcomingAssignments"></assignment-list>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import AppCalendar from './app-calendar.vue';
  import AssignmentList from './assignments/assignment-list.vue';
  import CourseList from './courses/course-list.vue';
  import App from "../App.vue";
  import CourseCards from "./courses/course-cards.vue";

  export default {
    name: 'Home',
    components: {
      CourseCards,
      AppCalendar,
      AssignmentList,
      CourseList
    },
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

        assignments.forEach(function (assignment) {
          let assignmentDate = new Date(assignment.date.year, assignment.date.monthValue - 1, assignment.date.dayOfMonth);

          if (assignmentDate.getTime() > today.getTime()) {
            if (assignmentDate.getTime() < nextWeek.getTime()) {
              upcomingAssignments.push(assignment);
            }
          }
        });
        return upcomingAssignments;
      }
    },
    method: {
      updateData: function () {
        // TODO call this function in created
        this.$store.dispatch('getAssignments');
        this.$store.dispatch('getCourses');
      }
    },
    created: function () {
      this.$store.dispatch('getAssignments');
      this.$store.dispatch('getCourses');
    }
  }
</script>

<style lang="scss" scoped>

</style>
