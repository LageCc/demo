<template>
  <el-container>
    <el-aside style="height: 93%; width: 80px; margin: 2% 2% 4% 4%">
      <el-menu class="nav" style="border-right-width: 0">
        <el-menu-item>
          <router-link to="/home">
            <el-icon><Home-filled /></el-icon
          ></router-link>
        </el-menu-item>
        <el-menu-item>
          <router-link to="/about"
            ><el-icon plit-button type="primary" 
              ><Menu /></el-icon
          ></router-link>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>Action 1</el-dropdown-item>
              <el-dropdown-item>Action 2</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-menu-item>
        <el-menu-item>
          <router-link to="/setup"
            ><el-icon><Setting /></el-icon
          ></router-link>
        </el-menu-item>
        <el-menu-item>
          <router-link to="/help"
            ><el-icon><Service /></el-icon
          ></router-link>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container class="main-data" style="height: 93%; margin: 2% 4% 4% 0%">
      <el-main class="main-data-div">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss">
// router下划线消除
a {
  text-decoration: none;
}
.router-link-active {
  text-decoration: none;
}

// hover 改element默认样式
.nav .el-menu-item:hover {
  background: none !important ;
}
.nav .el-icon:hover {
  padding: 7px 10px;
  background: #9ba3ee;
  border-radius: 12px;
}
.nav .el-icon:visited {
  color: #eff1fe!important;
}
.nav .el-icon:active {
      font-size: 32px;
      color: #fafefd!important;
      margin: 0;
    }
.nav .el-menu-item.is-active i {
  color: #fafefd!important;
}

.nav {
  justify-content: center;
}
.el-container {
  height: 100%;
}
.el-aside {
  border-radius: 20px;
  width: 60px;
  padding: 20vh 0;
  background-color: #8EC5FC;
background-image: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);


  ul {
    height: 100%;
    background: #5e81ee;
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
  }
  li {
    padding: 0px !important ;
    justify-content: center;
    .el-icon {
      font-size: 32px;
      color: #fafefd;
      margin: 0;
    }
  }
}

.main-data {
  /* border-top: #5e61ee solid 2vh;
  border-right: #5e61ee solid 2vh;
  border-bottom: #5e61ee solid 2vh;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 35px; */
  .main-data-div {
    background: #eff1fe;
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
  }
}
/* .example-showcase .el-dropdown + .el-dropdown {
  margin-left: 15px;
}
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
} */
</style>

