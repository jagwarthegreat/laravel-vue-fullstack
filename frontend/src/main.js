import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import { routes } from './routes';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
Vue.config.productionTip = false

const router = new VueRouter({
  routes,
  mode: 'history',

});
 

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
