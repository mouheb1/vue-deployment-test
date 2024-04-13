<script setup lang="ts">
import { storeToRefs } from 'pinia'

const globalStore = useGlobalStore()
const { hasScrolled } = storeToRefs(globalStore)
</script>

<template>
  <header
    class="absolute fixed top-0 z-100 max-h-min w-full px-4 pt-4 drop-shadow-md duration-600"
    :class="[hasScrolled ? 'bg-white' : 'bg-transparent']"
  >
    <TopBar />
    <hr
      class="mb-0 border-b-0 border-t-1 border-solid"
      :class="[hasScrolled ? 'border-black opacity-10' : 'border-white opacity-30']"
    >
    <NavBar />
  </header>
</template>
