<script setup lang="ts">
import { isActiveNavItem } from '@/utils/helpers'

defineProps({
  hasScrolled: {
    type: Boolean,
    default: false,
  },
})

const route = useRoute()

const items = ref([
  {
    index: 1,
    label: 'Accueil',
  },
  {
    index: 2,
    label: 'Fenêtres & baies vitrées',
  },
  {
    index: 3,
    label: 'Volets alu & occultants',
    items: [
      {
        label: 'Volets roulants',
      },
      {
        label: 'BSO',
      },
    ],
  },
  {
    index: 5,
    label: 'Garde corps minimaliste',
  },
  {
    index: 6,
    label: 'Portes & portails alu',
  },
  {
    index: 7,
    label: 'Nos réalisations',
  },
  {
    index: 9,
    label: 'Contact',
  },
])
</script>

<template>
  <div class="bg-transparent-menu-bar box-border">
    <Menubar
      :model="items"
      breakpoint="768px"
      class="border-none bg-transparent pb-0 hover:bg-transparent"
    >
      <template #item="{ item, props }">
        <a
          v-ripple
          class="flex items-center border-x-0 border-t-0 border-[#003f5e] border-solid"
          :class="[isActiveNavItem(item.index, route.path) ? 'border-b-2' : 'border-b-0']"
          v-bind="props.action"
        >
          <span
            class="ml-0"
            :class="[hasScrolled ? 'text-black' : 'md:text-white']"
          >{{ item.label }}</span>
        </a>
      </template>
    </Menubar>
  </div>
</template>

<style>
.p-menuitem-content {
  background-color: transparent !important;
}
</style>
