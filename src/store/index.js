import Vue from 'vue';
import Vuex from 'vuex';
import VueResource from 'vue-resource';

import Assignments from './modules/assignments';
import Courses from './modules/courses';

Vue.use(Vuex);
Vue.use(VueResource);

export default new Vuex.Store({
  modules: {
    Assignments,
    Courses
  },
  strict: process.env.NODE_ENV !== 'production'
});
