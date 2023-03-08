<template>
  <div class="common-layout">
    <el-container class="root-container">
      <el-aside height="100vh" width="250px"><side-bar></side-bar></el-aside>
      <el-container>
        <el-header><header-view></header-view></el-header>
        <el-scrollbar>
          <el-main> <router-view></router-view></el-main>
        </el-scrollbar>
        <el-footer><footer-view></footer-view></el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import SideBar from "../side/sideBar";
import headView from "../header/headerView.vue";
import footerView from "../footer/footerView.vue";

export default {
  name: "HomePage",
  created() {
    document.title = "ice music";
  },
  components() {
    SideBar, headView, footerView;
  },
  mounted() {},
};
</script>
