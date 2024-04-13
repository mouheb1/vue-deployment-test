<script setup lang="ts">
import { storeToRefs } from 'pinia'

const globalStore = useGlobalStore()
const { isMobile } = storeToRefs(globalStore)
</script>

<template>
  <TheHeader />
  <main class="flex flex-col bg-white text-center">
    <RouterView />
  </main>
  <TheFooter />
  <FloatingFooter v-if="isMobile" />
</template>
