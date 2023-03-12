<template>
  <div style="margin-left: 10px; margin-right: 10px">
    <Swiper height="200" auto-play="3000">
      <SwiperItem v-for="item in state.images" :key="item">
        <el-image :src="item.pic" fit="contain"
      /></SwiperItem>
    </Swiper>
  </div>
</template>
<script setup>
import { onMounted, reactive } from "vue";
import api from "../../api/index";
import { Swiper, SwiperItem } from "@nutui/nutui";

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
<style>
.nut-swiper-item {
  line-height: 100px;
  width: 95%;
}
.nut-swiper-item img {
  width: 95%;
  height: 100%;
  border-radius: 10px;
}
</style>
