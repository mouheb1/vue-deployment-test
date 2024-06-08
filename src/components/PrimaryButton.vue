<script setup lang="ts">
defineProps({
  type: {
    type: String as PropType<'submit' | 'reset' | 'button' | undefined>,
    default: undefined,
  },
  theme: {
    type: String,
    default: 'default',
  },
})

const emit = defineEmits(['click'])
</script>

<template>
  <Button
    :type="type"
    class="hover-animation border-2 rounded-none bg-transparent px-5 py-[13.3333px] text-sm font-semibold duration-300 hover:bg-[#003f5e] hover:text-white"
    :class="[theme === 'alternative' ? 'border-[#003f5e] text-[#003f5e]' : 'border-white text-white']"
    @click="emit('click')"
  >
    <slot>Envoyer</slot>
  </Button>
</template>
