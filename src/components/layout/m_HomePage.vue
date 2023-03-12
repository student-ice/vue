<template>
  <div style="height: 100vh; width: 100vw">
    <Searchbar v-model="searchText"></Searchbar>
    <router-view></router-view>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";

import { Searchbar } from '@nutui/nutui';

const searchText = ref("搜索");

onMounted(() => {
});
</script>
