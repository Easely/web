<template>
    <vue-event-calendar :events="assignments"></vue-event-calendar>
</template>

<script>
  export default {
    name: 'Calendar',
    computed: {
      assignments: function () {
        let assignments = this.$store.state.Assignments.assignments;
        let calendarAssignments = [];
        assignments.forEach(function (assignment) {
          let calendarAssignment = {};
          let date = new Date();
          date.setDate(assignment.date.dayOfMonth);
          date.setMonth(assignment.date.monthValue);
          date.setYear(assignment.date.year);

          calendarAssignment.date = date;
          calendarAssignment.title = assignment.name;
          calendarAssignment.desc = assignment.type;
          calendarAssignments.push(calendarAssignment);
        });
        return calendarAssignments;
      }
    }
  }
</script>