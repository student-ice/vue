<template>
  <div class="cover-play-image">
    <n-image
      :src="picUrl"
      :object-fit="fill"
      :alt="name"
      class="w-full bg-gray-50 object-cover"
    />
  </div>
</template>

<script>
import { NImage } from "naive-ui";
export default {
  props: {
    picUrl: String,
    playCount: Number,
    name: String,
    fill: String,
    showPlayCount: Boolean,
    video: Boolean,
  },
  component: {
    NImage,
  },
};
</script>
