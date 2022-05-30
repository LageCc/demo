<template>
  <div class="box">
    <div class="main">
      <div class="bg-img"></div>
      <div class="login">
        <el-tabs class="demo-tabs" stretch="true" model-value="login">
          <el-tab-pane label="Sign in" name="login"
            ><el-form>
              <el-input maxlength="15" v-model="userId" placeholder="username" />
              <br />
              <br />
              <el-input
                @keyup.enter="userData()"
                type="password"
                v-model="userPwd"
                placeholder="password"
              />
              <br />
              <br />
              <div class="login-button">
                <el-button @click="userAdd">Sign in</el-button>
              </div>
            </el-form></el-tab-pane
          >
          <el-tab-pane label="Create an account" name="enroll"
            ><form action="" center>
              <el-input v-model="username" placeholder="username" />
              <br />
              <br />
              <el-input
                type="password"
                v-model="password"
                placeholder="password"
              />
              <span> <br /></span>
              <br />
              <div class="login-button">
                <el-button @click="addUser">Enroll</el-button>
              </div>
            </form></el-tab-pane
          >
        </el-tabs>
        <div class="buttom">
          <el-link
            href="http://www.beian.gov.cn/portal/index.do"
            target="_blank"
            >豫ICP备2021002926号</el-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      dialogVisible: false,
      userId: "",
      userPwd: "",
      username: "",
      password: "",
    };
  },
  methods: {
    userAdd() {
      var username = this.userId;
      var userpwd = this.userPwd;
      console.log(username, userpwd)
      if (username != "" && userpwd != "") {
        axios
          .post("api/user/selectUser", {
            username,
            userpwd
          })
          .then((res) => {
            console.log(res);
            var loginMain = {};
            loginMain = res.data[0];
            if (loginMain.user_name === username && loginMain.user_pwd === userpwd) {
              this.$message({
                showClose: true,
                message: "登录成功",
                type: "success",
              });
              this.$store.commit("set_token", loginMain.user_name);
              this.$router.push({
                path: "/home",
              });
            } else {
              this.$message({
                showClose: true,
                message: "密码或账号错误，请重新输入",
                type: "error",
              });
            }
          })
          .catch((err) => {
            console.log(err);
            this.$message({
              showClose: true,
              message: "服务端请求错误,请稍后重试",
              type: "error",
            });
          });
      } else {
        this.$message({
          showClose: true,
          message: "不能为空哦",
          type: "error",
        });
      }
    },
    addUser() {
      let user_name = this.username;
      let user_pwd = this.password;
      if (user_name != "" && user_pwd != "") {
        axios
          .post("api/user/enrollUser", {
            user_name,
            user_pwd,
          })
          .then((res) => {
            let user = res;
            if (
              user.data.errno != 1064 &&
              user.status === 200 &&
              user.data.errno != 1054
            ) {
              this.$message({
                showClose: true,
                message: "注册成功",
                type: "success",
              });
              /*             (this.userName = null), (this.password = null); */
            } else {
              console.log(user);
              this.$message({
                showClose: true,
                message: "注册出错,请稍后重试",
                type: "error",
              });
            }
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

  },
};
</script>


<style lang="scss">
body {
  margin: 0;
  padding: 0;
}
.box {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #a8c0ff; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    rgb(168, 192, 255),
    rgb(63, 43, 150)
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    rgb(168, 192, 255),
    rgb(63, 43, 150)
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  .main > div {
    flex: 1;
  }
  .main {
    display: flex;
    height: 70%;
    width: 70%;
    background: #ffffff;
    border-radius: 35px;
    box-shadow: 5px 7px 8px rgb(146, 146, 146);
    .bg-img {
      height: 100%;
      width: 100%;
      border-bottom-left-radius: 35px;
      background-image: url(https://www.toopic.cn/public/uploads/small/1642751731602164275173123.jpg);
    }
    .login {
      padding: 12%;
      el-tab-pane:hover {
        font-size: 22px;
      }
      .buttom {
        padding-top: 30%;
      }
      .login-button {
        width: 100%;
        text-align: right;
        button {
          width: 50%;
          height: 50px;
          border-radius: 20px;
          border: 0;
        }
      }
      input {
        background: #e6e6e6;
      }
    }
  }
}
</style>