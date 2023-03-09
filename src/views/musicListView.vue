<template>
  <h3>歌单详情</h3>
</template>
<script setup>
import { useRoute } from "vue-router";
import api from "../api/index";
import { onMounted, reactive } from "vue";
const state = reactive({
  playList: {},
});
onMounted(() => {
  let id = useRoute().query.id;
  api.getMusicListDetail(id).then((res) => {
    //console.log(res.data);
    state.playList = res.data.playlist;
    console.log(state.playList);
  });
});
</script>
