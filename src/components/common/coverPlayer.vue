<template>
  <div class="cover-play-image">
    <el-image :src="picUrl" :alt="name" class="w-full bg-gray-50 object-cover" />
    <div class="mask flex justify-center items-center">
      <icon-park
        :icon="PlayOne"
        class="text-white play-icon opacity-0 transition-opacity hover:text-teal-400"
        :size="50"
      >
      </icon-park>
    </div>
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
