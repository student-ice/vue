import { defineStore } from 'pinia'

// 你可以对 `defineStore()` 的返回值进行任意命名，但最好使用 store 的名字，同时以 `use` 开头且以 `Store` 结尾。(比如 `useUserStore`，`useCartStore`，`useProductStore`)
// 第一个参数是你的应用中 Store 的唯一 ID。
export const useMusicStateStore = defineStore('musicState', {
  // 其他配置...
  state: ()=>({
    playList:[
      {
        name: "",
        id: Number,
        al:{
          id: Number,
          name: "",
          pic: Number,
          picUrl: "",
          pic_str: ""
        }
      }
      

    ],
    playState: false,
    currentSongUrl: 'https://music.163.com/song/media/outer/url?id=1999552137.mp3',
    isVip: false,
    autoplay: false,
    playMusicName: "开源云音乐",
    musicArtist: "歌手",
    picUrl: 'http://p1.music.126.net/ZpXdmuJr5NLyioAWmEEfCg==/109951168437112714.jpg',//歌曲封面
    musicCurrentTime: 0, //歌曲当前时长
    musicDuration: 0,    //歌曲总时长
    musicFee: 0,  //0: 免费或无版权 | 1: VIP 歌曲 | 4: 购买专辑 | 8: 非会员可免费播放低音质，会员可播放高音质及下载
  }),
  //计算属性
  getters:{
    getPlayState:(state)=>{
        return state.playState;
    }
  },
  actions: {

  }
})


