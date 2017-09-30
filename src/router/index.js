import Vue from 'vue';
import Router from 'vue-router';

import Home from '../components/app-home.vue';

import AssignmentDetails from '../components/assignments/assignment-details.vue';

import CourseDetails from '../components/courses/course-details.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/assignment/:id',
      name: 'Assignment Details',
      component: AssignmentDetails,
      props: true
    },
    {
      path: '/course/:id',
      name: 'Course Details',
      component: CourseDetails,
      props: true
    }
  ]
});
