<template>
  <div class="flex flex-col">
    <div class="flex">
      <n-image :src="playListCoverImgUrl" width="200" height="200" class="rounded" />
      <div class="mr-left">
        <span class="text-title-size">{{ playListName }}</span
        ><br />
        <div class="flex justify-center" style="">
          <span class="text-artist-size">{{ playListCreatorNickname }}</span>
          <n-image
            style="align-items: center"
            :src="playListCreatorAvatarDetailIdentityIconUrl"
            width="22"
            height="22"
          />
        </div>
      </div>
    </div>
    <div>
      <el-tabs v-model="tab">
        <el-tab-pane :label="`歌曲 ${playListMusic.length}`" name="track">
          <song-list></song-list>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script setup>
import { useRoute } from "vue-router";
import api from "../api/index";
import { onMounted, ref } from "vue";
import { NImage } from "naive-ui";
import { usePlayListStore } from "../store/playlist";
import { storeToRefs } from "pinia";
import songList from "./songList.vue";

const tab = ref("track");
const playListState = usePlayListStore();
const {
  playListCoverImgUrl,
  playListName,
  playListCreatorNickname,
  playListCreatorAvatarDetailIdentityIconUrl,
  playListMusic,
} = storeToRefs(playListState);

onMounted(() => {
  let id = useRoute().query.id;
  api.getMusicListDetail(id).then((res) => {
    console.log(res.data.playlist);
    let playList = res.data.playlist;
    playListCoverImgUrl.value = playList.coverImgUrl;
    playListName.value = playList.name;
    playListCreatorNickname.value = playList.creator.nickname;
    playListCreatorAvatarDetailIdentityIconUrl.value =
      playList.creator.avatarDetail.identityIconUrl;
  });
  api.getMusicListTrackAll(id).then((res) => {
    //console.log(res.data.songs);
    playListMusic.value = res.data.songs;
  });
});
</script>
