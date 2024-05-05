<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { contact } from '@/assets/json/config.json'

const globalStore = useGlobalStore()
const { hasScrolled, isAtHomePage } = storeToRefs(globalStore)
</script>

<template>
  <a
    :href="contact.location"
    target="_blank"
  >
    <Button
      class="hover-animation border-2 rounded-none bg-transparent px-5 py-[13.3333px] text-sm font-semibold duration-300 hover:bg-[#003f5e] hover:text-white"
      :class="[hasScrolled || !isAtHomePage ? 'border-[#003f5e] text-[#003f5e]' : 'border-white text-white']"
    >
      Où nous trouver ?
    </Button>
  </a>
</template>
