<script setup lang="ts">
import { Image } from '@unpic/vue'
import { solarProtection } from '@/assets/json/products.json'
import { contact, general } from '@/assets/json/config.json'

const product = solarProtection.variations[1]
const route = useRoute()
const productVariation = product.variations && product.variations.find(variation => variation.link === route.path)
</script>

<template>
  <pageContainer :show-breadcrumb="true">
    <h2 class="mx-auto mb-10 text-4xl text-[#112337] font-extrabold md:mb-30 md:text-7xl">
      {{ productVariation?.name }}
    </h2>
    <div class="grid grid-cols-1 md:flex md:justify-center md:gap-x-40">
      <Image
        :src="`${general.imageProviderBaseUrl}${productVariation?.image}`"
        :alt="`${general.imageProviderBaseUrl}${productVariation?.image}`"
        height="600"
        width="600"
        layout="constrained"
      />
      <div>
        <productDetailsList :details="productVariation?.details" class="md:pl-10" />
        <horizontalSlideButton
          :link="contact.location"
          title="where to buy button"
          class="mt-15"
          custom-class="!color-white !bg-[#0066B3] !rounded-md mx-10 !md:mx-25 !h-25 !text-2xl"
          hover-bg-color="#0066B3"
          :open-in-new-tab="true"
        >
          Où acheter ?
          <i class="pi pi-map-marker color-white" style="font-size: 2rem" />
        </horizontalSlideButton>
      </div>
    </div>
    <div
      class="mx-10 my-14 text-left text-xl text-gray-400 font-extralight leading-12 md:mx-40 md:my-30"
    >
      {{ productVariation?.fullDescription }}
    </div>
  </pageContainer>
</template>
