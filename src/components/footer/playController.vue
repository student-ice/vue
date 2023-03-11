<template>
  <div class="flex flex-col">
    <play-silder></play-silder>
    <div class="flex items-center justify-center gap-x-3">
      <!-- 播放模式按钮 -->
      <n-icon size="25">
        <PlayOnce />
      </n-icon>
      <!-- 上一首按钮 -->
      <n-icon size="35" class="hover-text">
        <Previous />
      </n-icon>
      <!-- 播放按钮 -->
      <n-icon size="50" class="hover-text text-emerald-400" @click="play">
        <Play v-if="!playState" />
        <Pause v-else />
      </n-icon>
      <!-- 下一首按钮 -->
      <n-icon size="35" class="hover-text">
        <Next />
      </n-icon>
      <!-- 音量调节按钮 -->
      <el-popover placement="top" width="50px">
        <template #reference>
          <n-icon size="25" class="hover-text">
            <Volume />
          </n-icon>
        </template>
        <play-volume-slider></play-volume-slider>
      </el-popover>
      <audio
        :src="currentSongUrl"
        @canplay="getDuration"
        @timeupdate="updateTime"
        @ended="playEnd"
        :autoplay="autoplay"
        ref="audio"
      ></audio>
    </div>
  </div>
</template>
<script setup>
import playVolumeSlider from "./playVolumeSlider.vue";
import playSilder from "./playerSilder.vue";
import { useMusicStateStore } from "@/store";
import { storeToRefs } from "pinia";
import { onMounted, ref } from "vue";
import { NIcon } from "naive-ui";
import {
  RepeatOnce as PlayOnce,
  PlayerSkipBack as Previous,
  PlayerSkipForward as Next,
  Volume,
  PlayerPlay as Play,
  PlayerPause as Pause,
} from "@vicons/tabler";

const musicPlayState = useMusicStateStore();
const audio = ref(null);
//解构store
const {
  playState,
  autoplay,
  musicCurrentTime,
  musicDuration,
  currentSongUrl,
} = storeToRefs(musicPlayState);

onMounted(() => {});
function play() {
  if (!playState.value) {
    audio.value.play();
    playState.value = true;
  } else {
    audio.value.pause();
    playState.value = false;
  }
}
//获取音乐总时长
function getDuration() {
  console.log(parseInt(audio.value.duration));
  musicDuration.value = parseInt(audio.value.duration);
}
//获取当前播放时长
function updateTime(e) {
  //console.log(parseInt(e.target.currentTime));
  musicCurrentTime.value = parseInt(e.target.currentTime);
}
//音乐播放结束
function playEnd() {
  playState.value = false;
}
</script>
