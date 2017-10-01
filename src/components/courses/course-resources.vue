<template>
  <div class="row">
    <template v-for="(link, title) in course.resources">
      <div class="col-4">
        <div class="card">
          <div class="card-body">
            <a :href="'https://cs.harding.edu/easel/cgi-bin/' + link" target="_blank"><h4 class="card-title">{{ title }}</h4></a>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
  export default {
    name: 'Course-Resources',
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
    }
  }
</script>

<style lang="scss" scoped>

</style>
