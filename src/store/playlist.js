import { defineStore } from 'pinia'

export const usePlayListStore = defineStore('playliststate',{
    state: ()=>({
        playListId: 0 ,
        playListCoverImgUrl: ' ',
        playListName: '',
        playListCreatorNickname: '',
        playListCreatorAvatarDetailIdentityIconUrl: '',
        playListMusic: Array,
    })
})