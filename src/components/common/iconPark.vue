<template>
  <Component
    :is="icon"
    :size="size"
    :spin="spin"
    :theme="theme"
    :fill="fill"
    :strokeWidth="strokeWidth"
  />
</template>

<script>
export default {
  props: {
    icon: String,
    theme: String,
    size: [Number, String],
    spin: Boolean,
    fill: String,
    strokeWidth: Number,
  },
};
</script>
