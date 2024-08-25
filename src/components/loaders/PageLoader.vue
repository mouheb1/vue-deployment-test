<script setup lang="ts">
import { Image } from '@unpic/vue'
import { general } from '@/assets/json/config.json'
</script>

<template>
  <div class="h-screen flex items-center justify-center">
    <div class="anim-logo relative h-32 w-32">
      <Image
        :src="`${general.imageProviderBaseUrl}/images/logo-low-res.png`"
        alt="Delta Logo"
        priority
        class="absolute h-full w-full"
        loading="eager"
      />
    </div>
  </div>
</template>

<style scoped>
.anim-logo {
  color: transparent;
  position: relative;
  transform: translate(0%, -50%);
  background: rgba(255, 255, 255, 0.889);
  animation: breathe 1s linear infinite;
}
@keyframes breathe {
  0% {
    box-shadow: 0 0 0 10px #2b2a29;
  }
}
</style>
