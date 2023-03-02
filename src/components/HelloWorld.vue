<template>
  <div class="hello">
    
  </div>
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


