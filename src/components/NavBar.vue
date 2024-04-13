<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { isActiveNavItem } from '@/utils/helpers'
import { navElements } from '@/assets/json/config.json'

const route = useRoute()
const globalStore = useGlobalStore()
const { hasScrolled } = storeToRefs(globalStore)
</script>

<template>
  <div class="bg-transparent-menu-bar box-border">
    <Menubar
      :mobile-active="false"
      :model="navElements"
      breakpoint="768px"
      class="border-none bg-transparent hover:bg-transparent"
    >
      <template #item="{ item, props }">
        <router-link
          v-slot="{ href, navigate }"
          :to="item.route"
          custom
        >
          <a
            v-ripple
            class="nav-underline flex items-center justify-center"
            :style="isActiveNavItem(item.index, route.path) ? { 'background-size': '60% 3px' } : { }"
            v-bind="props.action"
            :href="href"
            @click="navigate"
          >

            <span
              class="ml-0"
              :class="[hasScrolled ? 'text-black' : 'md:text-white']"
            >{{ item.label }}</span>
          </a>
        </router-link>
      </template>
      <template #menubuttonicon="">
        <i
          class="pi pi-bars color-white hover:color-[#003f5e]"
          style="font-size: 1rem"
        />
      </template>
    </Menubar>
  </div>
</template>

<style>
.p-menuitem-content {
  background-color: transparent !important;
}

.nav-underline {
  border-bottom-width: 0;
  background-image: linear-gradient(transparent, transparent),
    linear-gradient(#003f5e, #003f5e);
  background-size: 0 3px;
  background-position: center bottom;
  background-repeat: no-repeat;
  transition: background-size 0.5s ease-in-out;
}

.nav-underline:hover {
  background-size: 60% 3px;
}
</style>
