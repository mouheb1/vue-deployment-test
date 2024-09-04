<script setup lang="ts">
import { guardrails as product } from '@/assets/json/products.json'
import { animateSection } from '@/utils/animations/section'
import { general } from '@/assets/json/config.json'

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
</script>

<template>
  <div
    class="relative top-0 h-75 bg-cover bg-center bg-no-repeat bg-guardrails-image before:absolute before:inset-0 md:h-125 before:bg-black before:opacity-40 before:content-['']"
  >
    <div
      class="relative top-40 mx-10 text-4xl text-white font-extrabold leading-17 text-shadow-lg -left-1 md:top-70 sm:top-50 md:mx-30 lg:text-5xl lg:leading-20"
    >
      {{ product.name }}
    </div>
  </div>
  <div
    class="style1 font-poppins mb-14 border-b-2 border-gray-200 border-solid"
  >
    <div class="max-w-[1100px]">
      <p>
        <span class="text-lg text-gray-500">{{ product.description }}</span>
      </p>
    </div>
  </div>

  <div v-for="(variation, index) in product.variations" :key="variation.id">
    <productTwoCols
      :ref="`section${index}`"
      v-intersection-observer="animateSection"
      :image="`${general.imageProviderBaseUrl}${variation.image}`"
      :title="variation.name"
      :description="variation.description"
      :link="variation.link"
      class="section"
    />
  </div>

  <product3dScroll
    :canvas-images-path="`${general.imageProviderBaseUrl}${product.scrollingImagesPath}`"
    :scroll-details="product.scrollDetails"
    :frame-count="61"
  />
</template>

<style scoped>
.style1 {
  font-size: 14px;
  line-height: 25.9px;
  border: 0;
  margin: 0 auto;
  padding: 80px;
}
</style>
