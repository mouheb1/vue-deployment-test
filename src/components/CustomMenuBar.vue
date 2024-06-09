<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { isActiveNavItem } from '@/utils/helpers'
import { navElements } from '@/assets/json/config.json'

defineProps({
  breakpoint: {
    type: String,
    default: '768px',
  },
})

const route = useRoute()
const globalStore = useGlobalStore()
const { hasScrolled, isMobile, isAtHomePage } = storeToRefs(globalStore)
</script>

<template>
  <div>
    <Menubar
      :model="navElements"
      :breakpoint="breakpoint"
      :auto-display="false"
      class="border-none bg-transparent hover:bg-transparent"
    >
      <template #item="{ item, props }">
        <router-link
          v-slot="{ href, navigate }"
          :to="item.route || '#'"
          custom
        >
          <a
            v-ripple
            class="nav-underline flex items-center justify-center"
            :style="isActiveNavItem(item.index, route.path) ? { 'background-size': '60% 3px' } : {}"
            v-bind="props.action"
            :href="href"
            @click="navigate"
          >

            <span
              class="ml-0"
              :class="[(hasScrolled || !isAtHomePage) && !item.isChild ? 'text-black' : 'text-[#334155] md:text-white', item.isChild ? 'text-white' : '']"
            >{{ item.label }}</span>
          </a>
        </router-link>
      </template>
      <template #menubutton="{ toggleCallback }">
        <i
          v-if="isMobile"
          class="pi pi-bars rounded-full p-2 duration-300 ease hover:cursor-pointer hover:bg-[#003f5e] hover:color-white"
          :class="[hasScrolled || !isAtHomePage ? 'color-[#003f5e]' : 'color-white']"
          style="font-size: 1rem"
          @click="toggleCallback"
        />
      </template>
    </Menubar>
  </div>
</template>
