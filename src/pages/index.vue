<script setup lang="ts">
defineOptions({
  name: 'IndexPage',
})

const images = ref([
  {
    itemImageSrc: 'src/assets/galleryImages/image-1.jpg',
    alt: 'Image 1',
  },
  {
    itemImageSrc: 'src/assets/galleryImages/image-2.jpg',
    alt: 'Image 2',
  },
  {
    itemImageSrc: 'src/assets/galleryImages/image-3.jpg',
    alt: 'Image 3',
  },
  {
    itemImageSrc: 'src/assets/galleryImages/image-4.jpg',
    alt: 'Image 4',
  },
])

const headlines = ref({
  up: 'STBN ALUMINIUM SUR-MESURE',
  down: 'Menuiserie aluminium minimaliste sur-mesure à Lyon',
})
</script>

<template>
  <div>
    <Galleria
      :value="images"
      :num-visible="5"
      :circular="true"
      :show-item-navigators="false"
      :show-thumbnails="false"
      :auto-play="true"
    >
      <template #item="slotProps">
        <img
          :src="slotProps.item.itemImageSrc"
          :alt="slotProps.item.alt"
          style="display: block;"
          class="h-screen min-h-screen min-w-full object-cover opacity-50"
        >
        <div class="absolute">
          <div class="mb-3 text-sm text-white tracking-[0.5em] uppercase">
            {{ headlines.up }}
          </div>
          <div class="text-6xl font-bold leading-20">
            {{ headlines.down }}
          </div>
        </div>
        <div class="absolute bottom-0 flex items-center justify-center">
          <div class="absolute mb-9 h-16 w-16 bg-black opacity-30" />
          <i
            class="pi pi-chevron-down z-1 mb-5 text-xs color-[#003f5e]"
            style="font-size: 1.5rem"
          />
        </div>
      </template>
    </Galleria>
  </div>
  <div class="flex flex-col bg-white">
    <section
      id="section-1"
      class="ml-20 w-142 py-20 text-left"
    >
      <div class="mb-3 text-sm text-[#003f5e] tracking-[0.5em] uppercase">
        STBN ALUMINIUM
      </div>
      <div class="text-5xl text-black font-bold leading-15">
        Fabricant installateur de menuiseries ALU haut de gamme sur la région de Lyon
      </div>
    </section>
    <section
      id="section-2"
      class="box-content flex justify-center pt-10"
    >
      <div
        class="mr-20 w-1/2 bg-cover bg-center bg-no-repeat"
        style="background-image: url('src/assets/galleryImages/image-1.jpg');"
      />
      <div class="mr-20 w-1/2 flex flex-col items-center text-justify">
        <div class="w-155 flex flex-col px-20 pr-30">
          <div class="mb-3 mb-5 pt-20 text-left text-2xl text-black font-normal tracking-[0.01em] uppercase">
            MENUISERIE ALUMINIUM À LYON
          </div>
          <div class="text-[14px] text-black leading-7">
            <span> STBN Menuiserie Aluminium, est un </span>
            <b>fabricant de menuiserie aluminium à Lyon et Rhône-alpes.</b>
            <br>
            <br>
            <span>Entreprise familiale, STBN <strong>Menuiserie Aluminium</strong> est <strong>spécialiste de menuiseries
              en aluminium sur-mesure.</strong> Fabriquées dans notre atelier, nous installons nos <strong>menuiseries
              alu sur-mesure haut de gamme</strong> en région Rhône-Alpes, principalement dans l’Ain (01) et autour de
              <strong>Valence, Vienne 38, Grenoble, Chambéry, Lyon</strong> et <strong>Annecy</strong>.</span>
            <br>
            <br>
            <span>Nos artisans experts réalisent une étude de votre projet de construction de maison contemporaine, villa
              d’architecte ou rénovation de bâtisse ancienne et conçoivent pour vous la solution la plus adaptée à vos
              besoins. Design et innovantes, nos <strong>menuiseries alu à Lyon</strong> sont performantes en termes
              d’isolation et
              d’étanchéité. Engagés dans une démarche globale de qualité, nos produits vous assurent durabilité et respect
              de l’environnement grâce à l'<strong>aluminium</strong>.</span>
            <br>
            <br>
            STBN Aluminium, <strong>menuiserie en alu sur-mesure à Lyon</strong>
          </div>
          <div class="mt-10 inline-block h-0.5 w-15 bg-[#003f5e]" />
          <div
            class="animate-clipToTop mt-10 h-100 w-100 duration-600 delay-250 ease-in-out"
            title="Menuiserie haut de gamme en aluminium et sur-mesure à Lyon"
            style=" background-size: cover; background-position: center center; background-repeat: no-repeat; background-image: url('src/assets/galleryImages/image-2.jpg');"
          />
        </div>
      </div>
    </section>
    <section
      id="section-3"
      class="mt-30 pt-10"
    >
      <div class="w-full">
        <div class="mb-3 text-sm text-[#003f5e] tracking-[0.5em] uppercase">
          DÉCOUVRIR
        </div>
        <div class="mb-5 text-5xl text-black font-bold leading-15">
          Nos services
        </div>
        <div class="relative mb-10 border-1 border-black border-opacity-15 border-solid">
          <div class="absolute right-0 h-2 w-50 bg-[#003f5e] -top-1" />
        </div>
      </div>
      <div class="mx-20 flex flex-wrap justify-center">
        <ArticleSection />
      </div>
    </section>
    <section
      id="section-4"
      class="relative mt-30 h-572 bg-[#003f5e] bg-opacity-40 pt-10 text-black"
    >
      <div
        class="absolute top-0 z-0 block h-full w-full bg-cover"
        style="background-image: url('src/assets/bg-graphics.jpg');"
      >
        <div>
          <div class="mb-3 text-sm text-white tracking-[0.5em] uppercase">
            DES PRESTATIONS
          </div>
          <div class="mb-5 text-5xl text-white font-bold leading-15">
            sur-mesure
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style></style>

<route lang="yaml">
meta:
  layout: default
</route>
