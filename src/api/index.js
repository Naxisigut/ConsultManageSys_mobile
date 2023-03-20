import request from '@/utils/request';

/* 获取评测对象 */
export function tool_get(data = {}) {
  return request({
    url: '/pmdapi/ocai/getOcaiQuestionDetailById',
    method: 'post',
    data
  })
}

/* 提交评测结果 */
export function result_post(data = {}) {
  return request({
    url: '/pmdapi/ocai/submitOcaiResult',
    method: 'post',
    data
  })
}