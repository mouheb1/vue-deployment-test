<script setup lang="ts">
const { t } = useI18n()

useHead({
  title: 'Page introuvable | DELTA Solution',
  meta: [
    { name: 'robots', content: 'noindex, follow' },
  ],
})
</script>

<template>
  <div>
    {{ t('not-found') }}
  </div>
</template>

<route lang="yaml">
meta:
  layout: 404
</route>
