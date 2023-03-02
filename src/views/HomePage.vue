<template>
    <h3>首页</h3>
</template>

<script>
import api from "../api/index"

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  mounted(){
    api.getBanner().then(res =>{
      console.log(res);
    })
  }
}
</script>