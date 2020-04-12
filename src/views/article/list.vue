<!--
 * @Author: your name
 * @Date: 2020-04-05 20:31:41
 * @LastEditTime: 2020-04-13 03:35:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /api/Users/linboxuan/vscodeProjects/vue-admin-template/src/views/article/list.vue
 -->
<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="ID" width="95">
        <template slot-scope="scope">
          {{ scope.$index }}
        </template>
      </el-table-column>
      <el-table-column label="标题">
        <template slot-scope="scope">
          {{ scope.row.title }}
        </template>
      </el-table-column>
      <el-table-column label="描述" width="220" align="center">
        <template slot-scope="scope">
          {{ scope.row.describe }}
        </template>
      </el-table-column>
      <el-table-column label="标签" width="220" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.tag }}</span>
        </template>
      </el-table-column>
      <el-table-column label="更新时间" width="220" align="center">
        <template slot-scope="scope">
          {{ scope.row.updateAt|formatDate(this) }}
        </template>
      </el-table-column>
      <el-table-column class-name="status-col" label="Status" width="310" align="center">
        <template>
          <el-button type="primary" @click="handleLook">查看</el-button>
          <el-button type="primary" @click="handleModify">修改</el-button>
          <el-button type="primary" @click="handleDelete">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="1000"
      :page-size="10"
    />
  </div>
</template>

<script>
import { getList } from '@/api/article'
export default {
  filters: {
    formatDate(value, vue) {
      // value需要过滤的数据
      var date = new Date(value)
      var year = date.getFullYear()
      var month = date.getMonth() + 1
      var day = date.getDate()
      var hours = date.getHours()
      var minutes = date.getMinutes()
      var seconds = date.getSeconds()
      return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ' : ' + seconds
    }
  },
  data() {
    return {
      list: null,
      listLoading: true
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getList().then(response => {
        this.list = response.data
        this.listLoading = false
      })
    },
    handleLook() {
      console.log(1)
    },
    handleModify() {
      console.log(1)
    },
    handleDelete() {
      console.log(1)
    }
  }
}
</script>
