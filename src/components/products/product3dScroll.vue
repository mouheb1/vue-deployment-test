<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { animateSection } from '@/utils/animations/section'

const props = defineProps({
  canvasImagesPath: {
    type: String,
    default: '',
  },
  scrollDetails: {
    type: Array as PropType<string[]>,
    default: () => [],
  },
  frameCount: {
    type: Number,
    default: 0,
  },
  bottomSpacing: {
    type: String,
    default: 'h-1750',
  },
  imageType: {
    type: String,
    default: 'jpg',
  },
  pin: {
    type: Boolean,
    default: true,
  },
  canvasStyle: {
    type: String,
    default: '',
  },
})

// IntersectionObserver directive
const intersectionObserver = new IntersectionObserver(animateSection, {
  threshold: 0.1, // Trigger when 10% of the element is visible
})

const vIntersectionObserver = {
  mounted(el: Element) {
    intersectionObserver.observe(el)
  },
  unmounted(el: Element) {
    intersectionObserver.unobserve(el)
  },
}

const globalStore = useGlobalStore()
const { isMobile } = storeToRefs(globalStore)

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const startCanvasAnimation = () => {
  const canvas = document.getElementById('canvasElement') as HTMLCanvasElement
  if (!canvas) {
    console.error('Canvas element not found')
    return
  }

  const context = canvas.getContext('2d') as CanvasRenderingContext2D
  if (!context) {
    console.error('Failed to get canvas context')
    return
  }

  canvas.width = 1920
  canvas.height = 1080

  const images = ref<HTMLImageElement[]>([])

  const loadImage = (index: number): Promise<HTMLImageElement> => {
    return new Promise((resolve, reject) => {
      const img = new Image()
      img.src = `${props.canvasImagesPath}${String(index).padStart(2, '0')}.${props.imageType}`

      img.onload = () => resolve(img)
      img.onerror = reject
    })
  }

  // Load images sequentially to ensure order
  const loadImagesSequentially = async () => {
    for (let i = 1; i <= props.frameCount; i++) {
      try {
        const img = await loadImage(i)
        images.value.push(img)
        if (i === 1) {
          render() // Render the first image as soon as it loads
        }
      }
      catch (error) {
        console.error(`Failed to load image ${i}:`, error)
      }
    }
  }

  const canvasElement = {
    frame: 0,
  }

  gsap.to(canvasElement, {
    frame: props.frameCount - 1,
    snap: 'frame',
    ease: 'none',
    scrollTrigger: {
      trigger: '.canvas-container',
      start: isMobile.value ? 'top 20' : 'top 150',
      end: '+=7000',
      markers: true,
      pin: props.pin,
      scrub: 0.1,
    },
    onUpdate: render,
  })

  function render() {
    context.clearRect(0, 0, canvas.width, canvas.height)
    if (images.value[canvasElement.frame]) {
      context.drawImage(images.value[canvasElement.frame], 0, 0)
    }
  }

  loadImagesSequentially()
}

onMounted(() => {
  // Temporary fix: delay rendering
  setTimeout(() => {
    startCanvasAnimation()
  }, 1000)
})
</script>

<template>
  <div
    class="canvas-container grid mx-auto mb-20 w-[80%] content-center md:relative md:mb-0 md:w-full"
  >
    <canvas id="canvasElement" :class="canvasStyle" />
    <div
      class="grid grid-cols-1 mx-auto max-w-70 justify-items-start gap-y-12 md:m-0 md:block md:w-full md:gap-y-0"
    >
      <p
        v-intersection-observer="animateSection"
        class="section font-poppins relative text-left text-sm text-gray-500 tracking-wider md:absolute md:left-[5%] md:top-30 md:max-w-60"
      >
        {{ scrollDetails && scrollDetails[0] }}
        <span
          class="underline-effect absolute left-0 top-23 h-0.2 w-60 bg-gray-200 after:right-[240px] md:top-30 md:after:right-[-23px]"
        />
      </p>
      <p
        v-intersection-observer="animateSection"
        class="section font-poppins relative text-left text-sm text-gray-500 tracking-wider md:absolute md:left-[80%] md:top-35 md:max-w-60"
      >
        {{ scrollDetails && scrollDetails[1] }}
        <span
          class="underline-effect absolute left-0 top-18 h-0.2 w-60 bg-gray-200 after:right-[240px] md:top-20"
        />
      </p>
      <p
        v-intersection-observer="animateSection"
        class="section font-poppins relative text-left text-sm text-gray-500 tracking-wider md:absolute md:left-[5%] md:top-100 md:max-w-60"
      >
        {{ scrollDetails && scrollDetails[2] }}
        <span
          class="underline-effect absolute left-0 top-23 h-0.2 w-60 bg-gray-200 after:right-[240px] md:top-25 md:after:right-[-23px]"
        />
      </p>
      <p
        v-intersection-observer="animateSection"
        class="section font-poppins relative text-left text-sm text-gray-500 tracking-wider md:absolute md:left-[80%] md:top-110 md:max-w-60"
      >
        {{ scrollDetails && scrollDetails[3] }}
        <span
          class="underline-effect absolute left-0 top-8 h-0.2 w-60 bg-gray-200 after:right-[240px] md:top-15"
        />
      </p>
    </div>
  </div>
  <div class="bg-white" :class="bottomSpacing" />
</template>

<style scoped>
canvas {
  max-width: 100vw;
  max-height: 100vh;
}

.canvas-container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.font-poppins {
  font-family: 'Poppins', sans-serif;
}

.underline-effect::after {
  display: block;
  position: absolute;
  bottom: -10px;
  right: -23px;
  content: '';
  width: 20px;
  height: 20px;
  border: 2px solid #00aeef;
  border-radius: 50%;
}
</style>
