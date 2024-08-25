<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { Image } from '@unpic/vue'
import { contact, general } from '@/assets/json/config.json'

const globalStore = useGlobalStore()
const { hasScrolled, isMobile, isAtHomePage } = storeToRefs(globalStore)
const router = useRouter()

const goHome = () => {
  router.push({ path: '/' })
}
</script>

<template>
  <div class="m-x-6 mb-4 flex items-center justify-between">
    <CustomMenuBar
      v-if="isMobile"
      breakpoint="9999px"
      class="absolute left-5 top-6 w-[60%]"
    />
    <Image
      :src="`${general.imageProviderBaseUrl}/images/logo.png`"
      alt="Delta Logo"
      class="z-100 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] !w-16 hover:cursor-pointer"
      :class="[isMobile ? 'ml-10' : '']"
      @click="goHome()"
    />
    <div class="flex items-center gap-x-7">
      <div
        v-if="!isMobile"
        class="flex items-center gap-x-2"
      >
        <PhoneIcon
          fill="#003f5e"
          :width="1.5"
        />
        <a
          :href="contact.whatsapp"
          target="_blank"
        >
          <Button
            :label="contact.phone"
            link
            class="p-0 font-extrabold"
            :class="[hasScrolled || !isAtHomePage ? 'text-black' : 'text-white']"
          />
        </a>
      </div>
      <SocialLinks :fill="hasScrolled || !isAtHomePage ? 'color-[#003f5e]' : 'color-white'" />
      <LocationButton v-if="!isMobile" />
    </div>
  </div>
</template>
