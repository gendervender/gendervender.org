import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import PrismicVue from '@prismicio/vue';
import linkResolver from './prismic/link-resolver';

Vue.config.productionTip = false;

Vue.use(PrismicVue, {
  endpoint: window.prismic.endpoint,
  apiOptions: { accessToken: process.env.VUE_APP_PRISMIC_TOKEN },
  linkResolver: linkResolver
});

const DOC_TYPES = {
  homePage: "home_page_v2",
  aboutPage: "about",
  teamPage: "team",
  contactPage: "contact",
  shopPage: "shop",
  footer: "footer",
  products: "products",
  stories: "stories",
  privacyPolicy: "privacy_policy"
}

Vue.prototype.$prismic.client.query('').then(function(response) {
  let data = {}
  Object.keys(DOC_TYPES).forEach(item => {
    data[item] = response.results.filter(doc => doc.type === DOC_TYPES[item]);
    if (item === 'stories'){
      data[item] = data[item].map(i => {
        return {
          ...i.data,
          uid: i.uid
        }
      })
    }else{
      data[item] = data[item].map(i => i.data);
    }
    if (data[item].length === 1){
      data[item] = data[item][0]
    }
  })
  new Vue({
    router,
    store: store(data),
    render: h => h(App)
  }).$mount('#app');
});