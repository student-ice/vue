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
import { NIcon } from "naive-ui";
import { Heart as Like, Download } from "@vicons/tabler";
</script>
