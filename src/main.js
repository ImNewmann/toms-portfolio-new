import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';
import router from './router/index.js';
import VuePlyr from 'vue-plyr';
import 'vue-plyr/dist/vue-plyr.css';
import vueVimeoPlayer from 'vue-vimeo-player';

Vue.use(vueVimeoPlayer);
Vue.use(VueResource);
Vue.use(VuePlyr, { plyr: {} });

Vue.config.productionTip = false;

new Vue({
    render: (h) => h(App),
    router,
}).$mount('#app');
