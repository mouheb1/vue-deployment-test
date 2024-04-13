<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { contact } from '@/assets/json/config.json'

const globalStore = useGlobalStore()
const { hasScrolled, isMobile } = storeToRefs(globalStore)
</script>

<template>
  <div class="m-x-6 mb-4 flex items-center justify-between">
    <img
      src="/images/logo.png"
      alt="Delta Logo"
      class="w-16"
    >
    <div class="flex items-center gap-x-7">
      <div v-if="!isMobile" class="flex items-center gap-x-2">
        <PhoneIcon
          fill="#003f5e"
          :width="1.5"
        />
        <a
          :href="contact.whatsapp"
          target="_blank"
        >
          <Button
            :label="contact.phone"
            link
            class="p-0 font-extrabold"
            :class="[hasScrolled ? 'text-black' : 'text-white']"
          />
        </a>
      </div>
      <SocialLinks :fill="hasScrolled ? 'color-[#003f5e]' : 'color-white'" />
      <LocationButton v-if="!isMobile" />
    </div>
  </div>
</template>
