<template>
  <div>
    <template v-if="isLoggedIn">
      <div class="container">
        <div class="column is-10-mobile is-offset-1-mobile">
          <div class="columns">
            <div class="column is-two-thirds">
              <h3 class="title is-3">My Courses</h3>

              <div class="columns is-multiline">
                <template v-if="courses">
                  <template v-for="course in courses">
                    <div class="column is-half">
                      <div class="card">
                        <div class="card-content">
                          <div class="content">
                            <router-link :to="{ name: 'Course Details', params: { 'id': course.id } }"
                                         class="card-link">
                              <h4 class="is-size-4">{{ course.name }}</h4>
                            </router-link>
                            <p>
                              {{ course.code }} with {{ course.teacher }}
                            </p>
                          </div>
                        </div>
                        <footer class="card-footer">
                          <router-link :to="{ name: 'Course Assignments', params: { 'id': course.id } }"
                                       class="card-footer-item"><i class="fa fa-file fa-fw" title="Assignments"></i>
                          </router-link>
                          <router-link :to="{ name: 'Course Grades', params: { 'id': course.id } }"
                                       class="card-footer-item"><i class="fa fa-check fa-fw" title="Grades"></i>
                          </router-link>
                        </footer>
                      </div>
                    </div>
                  </template>
                </template>
                <template v-else>
                  <div class="column is-half">
                    <div class="box has-text-centered">
                      <h3>You aren't in any courses</h3>
                    </div>
                  </div>
                </template>
              </div>
            </div>

            <div class="column is-one-third">
              <h3 class="title is-3">Assignments</h3>
              <h6 class="subtitle is-6">You have {{ upcomingAssignments.length
                }} {{ upcomingAssignments.length > 1 || upcomingAssignments.length == 0 ? 'assignments' : 'assignment'
                }} due this week</h6>
              <template v-for="assignment in upcomingAssignments">

                <div class="box assignmentCard">
                  <router-link :to="{ name: 'Assignment Details', params: { 'id': assignment.id } }">
                    <h5 class="is-5 title">{{ assignment.name }}</h5>
                  </router-link>
                  <h6 class="is-6 subtitle assignmentCard--subtitle">{{ dueDate(assignment) }} at {{ dueTime(assignment)
                    }}</h6>
                  <div class="tags">
                    <span class="tag is-light assignmentCard--tag">
                      <router-link :to="{ name: 'Course Details', params: { 'id': assignment.course.id } }">
                        {{ assignment.course.name }}
                      </router-link>
                    </span>
                    <span class="tag is-light">{{ assignment.type }}</span>
                  </div>
                </div>

              </template>
              <template v-if="upcomingAssignments.length == 0">
                You have no upcoming assignments
              </template>
            </div>
          </div>
        </div>
      </div>

    </template>


    <template v-else>
      <section class="hero is-primary is-medium">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">
              Welcome to Easely
            </h1>
            <h2 class="subtitle">
              A better interface for EASEL
            </h2>
            <h2 class="subtitle">
              Please
              <router-link :to="{ name: 'Login' }" class="card-link">Login</router-link>
              or
              <router-link :to="{ name: 'Register' }" class="card-link">Register</router-link>
              to continue
            </h2>
          </div>
        </div>
      </section>
    </template>
  </div>
</template>

<script>
  import Helpers from '../helpers';

  export default {
    name: 'Home',
    computed: {
      email: function () {
        return this.$store.state.User.email;
      },
      isLoggedIn: function () {
        return this.$store.state.User.email !== '';
      },
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
    },
    methods: {
      dueDate: function (assignment) {
        return Date.getMonthName(assignment.date.getMonth()) + " " + assignment.date.getDate()
      },
      dueTime: function (assignment) {
        return assignment.date.toString("h:mm tt");
      }
    }
  }
</script>

<style lang="scss" scoped>
  .assignmentCard {
    padding: 1rem;
    margin-bottom: .75rem;
  }

  .assignmentCard--subtitle {
    margin-bottom: .5rem;
  }

  .assignmentCard--tag a {
    color: #000;
  }
</style>
