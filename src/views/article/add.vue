<!--
 * @Author: your name
 * @Date: 2020-04-05 20:32:41
 * @LastEditTime: 2020-04-15 16:09:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /api/Users/linboxuan/vscodeProjects/vue-admin-template/src/views/article/add.vue
 -->
<template>
  <div class="app-container">
    <el-input
      v-model="title"
      type="text"
      placeholder="请输入标题"
      maxlength="50"
      show-word-limit
      value-key
    />
    <el-select
      v-model="Tagvalue"
      multiple
      filterable
      placeholder="请选择文章标签"
      class="tag"
    >
      <el-option
        v-for="item in options"
        :key="item.name"
        :label="item.name"
        :value="item.name"
      />
    </el-select>
    <el-input
      v-model="describe"
      type="text"
      placeholder="请输入描述"
      maxlength="30"
      show-word-limit
    />
    <mavon-editor v-model="value" />
    <el-button type="primary" @click="submit">提交</el-button>
  </div>
</template>

<script>
import { articleCreate } from '@/api/article'
import { getTagNameList } from '@/api/tag'
import { Message } from 'element-ui'

export default {
  data() {
    return {
      value: '',
      title: '',
      describe: '',
      Tagvalue: [],
      options: []
    }
  },
  created() {
    this.getTagNameList()
  },
  methods: {
    getTagNameList() {
      getTagNameList().then(response => {
        this.options = response.data
      }).catch(err => {
        console.log(err)
      })
    },
    submit() {
      var params = {
        title: this.title,
        describe: this.describe,
        tag: this.Tagvalue,
        content: this.value
      }
      console.log(params)
      articleCreate(params).then(response => {
        Message({
          message: response.msg || 'Error',
          type: 'success',
          duration: 5 * 1000
        })
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>

</style>
