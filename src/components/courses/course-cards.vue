<template>
  <div>
    <template v-for="course in courses">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">{{ course.code.toUpperCase() }} - {{ course.name }}</h4>
          <h6 class="card-subtitle mb-2 text-muted">Professor name</h6>
          <a href="#" class="card-link">Details</a>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
  export default {
    name: 'Course-Cards',
    computed: {
      courses: function () {
        return this.$store.state.Courses.courses;
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
