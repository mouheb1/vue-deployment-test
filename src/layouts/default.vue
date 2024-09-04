<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { recordVisitor } from '@/services/userService'

const globalStore = useGlobalStore()
const { hasScrolled, isMobile } = storeToRefs(globalStore)
const visible = ref(true)
const isLoading = ref(true)
const passedTimeout = ref(false)

const canShowNewsletter = computed(() => {
  if (!passedTimeout.value) {
    return false
  }

  if (isLoading.value) {
    return false
  }

  if (!hideNewsletterUntil.value) {
    return true
  }

  const hideUntilDate = new Date(hideNewsletterUntil.value)
  const currentDate = new Date()

  return currentDate >= hideUntilDate
})

const handleLoad = () => {
  isLoading.value = false
}

setTimeout(() => {
  passedTimeout.value = true
}, 5000)

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

onMounted(async () => {
  const userExpiresAtDate = new Date(userExpiresAt.value)
  const currentDate = new Date()
  // Checks if expiry date is falsy or has expired
  if (!userExpiresAt.value || currentDate >= userExpiresAtDate) {
    const result = await recordVisitor()
    if (result.status === 'success') {
      const currentDate = new Date()
      const userExpiresAtDate = new Date(currentDate.getTime() + 7 * 24 * 60 * 60 * 1000) // 7 days
      userExpiresAt.value = userExpiresAtDate.toISOString()
    }
  }
})
</script>

<template>
  <div>
    <PageLoader v-if="isLoading" />
    <div v-show="!isLoading">
      <TheHeader class="!z-999999" />
      <main class="flex flex-col bg-white text-center">
        <Newsletter v-if="canShowNewsletter" v-model:visible="visible" />
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
