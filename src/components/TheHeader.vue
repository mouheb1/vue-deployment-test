<script setup lang="ts">
const { y } = useWindowScroll()
const hasScrolled = computed(() => y.value > 0)
</script>

<template>
  <header
    class="absolute fixed top-0 z-100 max-h-min w-full px-4 pt-4 duration-600"
    :class="[hasScrolled ? 'bg-white' : 'bg-transparent']"
  >
    <TopBar :has-scrolled="hasScrolled" />
    <hr
      class="border-b-0 border-t-1 border-solid"
      :class="[hasScrolled ? 'border-black opacity-10' : 'border-white opacity-30']"
    >
    <NavBar :has-scrolled="hasScrolled" />
  </header>
</template>
