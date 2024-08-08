<script setup lang="ts">
import { storeToRefs } from 'pinia'

const globalStore = useGlobalStore()
const { hasScrolled, isMobile } = storeToRefs(globalStore)
const visible = ref(true)
</script>

<template>
  <TheHeader />
  <main class="flex flex-col bg-white text-center">
    <Newsletter v-model:visible="visible" />
    <RouterView />
  </main>
  <TheFooter />
  <FloatingFooter v-if="isMobile" />
  <ScrollUp
    class="animate-duration-300"
    :class="[hasScrolled && !isMobile ? 'animate-fade-in-up' : 'fade-out-down']"
  />
</template>
