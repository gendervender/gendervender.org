import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

function store() {
  return new Vuex.Store({
    state: {},
    mutations: {
      setData(state, payload) {
        Object.assign(state, payload)
      }
    },
    actions: {
      setData({commit}, payload){
        commit('setData', payload)
      },
    }
  });
}

export default store;