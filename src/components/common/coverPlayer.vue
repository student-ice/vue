<template>
  <div class="cover-play-image">
    <el-image
      :src="picUrl"
      :fit="fill"
      :alt="name"
      class="w-full bg-gray-50 object-cover"
    />
  </div>
</template>

<script>
import iconpark from "./iconPark.vue";
export default {
  props: {
    picUrl: String,
    playCount: Number,
    name: String,
    showPlayCount: Boolean,
    video: Boolean,
  },
  components() {
    iconpark;
  },
};
</script>
