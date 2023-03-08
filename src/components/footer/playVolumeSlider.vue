<template>
  <div class="player-volume flex flex-col items-center pt-2">
    <n-space vertical>
      <n-slider :default-value="77" :max="100" :min="0" vertical />
    </n-space>

    <div class="mt-2">
      <n-icon size="16" class="hover-text">
        <Volume />
      </n-icon>
    </div>
  </div>
</template>
<script setup>
import { NIcon, NSlider, NSpace } from "naive-ui";
import { Volume } from "@vicons/tabler";
</script>
<style></style>
