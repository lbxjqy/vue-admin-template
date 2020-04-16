/*
 * @Author: your name
 * @Date: 2020-04-10 15:11:26
 * @LastEditTime: 2020-04-16 18:38:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /api/Users/linboxuan/vscodeProjects/vue-admin-template/src/api/article.js
 */
import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/api/admin/article/list',
    method: 'get',
    params
  })
}

export function articleCreate(data) {
  return request({
    url: '/api/admin/article/create',
    method: 'post',
    data
  })
}

export function articleUpdate(data) {
  return request({
    url: '/api/admin/article/modify',
    method: 'post',
    data
  })
}

export function articleDelete(data) {
  return request({
    url: '/api/admin/article/delete',
    method: 'post',
    data
  })
}

export function articleGetContent(id) {
  return request({
    url: '/api/admin/article/getContent',
    method: 'get',
    params: { id }
  })
}

export function getModifyContent(id) {
  return request({
    url: '/api/admin/article/getModifyContent',
    method: 'get',
    params: { id }
  })
}

