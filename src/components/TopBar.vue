<script setup lang="ts">
defineProps({
  hasScrolled: {
    type: Boolean,
    default: false,
  },
})

const contact = ref({
  phone: '+216 98 405 053',
})
</script>

<template>
  <div class="m-x-6 mb-4 flex items-center justify-between">
    <img
      src="/images/logo.png"
      alt="Delta Logo"
      class="w-16"
    >
    <div class="flex items-center gap-x-2">
      <PhoneIcon
        fill="#003f5e"
        :width="1.5"
      />
      <a
        href="https://wa.me/21698405053"
        target="_blank"
      >
        <Button
          :label="contact.phone"
          link
          class="p-0 font-extrabold"
          :class="[hasScrolled ? 'text-black' : 'text-white']"
        />
      </a>
    </div>
  </div>
</template>
