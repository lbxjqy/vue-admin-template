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
    <el-input
      v-model="describe"
      type="text"
      placeholder="请输入描述"
      maxlength="30"
      show-word-limit
    />
    <el-button type="primary" @click="submit">提交</el-button>
  </div>
</template>

<script>
import { tagCreate } from '@/api/tag'

export default {
  data() {
    return {
      title: '',
      describe: '',
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
        name: this.title,
        describe: this.describe
      }
      tagCreate(params).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>

</style>
