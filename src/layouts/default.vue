<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { storeToRefs } from 'pinia'

const globalStore = useGlobalStore()
const { hasScrolled, isMobile } = storeToRefs(globalStore)
const visible = ref(true)

const isLoading = ref(true)

const handleLoad = () => {
  isLoading.value = false
}

// Check if page has already loaded
if (document.readyState === 'complete') {
  handleLoad()
}
else {
  onMounted(() => {
    window.addEventListener('load', handleLoad)

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('load', handleLoad)
    }
  })
}
</script>

<template>
  <div>
    <PageLoader v-if="isLoading" />
    <div v-show="!isLoading">
      <TheHeader />
      <main class="flex flex-col bg-white text-center">
        <Newsletter v-model:visible="visible" />
        <RouterView />
      </main>
      <TheFooter />
      <FloatingFooter v-if="isMobile" />
      <ScrollUp
        class="animate-duration-300"
        :class="[
          hasScrolled && !isMobile ? 'animate-fade-in-up' : 'fade-out-down',
        ]"
      />
    </div>
  </div>
</template>
