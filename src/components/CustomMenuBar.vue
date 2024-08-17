<script setup lang="ts">
import { storeToRefs } from 'pinia'
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

let intv = 0
let ctx = {}

const enter = (event, instance, context) => {
  if (isMobile.value)
    return

  ctx = context

  clearTimeout(intv)
  if (context && !context.item.level && !context.active) {
    intv = setTimeout(() => {
      instance.onItemClick(event, context.item)
    }, 100)
  }
}

const leave = (event, instance, context) => {
  if (isMobile.value)
    return

  clearTimeout(intv)
  if (!context || (!context.item.level && context.active)) {
    intv = setTimeout(() => {
      instance.onItemClick(event, (context || ctx).item)
      instance.$emit('blur')
    }, 100)
  }
}
</script>

<template>
  <div>
    <Menubar
      :model="navElements"
      :breakpoint="breakpoint"
      :auto-display="false"
      class="border-none bg-transparent hover:bg-transparent"
      :pt="{
        content: ({ instance, context }) => ({
          onmouseenter: (event: any) => enter(event, instance, context),
          onmouseleave: (event: any) => leave(event, instance, context),
        }),

      }"
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
            :style="route.path === item.route ? { 'background-size': '60% 3px' } : {}"
            v-bind="props.action"
            :href="href"
            @click="navigate"
          >

            <span
              class="ml-0 text-center"
              :class="[(hasScrolled || !isAtHomePage) && !item.isChild ? 'text-black' : 'text-[#334155] md:text-white', item.isChild ? 'text-white' : '']"
            >{{ item.label }}
              <i
                v-if="item.isChild && item.items && item.items.length "
                class="pi pi-chevron-right"
                style="font-size: 0.5rem"
              />
            </span>
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

<style>
.p-submenu-list {
  display: none !important;
}

.p-submenu-list:hover {
  display: block !important;
}
</style>
