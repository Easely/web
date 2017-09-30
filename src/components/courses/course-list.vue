<template>
    <div>
        <ul>
        <template v-for="course in courses">
            <li>
                {{ course.name }}
            </li>
        </template>
        </ul>
    </div>
</template>

<script>
  export default {
    name: 'Course-List',
    computed: {
      courses: function () {
        return this.$store.state.Courses.courses;
      }
    }
  };
</script>

<style lang="scss" scoped>

</style>
