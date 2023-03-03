<template>
    <div class="common-layout">
      <el-container>
        <el-aside width="150px" height="100vh"><side-bar></side-bar></el-aside>
        <el-container>
          <el-header>Header</el-header>
          <el-main>Main</el-main>
        </el-container>
      </el-container>
    </div>
</template>

<script >
import api from "../api/index";
import SideBar from "../components/sideBar"

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  components(){
    SideBar
  },
  mounted() {
    api.getBanner().then((res) => {
      console.log(res);
    });
  },
};
</script>
<style>
.common-layout{
  width: 100%;
  height: 100vh;
}
</style>