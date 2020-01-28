import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    canvasWidth: 0,
    canvasHeight: 0
  },
  mutations: {
    canvasWidth(state, width){
      state.canvasWidth = width
    },

    canvasHeight(state, height) {
      state.canvasHeight = height
    }
  },
  actions: {
  },
  modules: {
  }
})
