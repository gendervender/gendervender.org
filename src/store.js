import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

function store(data) {
  return new Vuex.Store({
    state: {...data}
  });
}

export default store;