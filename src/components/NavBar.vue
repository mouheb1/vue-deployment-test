<script setup lang="ts">
import { isActiveNavItem } from '@/utils/helpers'

const route = useRoute()

const items = ref([
  {
    index: 1,
    label: 'Accueil',
  },
  {
    index: 2,
    label: 'Fenêtres & baies vitrées alu',
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
    index: 4,
    label: 'Menuiseries minimalistes',
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
    index: 8,
    label: 'Guide local',
  },
  {
    index: 9,
    label: 'Contact',
  },
])
</script>

<template>
  <div class="bg-transparent-menu-bar">
    <Menubar
      :model="items"
      class="border-none bg-transparent hover:bg-transparent"
    >
      <template #item="{ item, props }">
        <a
          v-ripple
          class="align-items-center flex border-x-0 border-t-0 border-[#003f5e] border-solid"
          :class="[isActiveNavItem(item.index, route.path) ? 'border-b-1' : 'border-b-0']"
          v-bind="props.action"
        >
          <span :class="item.icon" />
          <span class="ml-0 text-white">{{ item.label }}</span>
          <Badge
            v-if="item.badge"
            class="ml-0"
            :value="item.badge"
          />
          <span
            v-if="item.shortcut"
            class="surface-border surface-100 border-round ml-0 border-1 p-1 text-xs"
          >{{ item.shortcut }}</span>
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
