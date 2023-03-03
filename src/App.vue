<template>  
  <home-page></home-page>
</template>

<script>
import HomePage from "./views/HomePage.vue"

export default {
  name: "App",
  components: {
    HomePage,
  },
};
</script>

<style>
#App {
  width: 100%;
  height: 100vh;
  padding: 0;

}
</style>
