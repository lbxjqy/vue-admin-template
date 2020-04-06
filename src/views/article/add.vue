<!--
 * @Author: your name
 * @Date: 2020-04-05 20:32:41
 * @LastEditTime: 2020-04-05 23:53:35
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
      maxlength="10"
      show-word-limit
      value-key
    />
    <el-select
      v-model="Tagvalue"
      multiple
      filterable
      allow-create
      default-first-option
      placeholder="请选择文章标签"
      class="tag"
    >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
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
export default {
  data() {
    return {
      value: '',
      title: '',
      describe: '',
      Tagvalue: [],
      options: [
        {
          value: 'HTML',
          label: 'HTML'
        },
        {
          value: 'CSS',
          label: 'CSS'
        },
        {
          value: 'JavaScript',
          label: 'JavaScript'
        }
      ]
    }
  },
  methods: {
    submit() {
      var params = {
        title: this.title,
        describe: this.describe,
        Tagvalue: this.Tagvalue,
        value: this.value
      }
      console.log(params)
    }
  }
}
</script>

<style scoped>

</style>
