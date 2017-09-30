<template>
  <div>
    <h1>Courses</h1>
    <course-list></course-list>
    <h1>Assignments</h1>
    <assignment-list></assignment-list>
  </div>
</template>

<script>
  import AssignmentList from './assignments/assignment-list.vue';
  import CourseList from './courses/course-list.vue';

  export default {
    name: 'Home',
    components: {
      AssignmentList,
      CourseList
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
