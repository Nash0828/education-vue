import { getUserInfo } from 'api/main'
import { getMyWallet } from 'api/wallet'
import Cookies from 'js-cookie'
const app = {
  state: {
    user: {}
  },
  mutations: {
    SET_USER: (state, user) => {
      state.user = user
    }
  },
  actions: {
    GetUserInfo({ commit }) {
      return new Promise((resolve) => {
        Promise.all([getUserInfo(), getMyWallet()]).then(res => {
          // console.log('获取用户信息完成')
          const userInfo = Object.assign({}, res[0].data.userinfo, res[1].data, res[0].data.product_type_id)
          commit('SET_USER', userInfo)
          commit('SET_AUTH_FLAG', true)
          commit('SET_TOKEN', userInfo.token)
          resolve()
        }).catch(err => {
          console.log('获取用户信息失败')
          let code = err.response.data.code || err.response.status
          let msg = err.response.data.msg || err.response.statusText
          commit('SET_API_STATUS', {code, msg})
          commit('SET_AUTH_FLAG', true)
          commit('SET_TOKEN', '')
          Cookies.set('token', '')
        }).finally(() => {
          // commit('SET_AUTH_FLAG', true)
          // console.log('鉴权操作已完成')
        })
      })
    }
  }
}
export default app
