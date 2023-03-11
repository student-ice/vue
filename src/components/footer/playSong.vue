<template>
  <div class="flex player-song">
    <n-image
      alt=""
      width="64"
      height="64"
      class="rounded"
      :preview-disabled="true"
      :src="picUrl"
    />
    <div class="ml-2 text-xs flex flex-col justify-between">
      <div class="w-52 2xl:w-96 cursor-pointer truncate">
        <div class="flex items-center">
          <span>{{ playMusicName }}</span>

          <n-tag type="error" size="small" v-if="isVip"> VIP </n-tag>
        </div>
      </div>
      <span class="ml-2 text-dc">{{ musicArtist }}</span>
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
import { NIcon, NTag, NImage } from "naive-ui";
import { Heart as Like, Download } from "@vicons/tabler";
import { useMusicStateStore } from "@/store";
import { storeToRefs } from "pinia";

const musicStateStore = useMusicStateStore();

const { playMusicName, picUrl, musicArtist } = storeToRefs(musicStateStore);

const musicState = useMusicStateStore();
const { isVip } = storeToRefs(musicState);
</script>
