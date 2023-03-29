import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import router from './router'
import {store} from '@/store/index';

import { Toast } from 'vant';
Vue.use(Toast)
import 'vant/es/toast/style';
Vue.prototype.$toast = Toast

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
