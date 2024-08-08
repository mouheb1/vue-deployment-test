<script setup lang="ts">
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
const showDescription = ref(true)

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

const openFullScreen = () => {
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

const hoveredStates = ref(props.images.map(() => false))

const mouseoverHandler = (slotPropsIndex: number) => {
  hoveredStates[slotPropsIndex] = true
  showDescription.value = true
}

const mouseoutHandler = (slotPropsIndex: number) => {
  hoveredStates[slotPropsIndex] = false
  showDescription.value = false
}

onMounted(() => {
  bindDocumentListeners()
})

// Create a reactive array to store hover states for each image
</script>

<template>
  <Galleria
    ref="galleria"
    v-model:activeIndex="activeIndex"
    :value="images"
    :num-visible="5"
    container-style="max-width: 640px"
    :show-thumbnails="fullScreen"
    :show-item-navigators="fullScreen"
    :show-item-navigators-on-hover="fullScreen"
    :circular="true"
    :responsive-options="responsiveOptions"
    :pt="{
      root: {
        class: [{ 'flex flex-column': fullScreen }],
      },
      content: {
        class: ['relative', { 'flex-1 justify-content-center': fullScreen }],
      },
      thumbnailwrapper: 'absolute w-full left-0 bottom-0',
    }"
  >
    <template #item="slotProps">
      <div
        class="relative inline-block h-80 w-100 overflow-hidden duration-900 hover:cursor-pointer"
        @mouseover="(slotProps) => mouseoverHandler(slotProps.index)"
        @mouseout="(slotProps) => mouseoutHandler(slotProps.index)"
        @click="toggleFullScreen"
      >
        <div
          class="overflow-hidden duration-600 hover:scale-95"
          :style="showDescription ? { height: '15rem' } : ''"
        >
          <img
            :src="slotProps.item.itemImageSrc"
            :alt="slotProps.item.alt"
            :style="[
              {
                width: !fullScreen ? '100%' : '',
                display: !fullScreen ? 'block' : '',
              },
            ]"
            class="h-80 w-100 cursor-pointer object-cover grayscale duration-900 hover:scale-120 hover:grayscale-0"
          >
        </div>
        <div class="absolute left-0 top-0 h-full w-full flex cursor-pointer items-center justify-center bg-black bg-opacity-40">
          <i
            v-if="hoveredStates[slotProps.index] && !fullScreen"
            class="pi animate pi-eye animate-shock animate-duration-300 cursor-pointer color-white"
            style="font-size: 1.2rem"
            @click="toggleFullScreen"
          />
        </div>
      </div>
    </template>
    <template #thumbnail="slotProps">
      <div class="grid-nogutter justify-content-center relative grid">
        <img
          :src="slotProps.item.thumbnailImageSrc"
          :alt="slotProps.item.alt"
          style="display: block"
        >
      </div>
    </template>
    <template #footer>
      <div v-if="fullScreen" class="align-items-center bg-black-alpha-90 flex text-white">
        <Button
          icon="pi pi-list"
          :pt="{
            root: {
              class:
                'border-none border-noround hover:bg-white-alpha-10 text-white',
              style: 'background: transparent',
            },
          }"
          @click="onThumbnailButtonClick"
        />
        <span v-if="images" class="title-container">
          <span class="p-3 text-sm">{{ activeIndex + 1 }}/{{ images.length }}</span>
          <span class="p-3 text-sm font-bold">{{
            images[activeIndex].title
          }}</span>
          <span class="p-3 text-sm">{{ images[activeIndex].alt }}</span>
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
