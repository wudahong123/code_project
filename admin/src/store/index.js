import { createStore } from 'vuex'
import createpersistedstate from 'vuex-persistedstate'

export default createStore({
  state: {
    isGetterRouter: false,
    isCollapsed: false
  },
  getters: {},

  mutations: {
    changeGetterRouter(state, value) {
      state.isGetterRouter = value
    },
    // 控制侧边栏的展开
    changeCollapsed(state) {
      state.isCollapsed = !state.isCollapsed
    }
  },
  actions: {},
  modules: {},
  plugins: [
    createpersistedstate({
      paths: ['isCollapsed'] //控制是否持久化
    })
  ]
})
