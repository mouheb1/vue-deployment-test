<script setup lang="ts">
import { loadLanguageAsync } from '@/modules/i18n'

async function setLangToFrench() {
  await loadLanguageAsync('fr')
}

onMounted(async () => {
  await setLangToFrench()
})
</script>

<template>
  <TheHeader />
  <main class="flex flex-col bg-white text-center">
    <RouterView />
  </main>
  <TheFooter />
</template>
