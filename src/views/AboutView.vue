<template>
  <div class="about">
    <el-container>
      <el-header>
        <span> </span>
        <el-button type="text" @click="dialogVisible = true"
          >注册账号</el-button
        >
        <el-dialog
          v-model="dialogVisible"
          title="注册"
          width="30%"
          :before-close="handleClose"
        >
          <form action="" center>
            <el-input v-model="userName" placeholder="请输入姓名"></el-input>
            <br />
            <span> <br /></span>
            <el-input
              type="password"
              v-model="pwd"
              placeholder="请输入密码"
            ></el-input>
            <br />
            <span> <br /></span>
            <span class="dialog-footer">
              <el-button type="primary" @click="addUser">提交</el-button>
            </span>
          </form>
        </el-dialog>
      </el-header>
      <el-main>
        <el-table :data="filterTableData" max-height="450px">
          <el-table-column prop="user_name" label="Name" width="140">
          </el-table-column>
          <el-table-column prop="user_age" label="Age" width="120">
          </el-table-column>
          <el-table-column prop="user_id" label="ID"> </el-table-column>
          <el-table-column prop="user_emil" label="Emil"> </el-table-column>
          <el-table-column prop="user_phone" label="Phone"> </el-table-column>
          <el-table-column align="right">
            <template #header>
              <el-input
                v-model="keywords"
                placeholder="请输入姓名"
                style="width: 200px"
                @keyup.enter="selectUser"
              ></el-input>
            </template>
            <template #default="scope">
              <el-button
                size="small"
                @click="handleEdit(scope.$index, scope.row)"
                >Edit</el-button
              >
              <el-button
                size="small"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)"
                >Delete</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import axios from "axios";
import { computed, ref } from 'vue'


const keywords = ref('')
const filterTableData = computed(() =>
  filterTableData.filter(
    (data) =>
      !keywords.value ||
      data.name.toLowerCase().includes(keywords.value.toLowerCase())
  )
)
const handleEdit = (index, row) => {
  console.log(index, row)
} 
const handleDelete = (index, row) => {
  axios.post(/api/user/deletesUser, {
    index
  })
}
export default {
  data() {
    return {
      dialogVisible: false,
      userName: "",
      pwd: "",
      keywords: "",
      filterTableData: [],
    };
  },
  mounted() {
    this.selectUser();
  },
  methods: {
    handleClose(done) {
      done();
    },
    addUser() {
      //
      let name = this.userName;
      let pwd = this.pwd;
      if (name != "" && pwd != "") {
        axios
          .post("api/user/addUserName", {
            name,
            pwd,
          })
          .then((res) => {
            this.$message({
              showClose: true,
              message: "添加成功",
              type: "success",
            });
            (this.userName = null), (this.pwd = null);
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        this.$message({
          showClose: true,
          message: "不能为空哦",
          type: "error",
        });
      }
    },
    // 查询
    selectUser() {
      var name = this.keywords;
      console.log(name);
        axios
          .post("/api/user/selectName", {
            name
          })
          .then((res) => {
            // 返回的数据
            var filterTableData = {};
            filterTableData = res.data;
            this.filterTableData = filterTableData;
            (this.keywords = "");
          })
          .catch((err) => {
            console.log(err);
          });
    },
  },
};
</script>
