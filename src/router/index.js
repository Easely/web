import Vue from 'vue';
import Router from 'vue-router';

import Home from '../components/app-home.vue';
import Login from '../components/user/user-login.vue';
import Register from '../components/user/user-register.vue';
import Account from '../components/user/user-account.vue';

import Error404 from '../components/error-404.vue';

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
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/account',
      name: 'Account',
      component: Account
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
    },
    {
      path: '*',
      name: '404',
      component: Error404
    }
  ]
});
