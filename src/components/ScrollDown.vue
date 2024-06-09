<script setup lang="ts">
import { scrollTo } from '@/utils/helpers'
</script>

<template>
  <div
    class="absolute bottom-0 flex items-center justify-center hover:cursor-pointer"
    @click="scrollTo('section-1', -50)"
  >
    <div class="absolute mb-6 h-16 w-16 bg-black opacity-30" />
    <i
      class="pi pi-chevron-down z-1 mb-6 text-xs color-[#003f5e]"
      style="font-size: 1.5rem"
    />
  </div>
</template>

<style scoped></style>
