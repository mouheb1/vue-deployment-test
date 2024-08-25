<script setup lang="ts">
import { Image as ResponsiveImage } from '@unpic/vue'

const props = defineProps({
  canvasImagesPath: {
    type: String,
    default: '',
  },
  frameCount: {
    type: Number,
    default: 0,
  },
})

const images = ref<HTMLImageElement[]>([])
const currentFrame = ref<number>(0) // Set this to 0 to correctly map to your array indices

const loadImages = () => {
  // Load images starting from 01.jpg to frameCount
  for (let i = 1; i <= props.frameCount; i++) {
    const img = new Image()
    const index = String(i).padStart(2, '0') // Pad the number to ensure 01, 02, etc.
    img.src = `${props.canvasImagesPath}${index}.jpg`
    images.value.push(img)
  }
}

const handleHover = (index: number) => {
  currentFrame.value = index
}

onMounted(() => {
  loadImages()
})
</script>

<template>
  <div class="mx-center relative cursor-360">
    <!-- Main image with the lowest z-index -->
    <ResponsiveImage
      :src="images[currentFrame]?.src"
      alt="Product Image"
      layout="fullWidth"
      class="left-0 top-0 z-0 w-full md:absolute md:w-[920px]"
    />
    <!-- Loop through images with a higher z-index -->
    <div class="hidden h-full w-[350px] md:w-[920px] md:flex">
      <ResponsiveImage
        v-for="(image, index) in images"
        :key="index"
        :src="image.src"
        alt="Product Image"
        layout="fullWidth"
        class="image-loop object-cover opacity-0"
        :style="{ width: `${100 / images.length}%` }"
        @mouseover="handleHover(index)"
      />
    </div>
  </div>
</template>

<style scoped>
.image-loop {
  position: relative;
  z-index: 10; /* Higher z-index to ensure it's on top */
}
</style>
