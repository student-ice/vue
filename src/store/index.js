import { defineStore } from 'pinia'

// 你可以对 `defineStore()` 的返回值进行任意命名，但最好使用 store 的名字，同时以 `use` 开头且以 `Store` 结尾。(比如 `useUserStore`，`useCartStore`，`useProductStore`)
// 第一个参数是你的应用中 Store 的唯一 ID。
export const useMusicStateStore = defineStore('musicState', {
  // 其他配置...
  state: ()=>({
    playState: false,
    currentSongUrl: 'https://music.163.com/song/media/outer/url?id=1999552137.mp3'
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


