<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { isActiveNavItem } from '@/utils/helpers'
import { navElements } from '@/assets/json/config.json'

const route = useRoute()
const globalStore = useGlobalStore()
const { hasScrolled, isMobile } = storeToRefs(globalStore)
const hasMounted = ref(false)

onMounted(() => {
  hasMounted.value = true
})
</script>

<template>
  <div class="bg-transparent-menu-bar box-border">
    <Menubar
      v-if="hasMounted"
      :model="navElements"
      breakpoint="768px"
      :auto-display="false"
      class="border-none bg-transparent hover:bg-transparent"
    >
      <template #item="{ item, props }">
        <router-link
          v-slot="{ href, navigate }"
          :to="item.route || '/'"
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
              :class="[hasScrolled ? 'text-black' : 'text-[#334155] md:text-white']"
            >{{ item.label }}</span>
          </a>
        </router-link>
      </template>
      <template #menubutton="{ toggleCallback }">
        <i
          v-if="isMobile"
          class="pi pi-bars rounded-full p-2 duration-300 ease hover:cursor-pointer hover:bg-[#003f5e] hover:color-white"
          :class="[hasScrolled ? 'color-[#003f5e]' : 'color-white']"
          style="font-size: 1rem"
          @click="toggleCallback"
        />
      </template>
    </Menubar>
  </div>
</template>

<style>
.p-menuitem-content {
  background-color: transparent !important;
  color: white !important;
}

.p-menubar-root-list {
  display: revert-layer !important;
}

ul.p-submenu-list {
  background-color: #003f5e;
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
