<script setup lang="ts">
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { pergolas } from '@/assets/json/products.json'
import { pergolas as pergolasImages } from '@/assets/json/scrollingImages.json'
import {
  animateSection,
} from '@/utils/animations/section'

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

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

onMounted(() => {
  const canvas = document.getElementById('pergolas') as HTMLCanvasElement
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

  const frameCount = pergolasImages.length
  const images: HTMLImageElement[] = []

  pergolasImages.forEach((src: string, index: number) => {
    const img = new Image()
    img.src = src
    images[index] = img
  })

  const pergolas = {
    frame: 0,
  }

  gsap.to(pergolas, {
    frame: frameCount - 1,
    snap: 'frame',
    ease: 'none',
    scrollTrigger: {
      trigger: '.canvas-container',
      start: 'top 150',
      end: '+=7000',
      markers: true,
      pin: true,
      scrub: 0.1,
    },
    onUpdate: render, // use animation onUpdate instead of scrollTrigger's onUpdate
  })

  images[0].onload = render

  function render() {
    context.clearRect(0, 0, canvas.width, canvas.height)
    context.drawImage(images[pergolas.frame], 0, 0)
  }
})
</script>

<template>
  <div
    class="relative top-0 h-125 bg-cover bg-center bg-no-repeat bg-pergolas-image before:absolute before:inset-0 before:bg-black before:opacity-40 before:content-['']"
  >
    <div
      class="relative top-37 mx-10 text-4xl text-white font-extrabold leading-17 text-shadow-lg -left-1 md:top-70 sm:top-50 md:mx-30 lg:text-5xl lg:leading-20"
    >
      Pergolas
    </div>
  </div>
  <div
    class="style1 font-poppins mb-14 border-b-2 border-gray-200 border-solid"
  >
    <div class="max-w-[1100px]">
      <p>
        <span class="text-lg text-gray-500">Fabriquées en aluminium durable et résistant, les pergolas sont un
          complément fonctionnel de jardin ou de terrasse. Elles peuvent
          constituer des structures de jardin indépendantes ou adjacentes au
          bâtiment. Le toit de la pergola est formé de lames mobiles orientables
          ce qui permet de créer un toit plat ou de l'ouvrir et de laisser
          entrer la lumière à travers. Avec une pergola, vous pouvez créer un
          bel espace de détente ou même un substitut de jardin d'hiver.</span>
      </p>
    </div>
  </div>

  <div v-for="(pergola, index) in pergolas" :key="pergola.id">
    <productTwoCols
      :ref="`section${index}`"
      v-intersection-observer="animateSection"
      :image="pergola.image"
      :title="pergola.name"
      :description="pergola.description"
      :link="pergola.link"
      class="section"
    />
  </div>

  <div class="canvas-container relative">
    <canvas id="pergolas" />
    <p
      class="font-poppins absolute left-35 top-30 max-w-60 text-left text-sm text-gray-500 tracking-wider"
    >
      Un système d'automatisation météorologique composé de capteurs de pluie,
      de température, de vent et de neige.
      <span
        class="underline-effect absolute left-0 top-30 h-0.2 w-60 bg-gray-200"
      />
    </p>
    <p
      class="font-poppins absolute left-370 top-35 max-w-60 text-left text-sm text-gray-500 tracking-wider"
    >
      Pilotage des lames à l'aide d'une télécommande ou d'une application
      smartphone.
      <span
        class="underline-effect absolute left-0 top-20 h-0.2 w-60 bg-gray-200 after:right-[240px]"
      />
    </p>
    <p
      class="font-poppins absolute left-35 top-100 max-w-60 text-left text-sm text-gray-500 tracking-wider"
    >
      Profilés en aluminium vernis dans la norme Qualicoat avec une protection
      supplémentaire dans la technologie SeaSide
      <span
        class="underline-effect absolute left-0 top-25 h-0.2 w-60 bg-gray-200"
      />
    </p>
    <p
      class="font-poppins absolute left-370 top-110 max-w-60 text-left text-sm text-gray-500 tracking-wider"
    >
      Système intégré de drainage du toit.
      <span
        class="underline-effect absolute left-0 top-15 h-0.2 w-60 bg-gray-200 after:right-[240px]"
      />
    </p>
  </div>

  <div class="h-1750 bg-white" />
</template>

<style scoped>
canvas {
  max-width: 100vw;
  max-height: 100vh;
}

.canvas-container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.style1 {
  font-size: 14px;
  line-height: 25.9px;
  border: 0;
  margin: 0 auto;
  padding: 80px;
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
