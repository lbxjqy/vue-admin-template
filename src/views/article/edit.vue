<!--
 * @Author: your name
 * @Date: 2020-04-16 17:43:54
 * @LastEditTime: 2020-04-16 18:17:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /api/Users/linboxuan/vscodeProjects/vue-admin-template/src/views/article/edit.vue
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
      v-model="tagValue"
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
    <mavon-editor v-model="content" />
    <el-button type="primary" @click="submit">提交</el-button>
  </div>
</template>

<script>
import { getModifyContent, articleUpdate } from '@/api/article'
import { getTagNameList } from '@/api/tag'
import { Message } from 'element-ui'

export default {
  data() {
    return {
      content: '',
      title: '',
      describe: '',
      tagValue: [],
      options: [],
      articleId: ''
    }
  },
  created() {
    const params = this.$route.params
    this.articleId = params.id
    this.getTagNameList()
    this.getArticle(params.id)
  },
  methods: {
    // 标签下拉框
    getTagNameList() {
      getTagNameList().then(response => {
        this.options = response.data
      }).catch(err => {
        console.log(err)
      })
    },
    // 根据id获取文章内容
    getArticle(id) {
      getModifyContent(id).then(response => {
        this.content = response.data.content
        this.title = response.data.title
        this.describe = response.data.describe
        this.tagValue = response.data.tag
      }).catch(err => {
        console.log(err)
      })
    },
    // 提交修改
    // 其实这里做一个旧文章的逻辑删除，新文章创建 比较好.作用是来方便回滚，查看历史等功能
    submit() {
      const art = {
        articleId: this.articleId,
        title: this.title,
        content: this.content,
        describe: this.describe,
        tag: this.tagValue
      }
      articleUpdate(art).then(response => {
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
