<template>
  <Component :is="icon" :spin="spin" :fill="fill" :strokeWidth="strokeWidth" />
</template>

<script>
export default {
  props: {
    icon: String,
    size: [Number, String],
    spin: Boolean,
    fill: String,
    strokeWidth: Number,
  },
};
</script>
