<template>
  <div class="flex justify-end items-center gap-x-2.5">
    <span class="text-xs"> {{}}  {{}} </span>
    <icon-park
      :icon="TextMessage"
      :size="25"
      :stroke-width="3"
      class="hover-text"
      title="歌词"
    ></icon-park>

    <div class="flex items-center hover-text playaction-list">
      <icon-park
        :icon="MusicList"
        :size="25"
        :stroke-width="3"
        class="hover-text"
        title="播放列表"
      ></icon-park>

      <span class="text-xs">{{ playListCount }}</span>
    </div>
  </div>
</template>
<script setup>
import { MusicList, TextMessage } from "@icon-park/vue-next";
import iconPark from "../common/iconPark.vue";
</script>
