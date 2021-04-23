import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [
      {
        title: "Todo element 1",
        completed: false,
      },
      {
        title: "Todo element 2",
        completed: false,
      },
    ],
  },
  getters: {

  },
  mutations: {

  },
  actions: {

  }
});