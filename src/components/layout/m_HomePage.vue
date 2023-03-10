<template>
  <div class="flex flex-col">
    <NavBar title="标题"></NavBar>
    <Tabbar v-model="active">
      <TabbarItem icon="search">标签</TabbarItem>
      <TabbarItem icon="friends-o">标签</TabbarItem>
      <TabbarItem icon="setting-o">标签</TabbarItem>
    </Tabbar>
  </div>
</template>
<script setup>
import { NavBar } from "vant";
import { Tabbar, TabbarItem } from "vant";
</script>
