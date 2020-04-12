/*
 * @Author: your name
 * @Date: 2020-04-10 15:11:26
 * @LastEditTime: 2020-04-13 03:21:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /api/Users/linboxuan/vscodeProjects/vue-admin-template/src/api/article.js
 */
import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/api/article/list',
    method: 'get',
    params
  })
}

export function articleCreate(data) {
  return request({
    url: '/api/article/create',
    method: 'post',
    data
  })
}

export function articleUpdate(data) {
  return request({
    url: '/api/article/modify',
    method: 'post',
    data
  })
}

export function articleDelete(data) {
  return request({
    url: '/api/article/delete',
    method: 'post',
    data
  })
}
