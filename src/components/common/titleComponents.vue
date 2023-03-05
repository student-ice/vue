<template>
  <div class="title flex items-center mt-2 mb-2">
    <div>{{ this.title }}</div>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
  },
};
</script>
