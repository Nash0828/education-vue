import request from '@/utils/request'

/**
 * 获取用户地址
 */
export function getAddress() {
  return request({
    url: '/address/getUserAddress',
    method: 'get'
  })
}

/**
 * 修改地址
 * @param data
 */
export function editAddress(isNew, data) {
  let url = isNew ? '/address/addAddress' : '/address/editAddress'
  return request({
    url: url,
    method: 'post',
    data
  })
}
