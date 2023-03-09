<template>
  <div class="flex player-song">
    <img alt="" class="w-11 h-11 rounded" :src="picUrl" />
    <div class="ml-2 text-xs flex flex-col justify-between">
      <div class="w-52 2xl:w-96 cursor-pointer truncate">
        <div class="flex items-center">
          <span>{{ playMusicName }}</span>
          <span class="ml-2 text-dc"> </span>
          <n-tag type="error" size="small" v-if="musicState.isVip"> VIP </n-tag>
        </div>
      </div>
      <div class="flex gap-x-3 text-main">
        <n-icon size="18" class="text-slate-400 hover-text">
          <Like />
        </n-icon>
        <n-icon size="18" class="text-slate-400 hover-text">
          <Download />
        </n-icon>
      </div>
    </div>
  </div>
</template>
<script setup>
import { NIcon, NTag } from "naive-ui";
import { Heart as Like, Download } from "@vicons/tabler";
import { useMusicStateStore } from "@/store";
import { storeToRefs } from "pinia";

const musicStateStore = useMusicStateStore();

const { playMusicName, picUrl } = storeToRefs(musicStateStore);

const musicState = useMusicStateStore();
</script>
