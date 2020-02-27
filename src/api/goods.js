import request from '@/utils/request'

/**
 * 获取盒子详情
 */
export function getHardwareDetail() {
  return request({
    url: '/product/hardwareDetail',
    method: 'get',
    params: {
      // productId: productId,
      hardwareType: 'goloBox4'
    }
  })
}

/**
 * 获取会员商品详情
 * @param vipType
 */
export function getVipDetail(vipType = 'year') {
  return request({
    url: '/product/vipDetail',
    method: 'get',
    params: {
      // productId: productId,
      vipType: vipType
    }
  })
}

/**
 * 获取礼包商品详情
 */
export function getBoxGiftPackage() {
  return request({
    url: '/product/comboxDetail',
    method: 'get',
    params: {
      // productId: productId,
      comboxType: 'boxGiftPackage'
    }
  })
}

/**
 * 获取汽修宝典详情
 * @param productId
 */
export function getQxbdDetail(productId) {
  return request({
    url: '/product/detail',
    method: 'get',
    params: {
      productId: productId
    }
  })
}

/**
 * 获取硬件商品详情
 */
export function getProductDetail(productId) {
  return request({
    url: '/product/detail',
    method: 'get',
    params: {
      productId: productId
    }
  })
}
