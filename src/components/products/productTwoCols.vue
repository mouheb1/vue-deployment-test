<script setup lang="ts">
import { Image } from '@unpic/vue'

defineProps({
  image: {
    type: String,
    default: '/images/no-image.png',
  },
  title: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
  buttonText: {
    type: String,
    default: 'En savoir plus',
  },
  link: {
    type: String,
    default: '/',
  },
})
</script>

<template>
  <section
    class="grid grid-cols-1 mx-6 mb-14 items-center gap-x-24 border-0 border-b-2 border-gray-200 border-solid py-22 md:grid-cols-2"
  >
    <a :href="link" :title><Image
      :src="image"
      :alt="image"
      :height="515"
      class="!object-contain"
    /></a>

    <div class="flex flex-col gap-y-2 text-left md:pr-12.5">
      <h2 class="m-0 text-[42px] font-700">
        {{ title }}
      </h2>
      <p class="text-xl text-gray-500">
        {{ description }}
      </p>
      <horizontalSlideButton :link :title custom-class="uppercase max-w-fit">
        {{ buttonText }}
      </horizontalSlideButton>
    </div>
  </section>
</template>
