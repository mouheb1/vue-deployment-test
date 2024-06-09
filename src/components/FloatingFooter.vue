<script setup lang="ts">
import { footerElements } from '@/assets/json/config.json'
</script>

<template>
  <ul
    class="absolute fixed bottom-0 z-100 m-0 max-h-min w-full flex list-none items-stretch justify-evenly bg-[#003f5ef2] bg-opacity-95 p-0 drop-shadow-md"
  >
    <li
      v-for="(element, index) of footerElements"
      :key="element.id"
      class="w-full border-0 border-white border-opacity-25 border-solid p-4 text-center text-white duration-300 ease hover:cursor-pointer hover:bg-[#002a3f]"
      :class="[(index === footerElements.length - 1) ? 'border-r-0' : 'border-r-1']"
    >
      <a
        :href="element.url"
        target="_blank"
        rel="noopener noreferrer"
        class="flex flex-col items-center justify-center gap-2.5 text-sm"
      >
        <i
          :class="`pi ${element.icon} color-white`"
          style="font-size: 1rem"
        />
        {{ element.title }}</a>
    </li>
  </ul>
</template>
