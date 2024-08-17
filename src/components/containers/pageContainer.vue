<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'

defineProps({
  showBreadcrumb: {
    type: Boolean,
    default: false,
  },
})

const route = useRoute()

const home = ref({
  icon: 'pi pi-home',
  url: '/',
})

const items = computed(() => {
  const paths = route.path.split('/').filter(item => item) // Remove empty strings

  return paths.map((item, index) => {
    const fullPath = `/${paths.slice(0, index + 1).join('/')}`
    return { label: item, url: fullPath }
  })
})
</script>

<template>
  <div class="font-poppins mx-auto mt-20 w-full px-5 font-14 md:mt-40">
    <Breadcrumb
      v-if="showBreadcrumb"
      :home="home"
      :model="items"
      class="ml-[3%] mt-10"
    />
    <slot />
  </div>
</template>

<style>
.font-poppins {
  font-family: 'Poppins', sans-serif;
}

.font-14 {
  font-size: 14px;
}
</style>
