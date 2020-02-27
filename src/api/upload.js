import store from '@/store'
import Vue from 'vue'
import axios from 'axios'
import { config } from '@/utils/request'
import { Dialog } from 'vant'
import { getUrlParam } from '@/utils/utils'
import Cookies from 'js-cookie'
Vue.use(Dialog)

const _config = {
  headers: {
    'Content-Type': 'multipart/form-data',
    'token': config.headers.token
  }
}

axios.interceptors.request.use(_config => {
  _config.headers['token'] = getUrlParam('token') || store.getters.token || Cookies.get('token')
  // _config.headers['token'] = 'CDE98EAB06A28000C5F8598CB668ECC7gt1y'
  return _config
}, error => {
  return Promise.reject(error)
})

axios.interceptors.response.use(response => {
  let res = response.data
  if (res.code === 1 || res.code === '1') {
    return res
  } else {
    return Promise.reject(res)
  }
}, error => {
  if (error && error.response) {
    let code = error.response.data.code || error.response.status
    let msg = error.response.data.msg || error.response.statusText
    store.commit('SET_API_STATUS', {code, msg})
    Dialog.alert({
      title: '提示',
      message: msg
    })
  }
  return Promise.reject(error)
})

export function uploadImage(file) {
  const url = '/addons/qiniu/index/upload'
  let fd = new FormData()
  fd.append('file', file, file.name)
  return axios.post(url, fd, _config)
}
