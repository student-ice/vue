<template>
  <div class="common-layout">
    <el-container class="root-container">
      <!-- <el-aside height="100%" width="250px"><side-bar></side-bar></el-aside> -->
      <el-container>
        <el-header><header-view></header-view></el-header>
        <el-scrollbar>
          <el-main
            ><transitions> <router-view></router-view></transitions
          ></el-main>
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
