import Vue from 'vue';

const state = {
  assignments: {},
  isLoaded: false
};

const mutations = {
  setAssignments (state, value) {
    state.assignments = value;
    state.isLoaded = true;
  }
};

const actions = {
  getAssignments (context) {
    Vue.http.get('/api/assignments').then(response => {
      let items = {};
      response.body.forEach(function (item) {
        items[item.id] = item;
        item.date = new Date(item.date.year, item.date.monthValue - 1, item.date.dayOfMonth);
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
