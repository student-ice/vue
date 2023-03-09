<template>
  <div class="flex flex-col items-stretch h-20">
    <div class="flex grow px-5 items-center">
      <div class="flex-1"><play-song></play-song></div>
      <div class="flex-1">
        <play-controller></play-controller>
      </div>
      <div class="flex-1">
        <player-action></player-action>
      </div>
    </div>
  </div>
</template>
<script setup>
import playSong from "@/components/footer/playSong.vue";
import playController from "@/components/footer/playController.vue";
import playerAction from "./playerAction.vue";
</script>
