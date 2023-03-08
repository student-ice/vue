<template>
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
      <Play v-if="!getPlayState" />
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
    <audio :src="musicPlayState.currentSongUrl" ref="audio"></audio>
  </div>
</template>
<script setup>
import playVolumeSlider from "./playVolumeSlider.vue";
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
