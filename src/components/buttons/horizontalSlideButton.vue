<script setup lang="ts">
const props = defineProps({
  link: {
    type: String,
    default: '#',
  },
  title: {
    type: String,
    default: '',
  },
  customClass: {
    type: String,
    default: '',
  },
  hoverBgColor: {
    type: String,
    default: '',
  },
  openInNewTab: {
    type: Boolean,
    default: false,
  },
})

const computedClass = computed(() => {
  const defaultClass = 'swipe-hover-animation h-16 flex items-center justify-between bg-[#F1F4F8] px-7.5 text-[16px] color-[#003f5e] font-bold gap-x-4'
  return `${defaultClass} ${props.customClass}`
})

const hoverStyle = computed(() => ({
  '--hover-bg-color': props.hoverBgColor || '#f1f4f8',
}))
</script>

<template>
  <a
    :href="link"
    :title="title"
    :class="computedClass"
    :style="hoverStyle"
    :target="openInNewTab ? '_blank' : ''"
  >
    <slot>En savoir plus</slot>
  </a>
</template>

<style lang="scss">
$color: var(--hover-bg-color);

.swipe-hover-animation {
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
    background-color: $color;
    filter: brightness(95%); // Slightly darken
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
