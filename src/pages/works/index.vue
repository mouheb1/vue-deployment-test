<script setup lang="ts">
import { PhotoService } from '@/services/photoService'

const worksGalleries = ref()

onMounted(() => {
  PhotoService.getImages().then(data => (worksGalleries.value = data))
})
</script>

<template>
  <div
    class="relative h-64 flex items-end overflow-hidden bg-cover bg-center bg-no-repeat bg-works-image before:absolute before:inset-0 md:h-125 sm:h-96 before:bg-black before:opacity-40 before:content-['']"
  >
    <h1
      class="relative w-full px-5 pb-6 text-2xl text-white font-extrabold leading-tight text-shadow-lg md:px-16 sm:px-10 md:pb-20 sm:pb-10 lg:text-5xl sm:text-4xl"
    >
      Nos réalisations
    </h1>
  </div>
  <div class="grid grid-cols-1 mx-auto max-w-[1300px] gap-4 overflow-hidden p-4 md:grid-cols-3 sm:grid-cols-2 sm:gap-5 lg:p-20 md:p-12 sm:p-8">
    <worksGallery v-for="worksGallery of worksGalleries" :key="worksGallery.imageId" :images="worksGallery.subImages" />
  </div>
</template>
