<template>
  <div class="common-layout">
    <el-container class="root-container">
      <el-aside width="115px" height="100vh"><side-bar></side-bar></el-aside>
      <el-container>
        <el-header><header-view></header-view></el-header>
        <el-main> <router-view></router-view></el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import api from "../../api/index";
import SideBar from "./sideBar";
import headView from "../header/headerView.vue";

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  components() {
    SideBar, headView;
  },
  mounted() {
    api.getBanner().then((res) => {
      console.log(res);
    });
  },
};
</script>
<style>
.common-layout {
  width: 100%;
  height: 100%;
}
.tac {
  width: 115px;
}
.root-container {
  height: 100vh;
}
.el-header {
  background: #845ec2;
  text-align: center;
  display: flex;
  align-items: center;
}
.el-header.el-input {
  text-align: center;
}
.el-main {
  height: 100%;
  background: #d65db1;
}
.el-footer {
  background: #ff9671;
}
</style>
