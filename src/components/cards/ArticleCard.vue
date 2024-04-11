<script setup lang="ts">
import imageUnavailablePath from '/images/no-image.png'

defineProps({
  title: {
    type: String,
  },
  image: {
    type: String,
  },
})
</script>

<template>
  <div class="mb-2 border-0 border-b-[1px] border-black border-opacity-25 border-solid hover:cursor-pointer">
    <div class="inline-block max-h-60 max-w-90 overflow-hidden duration-600 hover:scale-95">
      <img
        :src="image || imageUnavailablePath"
        alt="Image unavailable"
        class="h-60 w-90 object-cover text-black grayscale duration-600 hover:scale-120 hover:grayscale-0"
      >
    </div>
    <div class="h-23 w-90 flex items-center justify-between p-5">
      <div class="max-w-[85%] text-left text-[1.3em] text-black">
        {{ title }}
      </div>
      <i
        class="pi pi-arrow-right min-w-[10%] color-[#003f5e]"
        style="font-size: 1rem"
      />
    </div>
  </div>
</template>

<style scoped></style>
