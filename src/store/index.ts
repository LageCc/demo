import { createStore } from 'vuex'
import Vuex from "vuex";
// 引入插件
import createPersistedState from "vuex-persistedstate";

export default createStore({
  plugins: [
    createPersistedState({
      storage: window.localStorage,
      key: 'store',
      reducer(token) {
        return {
          assessmentData: token
        }
      }
    })
  ],
  state: {
    token : '',
  },
  getters: {
  },
  mutations: {
    set_token(state, token) {
      state.token = token
      localStorage.token = token
    },
    del_token(state) {
      state.token = ''
      localStorage.removeItem('token')
    }
  },
  actions: {
  },
  modules: {
  }
})