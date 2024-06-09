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
  loading: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['click'])
</script>

<template>
  <Button
    :type="type"
    class="h-12.5 w-24 border-2 rounded-none bg-transparent px-5 py-[13.3333px] text-sm font-semibold"
    :class="[theme === 'alternative' ? 'border-[#003f5e] text-[#003f5e]' : 'border-white text-white']"
    @click="emit('click')"
  >
    <ProgressSpinner
      v-if="loading"
      stroke-width="4"
      class="h-10 w-10"
    />
    <slot v-else>
      Envoyer
    </slot>
  </Button>
</template>
