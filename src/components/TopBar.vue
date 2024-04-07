<script setup lang="ts">
const contact = ref({
  phone: '04 88 91 72 71',
})
</script>

<template>
  <div class="m-x-6 mb-4 flex items-center justify-between">
    <img src="/src/assets/logo.png" alt="Delta Logo" class="w-16">
    <div class="flex items-center gap-x-2">
      <PhoneIcon fill="#003f5e" :width="1.5" />
      <span class="color-white font-extrabold">
        {{ contact.phone }}
      </span>
    </div>
  </div>
</template>
