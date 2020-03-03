import request from '@/utils/request'

/**
 * 获取问题列表
 */
export function getQuestionList() {
  return request({
    url: '/index/getCurriculumInfo',
    method: 'get'
  })
}
