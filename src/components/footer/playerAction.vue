<template>
  <div class="flex justify-end items-center gap-x-2.5">
    <span class="text-xs"> {{}}  {{}} </span>
    <n-icon :size="25" class="hover-text">
      <Message2 />
    </n-icon>

    <div class="flex items-center hover-text playaction-list">
      <n-icon :size="25" class="hover-text">
        <Playlist />
      </n-icon>
    </div>
  </div>
</template>
<script setup>
import { Playlist, Message2 } from "@vicons/tabler";
import { NIcon } from "naive-ui";
</script>
