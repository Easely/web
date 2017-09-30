import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import vueEventCalendar from 'vue-event-calendar';

import 'vue-event-calendar/dist/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false;

Vue.use(vueEventCalendar, {
  locale: 'en'
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
