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
  <main
    text="center"
  >
    <TheHeader />
    <RouterView />
    <TheFooter />
  </main>
</template>
