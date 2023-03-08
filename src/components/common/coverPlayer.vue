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
export default {
  props: {
    picUrl: String,
    playCount: Number,
    name: String,
    fill: String,
    showPlayCount: Boolean,
    video: Boolean,
  },
};
</script>
