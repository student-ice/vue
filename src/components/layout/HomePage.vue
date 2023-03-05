<template>
  <div class="common-layout">
    <el-container class="root-container">
      <el-aside width="200px" height="100vh"><side-bar></side-bar></el-aside>
      <el-container>
        <el-header><header-view></header-view></el-header>
        <el-scrollbar>
          <el-main> <router-view></router-view></el-main>
        </el-scrollbar>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import SideBar from "./sideBar";
import headView from "../header/headerView.vue";

export default {
  name: "HomePage",
  created() {
    document.title = "ice music";
  },
  components() {
    SideBar, headView;
  },
  mounted() {},
};
</script>
