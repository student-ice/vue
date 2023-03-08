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
      >
        <n-image
          :src="item.picUrl"
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
</script>
