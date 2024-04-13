<script setup lang="ts">
import { socials } from '@/assets/json/config.json'

defineProps({
  fill: {
    type: String,
    default: 'color-[#003f5e]',
  },
})
</script>

<template>
  <div
    id="socials"
    class="flex justify-start gap-x-5"
  >
    <a
      v-for="social of socials"
      :key="social.icon"
      :href="social.url"
      target="_blank"
    >
      <i
        :class="`pi ${social.icon} ${fill} hover:text-[#003f5e] hover-animation`"
        style="font-size: 1.6rem"
      />
    </a>
  </div>
</template>
