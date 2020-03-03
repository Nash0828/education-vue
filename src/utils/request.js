/* eslint-disable */
import axios from 'axios'
import store from '@/store'
import router from '@/router'
import qs from 'qs'
import Vue from 'vue'
import { Dialog } from 'vant'
import Cookies from 'js-cookie'
import { getUrlParam } from '@/utils/utils'
Vue.use(Dialog)

const commonParams = {
  // token: getUrlParam('token') || store.getters.token || Cookies.get('token')
  share_code: getUrlParam('share_code'),
  lang: 'zh-cn'
}
export const config = {
  // timeout: 5000,
  baseURL: '/api',
  params: commonParams,
  data: commonParams,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  transformRequest: [function (data) {
    return qs.stringify(data)
  }]
}

const service = axios.create(config)

service.interceptors.request.use(_config => {
  if (process.env.NODE_ENV === 'development') {
    // _config.headers['token'] = 'CDE98EAB06A28000C5F8598CB668ECC7gt1y'
  } else {
    _config.headers['token'] = store.getters.token || getUrlParam('token') || Cookies.get('token')
  }
  return _config
}, error => {
  return Promise.reject(error)
})

service.interceptors.response.use(response => {
  let res = response.data
  if (res.code === 1 || res.code === '1') {
    const code = res.code
    const msg = res.msg
    store.commit('SET_API_STATUS', {code, msg})
    return res
  } else {
    Dialog.alert({
      title: '提示',
      message: res.msg
    }).then(() => {
      // router.push('/')
    })
    return Promise.reject(res)
  }
}, error => {
  if (error && error.response) {
    let code = error.response.data.code || error.response.status
    let msg = error.response.data.msg || error.response.statusText
    // 如果未登录, 跳转到登陆页
    if (code === 401 || code === '401') {
    } else {
      store.commit('SET_API_STATUS', {code, msg})
      Dialog.alert({
        title: '提示',
        message: msg
      })
    }
  }
  return Promise.reject(error)
})

export default service
