import request from '@/utils/request'

/**
 * 获取我的钱包信息
 */
export function getMyWallet() {
  return request({
    url: '/profit/getMyWallet',
    method: 'get'
  })
}

/**
 * 获取月充值数据
 */
export function getRechargesetting() {
  return request({
    url: '/Recharge/getRechargesetting',
    method: 'get'
  })
}

/**
 * 创建充值订单
 */
export function createRechargeOrder(value) {
  return request({
    url: '/recharge/submit',
    method: 'post',
    data: {
      money: value
    }
  })
}

/**
 * 获取收益流水
 * @param type
 * @param page
 * @param pageSize
 */
export function getEarningList(type, page, pageSize) {
  return request({
    url: '/profit/getMoneyLog',
    method: 'get',
    params: {
      is_freeze: type,
      page: page,
      limit: pageSize
    }
  })
}

/**
 * 获取交易记录
 * @param page
 * @param pageSize
 */
export function getBalanceList(page, pageSize) {
  return request({
    url: '/profit/getMyTransactionLog',
    method: 'get',
    params: {
      page: page,
      limit: pageSize
    }
  })
}
