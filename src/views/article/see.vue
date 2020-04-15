<!--
 * @Author: your name
 * @Date: 2020-04-15 16:13:36
 * @LastEditTime: 2020-04-16 01:03:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /api/Users/linboxuan/vscodeProjects/vue-admin-template/src/views/article/see.vue
 -->
<template>
  <div class="app-container">
    <h2> {{ title }}</h2>
    <mavon-editor v-model="content" :subfield="false" :box-shadow="false" default-open="preview" :toolbars-flag="false" />
  </div>
</template>

<script>
import { articleGetContent } from '@/api/article'

export default {
  data() {
    return {
      content: '',
      title: ''
    }
  },
  created() {
    const params = this.$route.params
    this.getArticle(params.id)
  },
  methods: {
    getArticle(id) {
      console.log(id)
      articleGetContent(id).then(response => {
        this.content = response.data.content
        this.title = response.data.title
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>

</style>
