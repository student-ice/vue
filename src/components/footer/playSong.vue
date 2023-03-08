<template>
  <div class="flex player-song">
    <img
      alt=""
      class="w-11 h-11 rounded"
      :src="`http://p1.music.126.net/ZpXdmuJr5NLyioAWmEEfCg==/109951168437112714.jpg`"
    />
    <div class="ml-2 text-xs flex flex-col justify-between">
      <div class="w-52 2xl:w-96 cursor-pointer truncate">
        <div class="flex">
          <div class="bg-red-500 text-xs text-white rounded px-0.5 scale-75">试听</div>
          <span>{{ "开源云音乐" }}</span>
          <span class="ml-2 text-dc"> </span>
        </div>
      </div>
      <div class="flex gap-x-3 text-main">
        <icon-park
          :icon="Like"
          size="18"
          :stroke-width="3"
          class="text-slate-400 hover-text"
        ></icon-park>
        <icon-park
          :icon="DownTwo"
          size="18"
          :stroke-width="3"
          class="text-slate-400 hover-text"
        ></icon-park>
        <icon-park
          :icon="MoreTwo"
          size="18"
          :stroke-width="3"
          class="text-slate-400 hover-text"
        ></icon-park>
      </div>
    </div>
  </div>
</template>
<script setup>
import { Like, DownTwo, MoreTwo } from "@icon-park/vue-next";
import iconPark from "@/components/common/iconPark";
</script>
