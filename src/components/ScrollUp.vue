<script setup lang="ts">
import { scrollTo } from '@/utils/helpers'
</script>

<template>
  <div
    class="absolute fixed bottom-0 right-0 z-100 mr-5 flex items-center justify-center hover:cursor-pointer"
    @click="scrollTo()"
  >
    <div class="absolute h-16 w-16 bg-[#003f5e]" />
    <i
      class="pi pi-chevron-up z-1 my-5 text-xs color-white"
      style="font-size: 16px"
    />
  </div>
</template>

<style scoped></style>
