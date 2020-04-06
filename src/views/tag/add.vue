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
