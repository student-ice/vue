<template>
  <title-components title="推荐新音乐"></title-components>
  <div
    class="grid grid-flow-row grid-cols-2 2xl:grid-cols-5 gap-y-2.5 gap-x-5 cursor-pointer ml-5 mr-5"
  >
    <template v-if="state.personalizedNewSongs.length != 0">
      <div
        v-for="(item, index) in state.personalizedNewSongs"
        :key="index"
        class="hover-bg-view transition-all flex items-center"
        v-on:click="play(index)"
      >
        <n-image
          :src="item.picUrl"
          :preview-disabled="true"
          class="w-12 h-12 object-cover rounded flex-shrink-0"
          lazy
        />
        <div class="px-2 text-xs flex-auto flex flex-col w-1/3">
          <div class="text-xs flex-1 truncate">
            {{ item.name }}
          </div>
          <div class="mt-1.5 text-dc">-{{ item.song.artists[0].name }}</div>
        </div>
      </div>
    </template>
  </div>
</template>
<script setup>
import { reactive, onMounted } from "vue";
import titleComponents from "@/components/common/titleComponents";
import api from "../api/index";
import { NImage } from "naive-ui";
import { useMusicStateStore } from "@/store";
import { storeToRefs } from "pinia";

const musicPlayState = useMusicStateStore();
const {
  currentSongUrl,
  autoplay,
  playState,
  playMusicName,
  picUrl,
  isVip,
  musicArtist,
} = storeToRefs(musicPlayState);
const state = reactive({
  personalizedNewSongs: [],
});
onMounted(() => {
  api
    .getPersonalizedNewSongs(10)
    .then((res) => {
      console.log(res.data.result);
      state.personalizedNewSongs = res.data.result;
    })
    .catch((error) => {
      console.log(error);
    });
});
function play(index) {
  //console.log(state.personalizedNewSongs[0].id);
  api.getMusicUrl(state.personalizedNewSongs[index].id).then((res) => {
    //console.log(res.data.data[0]);

    currentSongUrl.value = res.data.data[0].url;
    autoplay.value = true;
    playState.value = true;
  });
  api.getMusicDetail(state.personalizedNewSongs[index].id).then((res) => {
    console.log(res.data.songs[0]);
    playMusicName.value = res.data.songs[0].name;
    picUrl.value = res.data.songs[0].al.picUrl;
    if (res.data.songs[0].fee === "1") {
      isVip.value = true;
    }
    musicArtist.value = res.data.songs[0].ar[0].name;
  });
}
</script>
