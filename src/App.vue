<script setup lang="ts">
import {
  SITE_NAME,
  canonicalUrl,
  getOgImage,
  getSeo,
  localBusinessJsonLd,
} from '@/composables/useSeo'

// https://github.com/vueuse/head
// Per-route head is derived from the SEO map keyed by path, so every page
// rendered by vite-ssg gets a unique title, description and canonical URL.
const route = useRoute()
const seo = computed(() => getSeo(route.path))
const canonical = computed(() => canonicalUrl(route.path))
const ogImage = computed(() => getOgImage(route.path))

useHead({
  title: () => seo.value.title,
  htmlAttrs: {
    lang: 'fr',
  },
  meta: [
    { name: 'description', content: () => seo.value.description },
    { name: 'theme-color', content: '#ffffff' },
    // Open Graph
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: SITE_NAME },
    { property: 'og:locale', content: 'fr_FR' },
    { property: 'og:title', content: () => seo.value.title },
    { property: 'og:description', content: () => seo.value.description },
    { property: 'og:url', content: () => canonical.value },
    { property: 'og:image', content: () => ogImage.value },
    // Twitter
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: () => seo.value.title },
    { name: 'twitter:description', content: () => seo.value.description },
    { name: 'twitter:image', content: () => ogImage.value },
  ],
  link: [
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon.ico' },
    { rel: 'canonical', href: () => canonical.value },
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify(localBusinessJsonLd()),
    },
  ],
})
</script>

<template>
  <RouterView />
</template>
