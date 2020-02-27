import request from '@/utils/request'

/**
 * 创建订单
 * @param data
 */
export function createOrder(data) {
  return request({
    url: '/order/createOrder',
    method: 'post',
    data
  })
}

/**
 * 获取订单列表
 * @param type
 * @param page
 * @param pageSize
 */
export function getOrderList(type, page, pageSize) {
  return request({
    url: '/order/getList',
    method: 'get',
    params: {
      orderType: type,
      page: page,
      pageSize: pageSize
    }
  })
}

/**
 * 获取软件订单详情
 * @param id
 */
export function getSoftDetail(id) {
  return request({
    url: '/order/softDetail',
    method: 'get',
    params: {
      id: id
    }
  })
}

/**
 * 获取盒子订单详情
 * @param id
 */
export function getBoxDetail(id) {
  return request({
    url: '/order/boxDetail',
    method: 'get',
    params: {
      id: id
    }
  })
}

/**
 * 确认收货
 * @param id
 */
export function confirmOrder(id) {
  return request({
    url: '/order/confirmReceipt',
    method: 'get',
    params: {
      id: id
    }
  })
}

/**
 * 获取盒子设置
 */
export function getDiagSetting() {
  return request({
    url: '/Appsetting/diagsetting',
    method: 'get'
  })
}

/**
 * 订单申诉
 * @param id
 */
export function orderComplaints(data) {
  return request({
    url: '/order/addComplaints',
    method: 'post',
    data
  })
}
