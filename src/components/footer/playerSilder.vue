<template>
  <div class="flex items-center justify-center">
    <span style="margin-right: 10px">{{
      musicCurrentTime / 1000 / 60 < 10
        ? "0" +
          Math.floor(musicCurrentTime / 1000 / 60) +
          (musicCurrentTime % 60 < 10
            ? ":0" + Math.floor(musicCurrentTime % 60)
            : ":" + Math.floor(musicCurrentTime % 60))
        : Math.floor(musicCurrentTime / 1000 / 60) +
          (musicCurrentTime % 60 < 10
            ? ":0" + Math.floor(musicCurrentTime % 60)
            : ":" + Math.floor(musicCurrentTime % 60))
    }}</span
    ><n-slider :max="musicDuration" :step="1" :min="0" :value="musicCurrentTime" /><span
      style="margin-left: 10px"
      >{{
        musicDuration / 60 < 10
          ? "0" +
            Math.floor(musicDuration / 60) +
            (musicDuration % 60 < 10
              ? ":0" + Math.floor(musicDuration % 60)
              : ":" + Math.floor(musicDuration % 60))
          : Math.floor(musicDuration / 60) +
            (musicDuration % 60 < 10
              ? ":0" + Math.floor(musicDuration % 60)
              : ":" + Math.floor(musicDuration % 60))
      }}</span
    >
  </div>
</template>

<script setup>
import { useMusicStateStore } from "@/store";
import { storeToRefs } from "pinia";
import { NSlider } from "naive-ui";

const musicState = useMusicStateStore();
const { musicDuration, musicCurrentTime } = storeToRefs(musicState);
</script>
