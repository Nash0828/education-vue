import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 接口状态码
    apiStatus: {
      code: 0,
      msg: ''
    },
    // 是否已鉴权
    authFlag: false,
    token: '',
    shareCode: ''
  },
  modules: {
    app
  },
  getters,
  mutations: {
    SET_API_STATUS: (state, apiStatus) => {
      state.apiStatus = apiStatus
    },
    SET_AUTH_FLAG: (state, authFlag) => {
      state.authFlag = authFlag
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_SHARE_CODE: (state, shareCode) => {
      state.shareCode = shareCode
    }
  },
  actions: {}
})
