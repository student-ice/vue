<template>
  <div style="height: 100%">
    <div class="flex text-gray-400 text-xs">
      <div class="flex-auto">歌曲</div>
      <div class="w-25">歌手</div>
      <div class="w-35">专辑</div>
      <div class="w-10">时长</div>
    </div>
    <div v-if="playListMusic.length !== 0">
      <div
        v-for="song in playListMusic"
        @click="playMusic(song)"
        :key="song.id"
        class="songlist-items flex w-full"
      >
        <div class="flex-auto cursor-pointer songlist-item">{{ song.name }}</div>
        <div class="w-25 cursor-pointer songlist-item">{{ song.ar[0].name }}</div>
        <div class="w-35 cursor-pointer songlist-item">{{ song.al.name }}</div>
        <div class="w-10 cursor-pointer songlist-item">
          {{
            song.dt / 1000 / 60 < 10
              ? "0" +
                Math.floor(song.dt / 1000 / 60) +
                (song.dt % 60 < 10
                  ? ":0" + Math.floor(song.dt % 60)
                  : ":" + Math.floor(song.dt % 60))
              : Math.floor(song.dt / 1000 / 60) +
                (song.dt % 60 < 10
                  ? ":0" + Math.floor(song.dt % 60)
                  : ":" + Math.floor(song.dt % 60))
          }}
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { usePlayListStore } from "../store/playlist";
import { useMusicStateStore } from "@/store";
import { storeToRefs } from "pinia";
import api from "../api/index";

const playListStore = usePlayListStore();
const musicStore = useMusicStateStore();
const { playListMusic } = storeToRefs(playListStore);
const {
  currentSongUrl,
  autoplay,
  playState,
  playMusicName,
  picUrl,
  isVip,
  musicArtist,
} = storeToRefs(musicStore);
// function time(dt) {
//   var t;
//   var f = Math.floor(dt / 1000 / 60);
//   console.log(f);
//   var m = dt % 60;
//   console.log(m);
//   if (f < 10) {
//     t += "0";
//   }
//   t += f + ":";
//   if (m < 10) {
//     t += "0";
//   }
//   t += m.toFixed(2);
//   return t;
// }
function playMusic(song) {
  console.log(song);
  api.getMusicUrl(song.id).then((res) => {
    //console.log(res.data.data[0]);
    currentSongUrl.value = res.data.data[0].url;
    autoplay.value = true;
    playState.value = true;
  });
  api.getMusicDetail(song.id).then((res) => {
    console.log(res.data.songs[0]);
    playMusicName.value = res.data.songs[0].name;
    picUrl.value = res.data.songs[0].al.picUrl;
    if (res.data.songs[0].fee === "1") {
      isVip.value = true;
    }
    musicArtist.value = res.data.songs[0].ar[0].name;
  });
}
</script>
