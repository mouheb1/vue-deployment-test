<script setup lang="ts">
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'Delta Solution',
  meta: [
    {
      name: 'description',
      content: 'Menuiserie sur mesure, de l’aluminium au métal',
    },
    {
      name: 'theme-color',
      // content: () => isDark.value ? '#00aba9' : '#ffffff',
      content: '#ffffff',
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      // href: () => preferredDark.value ? '/favicon-dark.ico' : '/favicon.ico',
      href: '/favicon.ico',
    },
  ],
})
</script>

<template>
  <RouterView />
</template>
