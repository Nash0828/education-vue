import request from '@/utils/request'

/**
 * 获取收益排行榜列表
 */
export function getIncomeRankingList() {
  return request({
    url: '/statistics/profitRanking',
    method: 'get',
    params: {
      page: 1,
      size: 20
    }
  })
}

/**
 * 获取邀请排行榜列表
 */
export function getInviteRankingList() {
  return request({
    url: '/statistics/invitationRanking',
    method: 'get',
    params: {
      page: 1,
      size: 20
    }
  })
}
