<script setup lang="ts">
import { isActiveNavItem } from '@/utils/helpers'

const { t } = useI18n()
const route = useRoute()

const items = ref([
  {
    index: 1,
    label: t('components.navBar.item1'),
  },
  {
    index: 2,
    label: t('components.navBar.item2'),
  },
  {
    index: 3,
    label: t('components.navBar.item3'),
    items: [
      {
        label: t('components.navBar.subItem31'),
      },
      {
        label: t('components.navBar.subItem32'),
      },
    ],
  },
  {
    index: 4,
    label: t('components.navBar.item4'),
  },
  {
    index: 5,
    label: t('components.navBar.item5'),
  },
  {
    index: 6,
    label: t('components.navBar.item6'),
  },
  {
    index: 7,
    label: t('components.navBar.item7'),
  },
  {
    index: 8,
    label: t('components.navBar.item8'),
  },
  {
    index: 9,
    label: t('components.navBar.item9'),
  },
])
</script>

<template>
  <div class="bg-transparent-menu-bar">
    <Menubar
      :model="items"
      class="border-none bg-transparent hover:bg-transparent"
    >
      <template #item="{ item, props, root }">
        <a
          v-ripple
          class="align-items-center flex border-x-0 border-t-0 border-[#003f5e] border-solid"
          :class="[isActiveNavItem(item.index, route.path) ? 'border-b-1' : 'border-b-0']"
          v-bind="props.action"
        >
          <span :class="item.icon" />
          <span class="ml-2 text-white">{{ item.label }}</span>
          <Badge
            v-if="item.badge"
            :class="{ 'ml-auto': !root, 'ml-2': root }"
            :value="item.badge"
          />
          <span
            v-if="item.shortcut"
            class="surface-border surface-100 border-round ml-auto border-1 p-1 text-xs"
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
