import "@babel/polyfill";

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import NProgress from 'nprogress';

import 'bootstrap/scss/bootstrap-reboot.scss';
import 'bootstrap/scss/bootstrap-grid.scss';

Vue.config.productionTip = false

NProgress.start();
NProgress.done();


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
