import { createStore } from 'vuex'

export default createStore({
  state: {
    isGetterRouter: false,
    isCollapsed: false
  },
  getters: {},
  mutations: {
    changeGetterRouter(state, value) {
      state.isGetterRouter = value
    }
  },
  actions: {},
  modules: {}
})
