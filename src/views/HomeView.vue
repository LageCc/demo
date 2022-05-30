<template>
  <div class="home-main">
    <div class="home-main-header">
      <h1>首页</h1>
    </div>
    <div>
      <el-row :gutter="12">
        <el-col :span="8">
          <el-card shadow="hover">
            <span>
              <el-icon style="font-size: 50px"><user /></el-icon>
              用户ID:
              <h2>{{ userid }}</h2>
            </span>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card shadow="hover" id="main"></el-card>
        </el-col>
        <el-col :span="8">
          <el-card shadow="hover"> Hover </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import store from "@/store";

export default {
  data() {
    return {
      userid: localStorage.token,
    };
  },
  methods() {
  },
  created() {
    //获取传入的参数
  },
};
</script>
<style scoped>
</style>