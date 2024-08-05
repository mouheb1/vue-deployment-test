<script setup lang="ts">
defineProps({
  fill: {
    type: String,
    default: '#000000',
  },
  width: {
    type: Number,
    default: 100,
  },
  height: {
    type: Number,
    default: 100,
  },
})
</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" :width="width" :height="height" viewBox="0 0 50 50">
    <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z" :fill="fill" />
  </svg>
</template>
