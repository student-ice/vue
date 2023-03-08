<template>
  <div class="flex items-center justify-center gap-x-3">
    <!-- 播放模式按钮 -->
    <icon-park
      :icon="PlayOnce"
      size="25"
      :stroke-width="3"
      class="hover-text"
    ></icon-park>
    <!-- 上一首按钮 -->
    <icon-park :icon="GoStart" :size="35" theme="filled" class="hover-text"></icon-park>
    <!-- 播放按钮 -->
    <icon-park
      :icon="getPlayState ? Pause : Play"
      :size="50"
      theme="filled"
      class="hover-text text-emerald-400"
      @click="play"
    ></icon-park>
    <!-- 下一首按钮 -->
    <icon-park :icon="GoEnd" :size="35" theme="filled" class="hover-text"></icon-park>
    <!-- 音量调节按钮 -->
    <el-popover placement="top" width="50px">
      <template #reference>
        <icon-park
          :icon="VolumeSmall"
          size="25"
          :stroke-width="3"
          class="hover-text"
        ></icon-park>
      </template>
      <play-volume-slider></play-volume-slider>
    </el-popover>
    <audio :src="musicPlayState.currentSongUrl" ref="audio"></audio>
  </div>
</template>
<script setup>
import { Play, PlayOnce, Pause, GoEnd, GoStart, VolumeSmall } from "@icon-park/vue-next";
import iconPark from "@/components/common/iconPark";
import playVolumeSlider from "./playVolumeSlider.vue";
import { useMusicStateStore } from "@/store";
import { storeToRefs } from "pinia";
import { onMounted, ref } from "vue";

const musicPlayState = useMusicStateStore();
const audio = ref(null);
//解构store
const { playState, getPlayState } = storeToRefs(musicPlayState);
console.log(musicPlayState.getPlayState);
console.log(playState.value);
console.log(getPlayState.value);

onMounted(() => {});
function play() {
  if (!musicPlayState.playState) {
    audio.value.play();
    musicPlayState.$patch((state) => {
      state.playState = true;
    });
  } else {
    audio.value.pause();
    musicPlayState.$patch((state) => {
      state.playState = false;
    });
  }
}
</script>
