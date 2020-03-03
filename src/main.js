import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'assets/font/iconfont.css'
import VConsole from 'vconsole'
import animated from 'animate.css'

import { getUrlParam } from '@/utils/utils'
import { Toast, Lazyload } from 'mint-ui'
import { Toast as Loading, Dialog } from 'vant'

Vue.config.productionTip = false
Vue.use(animated)

// 移动端调试
/* eslint-disable */
if (process.env.NODE_ENV === 'development' || getUrlParam('vconsole') === '1') {
 new VConsole()
}

Vue.use(Lazyload, {
  error: require('image/error.png'),
  loading: require('image/default.png'),
  attempt: 1
})


Vue.prototype.$toast = Toast
Vue.prototype.$showLoading = Loading.bind(this, {
  type: 'loading',
  message: '加载中...',
  forbidClick: true,
  loadingType: 'spinner',
  duration: 0
})
Vue.prototype.$hideLoading = Loading.clear.bind(this)
Vue.prototype.$alert = function(message, title = '提示') {
  Dialog.alert({
    title: title,
    message: message
  })
}

router.beforeEach((to, from, next) => {
  //console.log('beforeEach')
  // 判断是否已鉴权
  // 如果没鉴权, 要监听变化
  if (!store.getters.authFlag) {
    // 监听请求状态码变化
    store.watch(state => state.authFlag, (authFlag) => {
      console.log('是否已鉴权', authFlag)
      checkLogin(to, next)
    })
  } else {
    // 已经鉴权过了
    console.log('已经鉴权过了')
    checkLogin(to, next)
  }
})

function checkLogin(to, next) {
  // 判断页面是否需要登录并且没有登录
  if (to.meta.requireAuth && !store.getters.token) {
    // console.log('需要登录但没有登录')
    next({
      path: '/login',
      query: {
        redirect: to.fullPath
      }
    })
  } else {
    // console.log('已登录或不需要登录')
    next()
  }
}


/* eslint-disable no-new */
new Vue({
  // el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
}).$mount('#app')


router.afterEach((to, from) => {
  // console.log('afterEach')
  // 路由发生变化修改页面title
  if (to.meta.title) {
    document.title = to.meta.title
  }
})


window.webapp = app
