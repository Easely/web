<template>
  <div>
    <div class="jumbotron">
      <div class="container">
        <h1 class="display-3">{{ course.name }}</h1>
        <p class="lead">{{ course.code }} with {{ course.teacher }}</p>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="nav nav-pills justify-content-center courseNavigation">
            <router-link :to="{ name: 'Course Assignments' }" class="nav-link" activeClass="active">Assignments</router-link>
            <router-link :to="{ name: 'Course Grades' }" class="nav-link" activeClass="active">Grades</router-link>
            <router-link :to="{ name: 'Course Resources' }" class="nav-link" activeClass="active">Class Resources</router-link>
            <a class="nav-link" :href="'https://cs.harding.edu/easel/cgi-bin/class?id=' + course.id" target="_blank">Open on EASEL</a>
          </div>
        </div>
      </div>
      <router-view></router-view>
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
  .courseNavigation {
    margin-bottom: 20px;
  }
</style>
