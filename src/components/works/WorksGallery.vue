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
// CSS-based lightbox flag. The browser Fullscreen API is unreliable on
// iOS Safari (iPhone has no support outside <video>), so we render our
// own modal overlay and control open/close ourselves.
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

// Preload the full-resolution images once so navigating between them in
// the lightbox is instant instead of lagging behind the thumbnail strip.
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

const toggleFullScreen = () => {
  if (!fullScreen.value)
    preloadFullImages()
  fullScreen.value = !fullScreen.value
}

const onKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && fullScreen.value)
    fullScreen.value = false
}

watch(fullScreen, (isOpen) => {
  if (typeof document === 'undefined')
    return
  document.body.style.overflow = isOpen ? 'hidden' : ''
})

onMounted(() => {
  document.addEventListener('keydown', onKeyDown)
})

onUnmounted(() => {
  if (typeof document === 'undefined')
    return
  document.removeEventListener('keydown', onKeyDown)
  document.body.style.overflow = ''
})

// Create a reactive array to store hover states for each image
const hoveredStates = ref(props.images.map(() => false))

// Native touch-swipe: track start X, on end decide next/prev/no-op.
const SWIPE_THRESHOLD = 40
const touchStartX = ref<number | null>(null)
const touchStartY = ref<number | null>(null)
const swipeJustHandled = ref(false)

const onTouchStart = (e: TouchEvent) => {
  const t = e.touches[0]
  touchStartX.value = t.clientX
  touchStartY.value = t.clientY
}

const onTouchEnd = (e: TouchEvent) => {
  if (touchStartX.value == null || touchStartY.value == null)
    return
  const t = e.changedTouches[0]
  const dx = t.clientX - touchStartX.value
  const dy = t.clientY - touchStartY.value
  touchStartX.value = null
  touchStartY.value = null
  if (Math.abs(dx) < SWIPE_THRESHOLD || Math.abs(dx) <= Math.abs(dy))
    return
  const total = props.images.length
  if (total < 2)
    return
  // Suppress the synthetic click that follows a swipe so we don't also
  // toggle the lightbox while paging through images.
  swipeJustHandled.value = true
  setTimeout(() => (swipeJustHandled.value = false), 350)
  if (dx < 0)
    activeIndex.value = (activeIndex.value + 1) % total
  else
    activeIndex.value = (activeIndex.value - 1 + total) % total
}

const onItemClick = () => {
  if (swipeJustHandled.value)
    return
  toggleFullScreen()
}
</script>

<template>
  <Galleria
    ref="galleria"
    v-model:activeIndex="activeIndex"
    :value="images"
    :num-visible="5"
    :container-style="fullScreen
      ? 'position: fixed; inset: 0; z-index: 1000000; width: 100vw; height: 100vh; max-width: none; margin: 0; background: #000;'
      : 'width: 100%; max-width: 640px; margin: 0 auto;'"
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
    <template v-if="fullScreen" #header>
      <button
        type="button"
        aria-label="Fermer"
        class="absolute right-3 top-3 z-10 h-11 w-11 flex items-center justify-center rounded-full bg-black bg-opacity-60 text-white transition-colors hover:bg-opacity-80"
        @click.stop="toggleFullScreen"
      >
        <i class="pi pi-times" style="font-size: 1.25rem" />
      </button>
    </template>
    <template #item="slotProps">
      <div
        class="group relative block w-full touch-pan-y select-none overflow-hidden"
        :class="[!fullScreen ? 'aspect-4/3 sm:aspect-5/4' : 'h-full w-full flex items-center justify-center']"
        @mouseover="hoveredStates[slotProps.index] = true"
        @mouseout="hoveredStates[slotProps.index] = false"
        @click="onItemClick"
        @touchstart.passive="onTouchStart"
        @touchend="onTouchEnd"
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
