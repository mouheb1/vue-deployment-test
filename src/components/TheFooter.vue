<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { contact } from '@/assets/json/config.json'

const globalStore = useGlobalStore()
const { isAtContactPage } = storeToRefs(globalStore)
</script>

<template>
  <footer
    class="mx-auto box-border overflow-hidden border-0 border-t-1 border-black border-opacity-25 border-solid bg-white text-black"
  >
    <div
      v-if="!isAtContactPage "
      class="min-h-80 flex flex-col items-center justify-around pb-15 pt-20 text-center text-sm md:flex-row md:items-start md:text-left"
    >
      <div class="p-5">
        <img
          src="/images/logo.png"
          alt="Delta Logo"
          class="h-auto w-28"
        >
      </div>

      <div class="p-5">
        <div class="my-2.5 block tracking-[6px]">
          NOUS TROUVER
        </div>
        <div class="mb-2.5 block">
          {{ contact.address.city }} <br>
          {{ contact.address.street }}
        </div>

        <LocationButton />
      </div>

      <div class="flex flex-col items-center p-5 md:block">
        <div class="my-2.5 block tracking-[6px]">
          NOUS CONTACTER
        </div>
        <div class="block">
          {{ contact.email }}
        </div>
        <a
          :href="contact.whatsapp"
          target="_blank"
        >
          <Button
            label="+216 98 405 053"
            link
            class="mb-5 p-0 text-[#003f5e]"
          />
        </a>
        <div class="my-2.5 block tracking-[6px]">
          NOUS SUIVRE:
        </div>
        <SocialLinks />
      </div>
    </div>
    <div
      v-else
      class="h-15"
    />

    <div
      class="mx-10 flex justify-between border-0 border-t-1 border-black border-opacity-25 border-solid py-2.5 text-xs"
    >
      <div class="flex justify-around gap-x-5 py-[7px]">
        <span>Gestion des cookies</span>
        <span>Informations complémentaires</span>
        <span>Mentions légales</span>
        <span>Politique de confidentialité</span>
        <span><img
          src="/rss.svg"
          alt="rss"
          class="w-2.5"
        > Flux RSS</span>
      </div>

      <a
        href="https://www.incentino.com/"
        class="flex items-center gap-x-2 py-[7px]"
        target="_blank"
      >
        <span>Powered by</span> <img src="/logo-incentino.png" alt="Incentino inc." class="mr-8 w-24 grayscale hover:grayscale-0">
      </a>
    </div>
  </footer>
</template>
