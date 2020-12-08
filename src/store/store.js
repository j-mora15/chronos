import { createStore } from 'vuex'
import Chronos from '../ChronosCore/ChronosCore.js'

export default createStore({
  state: {
    panel: false,
    location: null,
    chronos: new Chronos()
  },

  mutations: {
    CHANGE_PANEL_STATUS: state => {
      state.panel = !state.panel
    },

    SET_LOCATION: (state, locationInfo) => {
      state.location = locationInfo
    }
  },

  actions: {
    changePanelStatus: ({ commit }) => {
      commit('CHANGE_PANEL_STATUS')
    },

    setLocation: ({ commit }, data) => {
      commit('SET_LOCATION', data)
    }
  },

  getters: {
    panelStatus: state => state.panel,
    getLocation: state => state.location,
    getChronos: state => state.chronos
  }
})
