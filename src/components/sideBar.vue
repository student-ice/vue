<template>
  <el-row class="tac">
    <el-menu default-active="1" class="el-menu-vertical-demo">
      <el-menu-item index="1">
        <template #title>
            <el-icon><HomeFilled /></el-icon>
          <span>{{ menuList[0].name }}</span>
        </template>
      </el-menu-item>
      <el-menu-item index="2">
        <el-icon><Histogram /></el-icon>
        <span>{{ menuList[1].name }}</span>
      </el-menu-item>
      <el-menu-item index="3">
        <el-icon><List /></el-icon>
        <span>{{ menuList[2].name }}</span>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon><VideoCameraFilled /></el-icon>
        <span>{{ menuList[3].name }}</span>
      </el-menu-item>
      <el-menu-item index="5">
        <el-icon><Avatar /></el-icon>
        <span>{{ menuList[4].name }}</span>
      </el-menu-item>
      <el-menu-item index="6">
        <el-icon>

            <svg t="1677858715004" 
            class="icon" 
            viewBox="0 0 1024 1024" 
            version="1.1" xmlns="http://www.w3.org/2000/svg"
             p-id="3619" width="16" height="16"
             style="width: 1em; height: 1em;"
             ><path d="M669.781333 130.752c71.637333-11.093333 138.901333 11.477333 193.344 64.533333 55.317333 53.930667 81.834667 124.992 74.282667 199.530667-7.466667 73.642667-46.549333 146.368-112.32 210.474667-18.346667 17.898667-67.669333 66.218667-138.453333 135.637333-31.829333 31.232-65.706667 64.448-99.84 97.984L553.6 871.466667l-13.184 12.949333a40.554667 40.554667 0 0 1-56.832 0l-114.602667-112.64-24.213333-23.722667a677626.346667 677626.346667 0 0 0-145.856-142.762666C133.141333 541.184 94.08 468.48 86.613333 394.816c-7.552-74.538667 18.944-145.6 74.282667-199.530667 54.442667-53.056 121.706667-75.605333 193.344-64.533333 53.162667 8.213333 107.093333 34.688 157.781333 76.949333 50.709333-42.24 104.618667-68.736 157.781334-76.949333z" fill="#2c2c2c" p-id="3620"></path></svg>
            
        </el-icon>
        <span>{{ menuList[5].name }}</span>
      </el-menu-item>
    </el-menu>
  </el-row>
</template>
<script setup>
//    import { useRoute, useRouter } from 'vue-router';
import { reactive } from "vue";

//    const route = useRoute();
//    const router = useRouter();
const menuList = reactive([
  {
    name: "首页",
    path: "index",
  },
  {
    name: "排行榜",
    path: "rank",
  },
  {
    name: "歌单",
    path: "playlist",
  },
  {
    name: "MV",
    path: "mvlist",
  },
  {
    name: "歌手",
    path: "artist",
  },
  {
    name: "我喜欢",
    path: "my",
  },
]);
// // 当前选择菜单
// const menuActive = computed(() => route.path);

// // 切换导航跳转
// const selectMenu = (item) => {
//     router.push({
//             path: '/' + item
//     })
// };
</script>
<style lang="less">
.el-menu {
  border-right: 1 !important;
  height: 100vh;
}
</style>
