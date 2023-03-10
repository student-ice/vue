<template>
  <div style="height: 100%">
    <div class="flex">
      <div class="flex-auto">歌曲</div>
      <div class="w-25">歌手</div>
      <div class="w-25">专辑</div>
      <div class="w-10">时长</div>
    </div>
    <div v-if="playListMusic.length !== 0">
      <div v-for="song in playListMusic" :key="song.id" class="flex">
        <div class="flex-auto">{{ song.name }}</div>
        <div class="w-25">{{ song.ar[0].name }}</div>
        <div class="w-25">{{ song.al.name }}</div>
        <div class="w-10">{{ time(song.dt) }}</div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { usePlayListStore } from "../store/playlist";
import { storeToRefs } from "pinia";

const playListStore = usePlayListStore();
const { playListMusic } = storeToRefs(playListStore);
function time(dt) {
  let f = Math.floor(dt / 60) % 60;
  let m = dt % 60;
  return "0" + f + ":" + m.length > 1 ? m : "0" + m;
}
</script>
