import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import store from './store/index.js';
import router from './router/index.js';

Vue.use(VueResource);

Vue.http.options.root = 'http://localhost:8888/wp-json/wp/v2/'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')
