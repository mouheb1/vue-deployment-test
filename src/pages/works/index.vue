<script setup lang="ts">
import { PhotoService } from '@/services/photoService'

const worksGalleries = ref()

onMounted(() => {
  PhotoService.getImages().then(data => (worksGalleries.value = data))
})
</script>

<template>
  <div
    class="relative top-0 h-125 bg-cover bg-center bg-no-repeat bg-works-image before:absolute before:inset-0 before:bg-black before:opacity-40 before:content-['']"
  >
    <div
      class="relative top-37 mx-10 text-4xl text-white font-extrabold leading-17 -left-1 md:top-70 sm:top-50 md:mx-30 lg:text-5xl lg:leading-20"
    >
      Nos réalisations
    </div>
  </div>
  <div class="style1 grid grid-cols-1 gap-2 md:grid-cols-3 sm:grid-cols-2">
    <worksGallery v-for="worksGallery of worksGalleries" :key="worksGallery.imageId" :images="worksGallery.subImages" />
  </div>
</template>

<style scoped>
.style1 {
  max-width: 1300px;
  margin: 0 auto;
  padding: 80px;
}
</style>
