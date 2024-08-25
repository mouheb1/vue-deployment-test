<script setup lang="ts">
import { Image } from '@unpic/vue'
import { general } from '@/assets/json/config.json'

defineProps({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
})

const showDescription = ref(true)
</script>

<template>
  <div
    class="mb-2 min-h-100 w-120 duration-900 hover:cursor-pointer"
    @mouseover="showDescription = true"
    @mouseout="showDescription = false"
  >
    <div
      class="h-78 overflow-hidden duration-600 hover:scale-95"
      :style="showDescription ? { height: '15rem' } : ''"
    >
      <Image
        :src="`${image || general.noImagePath}`"
        alt="Image unavailable"
        class="h-full w-full object-cover text-black grayscale duration-900 hover:scale-120 hover:grayscale-0"
      />
    </div>
    <div class="h-23 w-90 w-full flex flex-wrap items-center justify-between gap-y-5 p-5">
      <div class="max-w-[85%] text-left text-[1.3em] text-black font-bold" :class="[!showDescription ? 'overflow-hidden text-ellipsis whitespace-nowrap' : '']">
        {{ title }}
      </div>
      <i
        class="pi pi-arrow-right min-w-[10%] color-[#003f5e]"
        style="font-size: 1rem"
      />
      <Transition>
        <div
          v-if="showDescription"
          class="max-w-[85%] text-left text-[1em] text-black"
        >
          {{ description }}
        </div>
      </Transition>
    </div>
  </div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
