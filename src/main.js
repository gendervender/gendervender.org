import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import PrismicVue from '@prismicio/vue';

Vue.config.productionTip = false;

Vue.use(PrismicVue, {
  endpoint: window.prismic.endpoint,
  apiOptions: { accessToken: process.env.VUE_APP_PRISMIC_TOKEN },
  linkResolver: function(doc){
    if (doc.isBroken) {
      return '/404';
    }
    if (doc.type === 'products') {
      return '/products';
    }
    if (doc.type === 'shop') {
      return '/shop';
    }
    if (doc.type === 'stories') {
      return '/stories';
    }
    return '/404';
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');