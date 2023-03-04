<template>
  <div class="search">
    <el-input
      v-model="input1"
      class="w-50 m-2"
      placeholder="搜索歌曲"
      :prefix-icon="Search"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Search } from "@element-plus/icons-vue";
const input1 = ref("");
</script>

<style>
.search {
  height: 30px;
  position: relative;
  display: flex;
}
</style>
