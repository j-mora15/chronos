import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showSplash: true
  },
  mutations: {
    TOGGLE_SPLASH: state => {
      state.showSplash = !state.showSplash
    }
  },
  actions: {
    toggleSplash: ({ commit }) => {
      commit('TOGGLE_SPLASH')
    }
  },
  getters: {
    getSplashState: state => state.showSplash
  }
})
