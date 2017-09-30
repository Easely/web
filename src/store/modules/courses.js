import Vue from 'vue';

const state = {
  courses: {}
};

const mutations = {
  setCourses (state, value) {
    state.courses = value;
  }
};

const actions = {
  getCourses (context) {
    Vue.http.get('/api/courses').then(response => {
      let items = {};
      response.body.forEach(function (item) {
        items[item.id] = item;
      });
      context.commit('setCourses', items);
    }, response => {
      console.log(response.body);
    });
  }
};

export default {
  state,
  mutations,
  actions
};
