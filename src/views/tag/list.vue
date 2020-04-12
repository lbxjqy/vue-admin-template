<!--
 * @Author: your name
 * @Date: 2020-04-07 01:27:22
 * @LastEditTime: 2020-04-13 02:54:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /api/Users/linboxuan/vscodeProjects/vue-admin-template/src/views/tag/list.vue
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
          {{ scope.row.name }}
        </template>
      </el-table-column>
      <el-table-column label="描述" width="210" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.describe }}</span>
        </template>
      </el-table-column>
      <el-table-column class-name="status-col" label="编辑" width="310" align="center">
        <template slot-scope="scope">
          <el-button type="primary" @click="handleEdit(scope)">修改</el-button>
          <el-button type="primary" @click="handleDelete(scope)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="1000"
      :page-size="10"
    />
    <el-dialog title="修改" :visible.sync="dialogVisible">
      <el-form :model="updateTemp">
        <el-form-item label="标题">
          <el-input
            v-model="updateTemp.name"
            placeholder="请输入标题"
            maxlength="10"
            show-word-limit
          />
        </el-form-item>
        <el-form-item label="描述">
          <el-input
            v-model="updateTemp.describe"
            placeholder="请输入描述"
            maxlength="30"
            show-word-limit
          />
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="update">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { getList, tagUpdate, tagDelete } from '@/api/tag'
import { Message } from 'element-ui'
export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: null,
      listLoading: true,
      updateTemp: {},
      dialogVisible: false
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getList().then(response => {
        console.log(response.data)
        this.list = response.data
        this.listLoading = false
      })
    },
    handleEdit(scope) {
      this.updateTemp = {
        _id: scope.row._id,
        name: scope.row.name,
        describe: scope.row.describe
      }
      this.dialogVisible = true
    },
    update() {
      tagUpdate(this.updateTemp).then(response => {
        this.dialogVisible = false
        getList().then(response => {
          this.list = response.data
        })
      }).catch(err => {
        console.log(err)
        this.dialogVisible = false
      })
    },
    handleDelete(scope) {
      tagDelete(scope.row).then(response => {
        getList().then(response => {
          this.list = response.data
        })
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
