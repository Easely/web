import Vue from 'vue';

const state = {
  assignments: {}
};

const mutations = {
  setAssignments (state, value) {
    state.assignments = value;
  }
};

const actions = {
  getAssignments (context) {
    Vue.http.get('/api/assignments', {
      'jwt': localStorage.getItem('jwt')
    }).then(response => {
      let items = {};
      response.body.forEach(function (item) {
        items[item.id] = item;
      });
      context.commit('setAssignments', items);
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
