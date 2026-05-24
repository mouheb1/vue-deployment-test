<script setup lang="ts">
const props = defineProps({
  images: {
    type: Array as () => Array<{
      itemImageSrc: string
      thumbnailImageSrc: string
      alt: string
      title: string
    }>,
    default: () => [],
  },
})

const activeIndex = ref(0)
const fullScreen = ref(false)
const total = computed(() => props.images.length)
const hasMany = computed(() => total.value > 1)

const goTo = (i: number) => {
  if (total.value === 0)
    return
  activeIndex.value = ((i % total.value) + total.value) % total.value
}
const next = () => goTo(activeIndex.value + 1)
const prev = () => goTo(activeIndex.value - 1)

// Preload originals once so swiping in the lightbox is instant.
const fullImagesPreloaded = ref(false)
const preloadFullImages = () => {
  if (fullImagesPreloaded.value || typeof window === 'undefined')
    return
  fullImagesPreloaded.value = true
  props.images.forEach((img) => {
    const p = new window.Image()
    p.src = img.itemImageSrc
  })
}

const toggleFullScreen = () => {
  if (!fullScreen.value)
    preloadFullImages()
  fullScreen.value = !fullScreen.value
}

const onKeyDown = (e: KeyboardEvent) => {
  if (!fullScreen.value)
    return
  if (e.key === 'Escape')
    fullScreen.value = false
  else if (e.key === 'ArrowRight')
    next()
  else if (e.key === 'ArrowLeft')
    prev()
}

watch(fullScreen, (open) => {
  if (typeof document === 'undefined')
    return
  document.body.style.overflow = open ? 'hidden' : ''
})

onMounted(() => document.addEventListener('keydown', onKeyDown))
onUnmounted(() => {
  if (typeof document === 'undefined')
    return
  document.removeEventListener('keydown', onKeyDown)
  document.body.style.overflow = ''
})

// Finger-tracked swipe. Track translates in real time during touchmove,
// snaps to the nearest slide on release if the drag passes SNAP_RATIO.
const SNAP_RATIO = 0.18
const isDragging = ref(false)
const dragOffset = ref(0)
const trackWidth = ref(0)
const startX = ref(0)
const startY = ref(0)
const lockedAxis = ref<'x' | 'y' | null>(null)
const inlineTrackRef = ref<HTMLElement | null>(null)
const fullscreenTrackRef = ref<HTMLElement | null>(null)
const swipeJustHandled = ref(false)

const getTrack = () =>
  fullScreen.value ? fullscreenTrackRef.value : inlineTrackRef.value

const onTouchStart = (e: TouchEvent) => {
  if (total.value < 2)
    return
  const t = e.touches[0]
  startX.value = t.clientX
  startY.value = t.clientY
  trackWidth.value = getTrack()?.offsetWidth ?? 0
  isDragging.value = true
  dragOffset.value = 0
  lockedAxis.value = null
}

const onTouchMove = (e: TouchEvent) => {
  if (!isDragging.value)
    return
  const t = e.touches[0]
  const dx = t.clientX - startX.value
  const dy = t.clientY - startY.value
  if (lockedAxis.value == null && Math.abs(dx) + Math.abs(dy) > 8)
    lockedAxis.value = Math.abs(dx) > Math.abs(dy) ? 'x' : 'y'
  if (lockedAxis.value === 'y') {
    isDragging.value = false
    dragOffset.value = 0
    return
  }
  dragOffset.value = dx
}

const finishSwipe = () => {
  if (!isDragging.value)
    return
  const dx = dragOffset.value
  isDragging.value = false
  dragOffset.value = 0
  if (!trackWidth.value || total.value < 2)
    return
  if (Math.abs(dx) / trackWidth.value > SNAP_RATIO) {
    // Suppress the synthetic click that fires after touchend so a swipe
    // doesn't also toggle the lightbox.
    swipeJustHandled.value = true
    setTimeout(() => (swipeJustHandled.value = false), 350)
    if (dx < 0)
      next()
    else
      prev()
  }
}

const trackStyle = computed(() => {
  const dragPct
    = isDragging.value && trackWidth.value > 0
      ? (dragOffset.value / trackWidth.value) * 100
      : 0
  const offsetPct = -activeIndex.value * 100 + dragPct
  return {
    transform: `translate3d(${offsetPct}%, 0, 0)`,
    transition: isDragging.value
      ? 'none'
      : 'transform 320ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  }
})

const onItemClick = () => {
  if (swipeJustHandled.value)
    return
  toggleFullScreen()
}
</script>

<template>
  <div class="group relative mx-auto max-w-[640px] w-full">
    <div
      ref="inlineTrackRef"
      class="relative aspect-4/3 w-full touch-pan-y select-none overflow-hidden sm:aspect-5/4"
      @click="onItemClick"
      @touchstart.passive="onTouchStart"
      @touchmove.passive="onTouchMove"
      @touchend="finishSwipe"
      @touchcancel="finishSwipe"
    >
      <div class="h-full w-full flex will-change-transform" :style="trackStyle">
        <div
          v-for="(img, idx) in images"
          :key="`inline-${idx}`"
          class="h-full w-full shrink-0"
        >
          <img
            :src="img.itemImageSrc"
            :alt="img.alt"
            class="block h-full w-full object-cover"
            draggable="false"
            :loading="idx === 0 ? 'eager' : 'lazy'"
            decoding="async"
          >
        </div>
      </div>
      <span
        v-if="hasMany"
        class="pointer-events-none absolute bottom-2 left-2 rounded-full bg-black bg-opacity-50 px-2 py-0.5 text-xs text-white tabular-nums"
      >
        {{ activeIndex + 1 }} / {{ total }}
      </span>
      <span
        class="pointer-events-none absolute right-2 top-2 h-9 w-9 flex items-center justify-center rounded-full bg-black bg-opacity-50 text-white opacity-90 transition-opacity md:opacity-0 md:group-hover:opacity-90"
      >
        <i class="pi pi-eye" style="font-size: 1rem" />
      </span>
    </div>
  </div>

  <Teleport to="body">
    <div
      v-if="fullScreen"
      class="fixed inset-0 z-[1000000] flex flex-col bg-black"
    >
      <div class="z-10 flex items-center justify-between px-3 py-2 text-white">
        <span class="text-sm tabular-nums">{{ activeIndex + 1 }} / {{ total }}</span>
        <button
          type="button"
          aria-label="Fermer"
          class="h-11 w-11 flex items-center justify-center rounded-full bg-white bg-opacity-10 transition-colors hover:bg-opacity-20"
          @click="toggleFullScreen"
        >
          <i class="pi pi-times" style="font-size: 1.25rem" />
        </button>
      </div>
      <div
        ref="fullscreenTrackRef"
        class="relative flex-1 touch-pan-y select-none overflow-hidden"
        @touchstart.passive="onTouchStart"
        @touchmove.passive="onTouchMove"
        @touchend="finishSwipe"
        @touchcancel="finishSwipe"
      >
        <div class="h-full w-full flex will-change-transform" :style="trackStyle">
          <div
            v-for="(img, idx) in images"
            :key="`fs-${idx}`"
            class="h-full w-full flex shrink-0 items-center justify-center p-3"
          >
            <img
              :src="img.itemImageSrc"
              :alt="img.alt"
              class="block max-h-full max-w-full object-contain"
              draggable="false"
              decoding="async"
            >
          </div>
        </div>
        <button
          v-if="hasMany"
          type="button"
          aria-label="Précédent"
          class="absolute left-3 top-1/2 hidden h-12 w-12 items-center justify-center rounded-full bg-white bg-opacity-10 text-white transition-colors md:flex -translate-y-1/2 hover:bg-opacity-20"
          @click="prev"
        >
          <i class="pi pi-chevron-left" style="font-size: 1.25rem" />
        </button>
        <button
          v-if="hasMany"
          type="button"
          aria-label="Suivant"
          class="absolute right-3 top-1/2 hidden h-12 w-12 items-center justify-center rounded-full bg-white bg-opacity-10 text-white transition-colors md:flex -translate-y-1/2 hover:bg-opacity-20"
          @click="next"
        >
          <i class="pi pi-chevron-right" style="font-size: 1.25rem" />
        </button>
      </div>
      <div v-if="images[activeIndex]" class="px-3 py-2 text-white">
        <div class="text-sm font-semibold">
          {{ images[activeIndex].title }}
        </div>
        <div class="wrap-break-word text-xs opacity-80">
          {{ images[activeIndex].alt }}
        </div>
      </div>
    </div>
  </Teleport>
</template>
