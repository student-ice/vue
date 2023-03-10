<template>
  <div class="flex items-center justify-center">
    <span style="margin-right: 10px">{{ musicCurrentTime }}</span
    ><n-slider :max="musicDuration" :step="1" :min="0" :value="musicCurrentTime" /><span
      style="margin-left: 10px"
      >{{ musicDuration }}</span
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
