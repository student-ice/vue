<template>
  <div class="homediv">
    <banner></banner>
    <home-recommended></home-recommended>
    <home-recommended-new-songs></home-recommended-new-songs>
  </div>
</template>

<script setup>
import banner from "./bannerView.vue";
import homeRecommended from "./recommendedView.vue";
import homeRecommendedNewSongs from "./recommendNewSongsView.vue";
</script>
