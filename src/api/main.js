import request from '@/utils/request'
/**
 * 获取用户基本信息
 * @returns {*|AxiosPromise<any>}
 */
export function getUserInfo() {
  return request({
    url: '/user/getBaseInfo',
    method: 'get'
  })
}

/**
 * 发送验证码
 * @param mobile
 */
export function sendCode(mobile) {
  return request({
    url: '/sms/send',
    method: 'get',
    params: {
      mobile: mobile,
      event: 'mobilelogin'
    }
  })
}

/**
 * 手机登陆
 * @param mobile
 * @param captcha
 */
export function mobileLogin(mobile, captcha) {
  return request({
    url: '/user/mobilelogin',
    method: 'get',
    params: {
      mobile: mobile,
      captcha: captcha
    }
  })
}

/**
 * 用户名密码登录
 * @param account
 * @param password
 */
export function accountLogin(account, password) {
  return request({
    url: '/user/login',
    method: 'get',
    params: {
      account: account,
      password: password
    }
  })
}

/**
 * 根据分享码获取用户信息
 * @param shareCode
 */
export function getUerInfoByShareCode() {
  return request({
    url: '/user/getUserInfoByShareCode',
    method: 'get'
  })
}
