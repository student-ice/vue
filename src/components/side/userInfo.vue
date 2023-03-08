<template>
  <div class="userinfo">
    <el-avatar :size="50" :icon="UserFilled" />
    <div class="userid">未登录</div>
  </div>
</template>
<script setup>
import { UserFilled } from "@element-plus/icons-vue";
</script>
<style lang="scss">
.userinfo {
  margin-top: 50px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  .userid {
    margin-top: 10px;
    font-size: 20px;
  }
}
</style>
