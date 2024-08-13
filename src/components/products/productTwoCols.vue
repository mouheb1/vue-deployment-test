<script setup lang="ts">
defineProps({
  image: {
    type: String,
    default: '/images/no-image.png',
  },
  title: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
  buttonText: {
    type: String,
    default: 'En savoir plus',
  },
  link: {
    type: String,
    default: '/',
  },
})
</script>

<template>
  <section class="grid grid-cols-1 mx-6 mb-14 items-center gap-x-24 border-0 border-b-2 border-gray-200 border-solid py-22 md:grid-cols-2">
    <a
      :href="link"
      :title
    ><img :src="image" :alt="image" class="max-h-[515px] w-full"></a>

    <div class="flex flex-col gap-y-2 pr-12.5 text-left">
      <h2 class="m-0 text-[42px] font-700">
        {{ title }}
      </h2>
      <p class="text-xl text-gray-500">
        {{ description }}
      </p>
      <p>
        <a :href="link" :title class="button h-16 max-w-fit flex items-center justify-center bg-[#F1F4F8] px-7.5 text-[16px] color-[#003f5e] font-bold uppercase">En savoir plus</a>
      </p>
    </div>
  </section>
</template>

<style lang="scss">
$color: #f1f4f8;

.button {
  transition: all 0.3s;
  position: relative;
  z-index: 1;
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: $color;
    z-index: -2;
  }
  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background-color: darken($color, 5%);
    transition: all 0.3s;
    z-index: -1;
  }
  &:hover {
    color: #fff;
    &:before {
      width: 100%;
    }
  }
}
</style>
