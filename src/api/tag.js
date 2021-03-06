/*
 * @Author: your name
 * @Date: 2020-04-10 15:11:21
 * @LastEditTime: 2020-04-16 18:37:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /api/Users/linboxuan/vscodeProjects/vue-admin-template/src/api/tag.js
 */
import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/api/admin/tag/list',
    method: 'get',
    params
  })
}

export function tagCreate(data) {
  return request({
    url: '/api/admin/tag/create',
    method: 'post',
    data
  })
}

export function tagUpdate(data) {
  return request({
    url: '/api/admin/tag/modify',
    method: 'post',
    data
  })
}

export function tagDelete(data) {
  return request({
    url: '/api/admin/tag/delete',
    method: 'post',
    data
  })
}

export function getTagNameList(params) {
  return request({
    url: '/api/admin/tag/nameList',
    method: 'get',
    params
  })
}
