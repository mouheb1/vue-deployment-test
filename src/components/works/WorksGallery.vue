<script setup lang="ts">
import { Image } from '@unpic/vue'

const props = defineProps({
  images: {
    type: Array,
    default: () => [],
  },
})

const galleria = ref()
const activeIndex = ref(0)
const showThumbnails = ref(false)
const fullScreen = ref(false)

const onThumbnailButtonClick = () => {
  showThumbnails.value = !showThumbnails.value
}

const responsiveOptions = ref([
  {
    breakpoint: '1300px',
    numVisible: 4,
  },
  {
    breakpoint: '575px',
    numVisible: 1,
  },
])

const onFullScreenChange = () => {
  fullScreen.value = !fullScreen.value
}

// Preload the full-resolution images once so navigating between them in
// fullscreen is instant instead of lagging behind the thumbnail strip.
const fullImagesPreloaded = ref(false)
const preloadFullImages = () => {
  if (fullImagesPreloaded.value || typeof window === 'undefined')
    return
  fullImagesPreloaded.value = true
  props.images.forEach((img: any) => {
    const preloader = new window.Image()
    preloader.src = img.itemImageSrc
  })
}

const openFullScreen = () => {
  preloadFullImages()
  const elem = galleria.value.$el

  if (elem.requestFullscreen) {
    elem.requestFullscreen()
  }
  else if (elem.mozRequestFullScreen) {
    /* Firefox */
    elem.mozRequestFullScreen()
  }
  else if (elem.webkitRequestFullscreen) {
    /* Chrome, Safari & Opera */
    elem.webkitRequestFullscreen()
  }
  else if (elem.msRequestFullscreen) {
    /* IE/Edge */
    elem.msRequestFullscreen()
  }
}
const closeFullScreen = () => {
  if (document.exitFullscreen)
    document.exitFullscreen()
  else if (document.mozCancelFullScreen)
    document.mozCancelFullScreen()
  else if (document.webkitExitFullscreen)
    document.webkitExitFullscreen()
  else if (document.msExitFullscreen)
    document.msExitFullscreen()
}
const bindDocumentListeners = () => {
  document.addEventListener('fullscreenchange', onFullScreenChange)
  document.addEventListener('mozfullscreenchange', onFullScreenChange)
  document.addEventListener('webkitfullscreenchange', onFullScreenChange)
  document.addEventListener('msfullscreenchange', onFullScreenChange)
}

const toggleFullScreen = () => {
  if (fullScreen.value)
    closeFullScreen()
  else openFullScreen()
}

onMounted(() => {
  bindDocumentListeners()
})

// Create a reactive array to store hover states for each image
const hoveredStates = ref(props.images.map(() => false))
</script>

<template>
  <Galleria
    ref="galleria"
    v-model:activeIndex="activeIndex"
    :value="images"
    :num-visible="5"
    container-style="width: 100%; max-width: 640px; margin: 0 auto;"
    :show-thumbnails="fullScreen"
    :show-item-navigators="fullScreen"
    :show-item-navigators-on-hover="false"
    :circular="true"
    :responsive-options="responsiveOptions"
    :pt="{
      root: {
        class: ['w-full', { 'flex flex-column': fullScreen }],
      },
      content: {
        class: ['relative w-full', { 'flex-1 justify-content-center': fullScreen }],
      },
      thumbnailwrapper: 'absolute w-full left-0 bottom-0',
    }"
  >
    <template #item="slotProps">
      <div
        class="group relative block w-full overflow-hidden"
        :class="[!fullScreen ? 'aspect-4/3 sm:aspect-5/4' : 'h-full w-full flex items-center justify-center']"
        @mouseover="hoveredStates[slotProps.index] = true"
        @mouseout="hoveredStates[slotProps.index] = false"
        @click="toggleFullScreen"
      >
        <Image
          :src="`${slotProps.item.itemImageSrc}`"
          :alt="slotProps.item.alt"
          priority
          :style="[
            {
              width: !fullScreen ? '100%' : 'auto',
              height: !fullScreen ? '100%' : 'auto',
              display: 'block',
            },
          ]"
          class="cursor-pointer object-cover"
          :class="[!fullScreen ? 'h-full w-full' : 'max-h-[80vh] max-w-[95vw] md:max-h-[1000px] md:max-w-[1200px]']"
        />
        <div
          v-if="!fullScreen"
          class="pointer-events-none absolute left-0 top-0 h-full w-full flex cursor-pointer items-center justify-center bg-black bg-opacity-0 transition-colors duration-200 group-hover:bg-opacity-20"
        >
          <span
            class="absolute bottom-2 right-2 h-9 w-9 flex items-center justify-center rounded-full bg-black bg-opacity-50 text-white opacity-90 transition-opacity md:opacity-0 md:group-hover:opacity-90"
          >
            <i class="pi pi-eye" style="font-size: 1rem" />
          </span>
        </div>
      </div>
    </template>
    <template #thumbnail="slotProps">
      <div class="justify-content-center relative grid gap-0">
        <Image
          :src="slotProps.item.thumbnailImageSrc"
          :alt="slotProps.item.alt"
          width="300"
          class="block max-h-30!"
        />
      </div>
    </template>
    <template #footer>
      <div v-if="fullScreen" class="align-items-center bg-black-alpha-90 w-full flex flex-wrap gap-2 px-2 py-2 text-white sm:flex-nowrap">
        <Button
          icon="pi pi-list"
          :pt="{
            root: {
              class:
                'border-none border-noround hover:bg-white-alpha-10 text-white shrink-0',
              style: 'background: transparent',
            },
          }"
          @click="onThumbnailButtonClick"
        />
        <span v-if="images" class="min-w-0 flex flex-1 flex-wrap items-center gap-x-3 gap-y-1">
          <span class="text-xs sm:text-sm">{{ activeIndex + 1 }}/{{ images.length }}</span>
          <span class="text-xs font-bold sm:text-sm">{{ images[activeIndex].title }}</span>
          <span class="wrap-break-word text-xs opacity-80 sm:text-sm">{{ images[activeIndex].alt }}</span>
        </span>
      </div>
    </template>
  </Galleria>
</template>

<style>
.flex-1 {
  flex: 1 1 0% !important;
}

.justify-content-center {
  justify-content: center !important;
}

.flex-column {
  flex-direction: column !important;
}

.p-galleria-thumbnail-items-container {
  display: flex;
  justify-content: space-around;
}
</style>
