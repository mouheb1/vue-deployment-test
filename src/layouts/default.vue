<script setup lang="ts">
import { storeToRefs } from 'pinia'

const globalStore = useGlobalStore()
const { hasScrolled, isMobile } = storeToRefs(globalStore)
</script>

<template>
  <TheHeader />
  <main class="flex flex-col bg-white text-center">
    <RouterView />
  </main>
  <TheFooter />
  <FloatingFooter v-if="isMobile" />
  <ScrollUp
    class="animate-duration-300"
    :class="[hasScrolled && !isMobile ? 'animate-fade-in-up' : 'fade-out-down']"
  />
</template>

<style scoped>
@keyframes fade-out-down {
  from {
    opacity: 1;
    transform: translateY(0);
  }

  to {
    opacity: 0;
    transform: translateY(20px);
    visibility: hidden;
  }
}

.fade-out-down {
  animation: fade-out-down 0.3s forwards;
}
</style>
