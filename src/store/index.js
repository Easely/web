import Vue from 'vue';
import Vuex from 'vuex';
import VueResource from 'vue-resource';

import Assignments from './modules/assignments';
import Courses from './modules/courses';
import User from './modules/user';

Vue.use(Vuex);
Vue.use(VueResource);

export default new Vuex.Store({
  modules: {
    Assignments,
    Courses,
    User
  },
  strict: process.env.NODE_ENV !== 'production'
});
