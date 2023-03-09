<template>
  <div>
    <title-components title="你的专属歌单"></title-components>

    <div class="grid grid-flow-row grid-cols-3 gap-5 lg:grid-cols-5">
      <div
        v-for="(item, index) in state.personalized"
        :key="index"
        :class="{ 'item-1': index === 0 }"
      >
        <router-link :to="{ name: 'musiclistdetail', query: { id: item.id } }">
          <cover-player
            :name="item.name"
            :picUrl="item.picUrl"
            :object-fit="fill"
            :play-count="item.playCount"
          ></cover-player>
          <div class="mt-2 text-xs text-main truncate">{{ item.name }}</div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script setup>
import api from "../api/index";
import { reactive, onMounted } from "vue";
import coverPlayer from "../components/common/coverPlayer.vue";
import titleComponents from "@/components/common/titleComponents";

const fill = "fill";
const state = reactive({
  personalized: [],
});
onMounted(() => {
  api
    .getPersonalized(24)
    .then((res) => {
      console.log(res.data.result);
      state.personalized = res.data.result;
    })
    .catch((error) => {
      console.log(error);
    });
});
</script>
