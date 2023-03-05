<template>
  <div class="block text-center">
    <el-carousel v-if="state.images" type="card" indicator-position="outside">
      <el-carousel-item
        v-for="item in state.images"
        :key="item"
        width="100%"
        height="100%"
      >
        <img
          :src="item.imageUrl ? item.imageUrl : ''"
          style="height: 100%; width: 100%"
        />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import { reactive, onMounted } from "vue";
import api from "../api/index";

export default {
  setup() {
    const state = reactive({
      images: [],
    });
    onMounted(() => {
      api.getBanner(0).then((res) => {
        //console.log(res.data.banners);
        state.images = res.data.banners;
      });
    });
    return {
      state,
    };
  },
};
</script>

<style scoped>
.demonstration {
  color: var(--el-text-color-secondary);
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
