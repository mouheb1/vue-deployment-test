<script setup lang="ts">
defineProps({
  details: {
    type: Array as PropType<string[]>,
    default: () => [],

  },
  customClass: {
    type: String,
    default: 'pi pi-check',
  },
})
</script>

<template>
  <ul class="m-0 mx-10 list-none p-0 md:mx-0">
    <li v-for="(detail, index) in details" :key="index" class="flex py-6 !border-0 !border-b-1 !border-gray-300 !border-solid">
      <i
        class="font-extrabold"
        :class="customClass"
        style="font-size: 1.5rem;color: #00AEEF;margin-right: 25px;"
      />
      <span>
        {{ detail }}
      </span>
    </li>
  </ul>
</template>
