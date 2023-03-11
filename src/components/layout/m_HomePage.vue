<template>
  <div style="height: 100vh; width: 100vw">
    <div class="flex items-center ml-5 mr-5">
      <Icon name="apps-o" size="25"></Icon>
      <Search v-model="searchText" class="flex-auto"></Search>
    </div>
    <div class="flex flex-col flex-auto">
      <el-carousel
        v-if="state.images"
        arrow="never"
        height="80%"
        class="phone_el-carousel"
      >
        <el-carousel-item
          v-for="item in state.images"
          :key="item"
          width="100%"
          height="100%"
        >
          <el-image
            :src="item.pic ? item.pic : ''"
            style="height: 100%; width: 100%"
            fit="fill"
          />
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
  <Tabbar v-model="active">
    <TabbarItem icon="home-o">首页</TabbarItem>
    <TabbarItem icon="friends-o">播客</TabbarItem>
    <TabbarItem icon="setting-o">我的</TabbarItem>
  </Tabbar>
</template>
<script setup>
import { Tabbar, TabbarItem, Search, Icon } from "vant";
import { ref, onMounted, reactive } from "vue";
import api from "../../api/index";

const active = ref(0);
const searchText = ref("搜索");
const state = reactive({
  images: [],
});
onMounted(() => {
  api.getBanner(1).then((res) => {
    console.log(res.data.banners);
    state.images = res.data.banners;
    console.log(state.images);
  });
});
</script>
