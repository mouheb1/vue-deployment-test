<script setup lang="ts">
import { gallery, headlines, topArticles } from '@/assets/json/config.json'
import {
  animateSection,
} from '@/utils/animations/section'

defineOptions({
  name: 'IndexPage',
})

// IntersectionObserver directive
const intersectionObserver = new IntersectionObserver(animateSection, {
  threshold: 0.1, // Trigger when 10% of the element is visible
})

const vIntersectionObserver = {
  mounted(el: Element) {
    intersectionObserver.observe(el)
  },
  unmounted(el: Element) {
    intersectionObserver.unobserve(el)
  },
}
</script>

<template>
  <div id="section-0" class="overflow-x-clip">
    <section class="bg-black">
      <Galleria
        :value="gallery"
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
            style="display: block"
            class="h-screen min-h-screen min-w-full object-cover opacity-50"
          >
          <div class="absolute translate-y-10 px-5 lg:translate-y-0 lg:px-0">
            <div class="mb-3 text-sm text-white tracking-[0.5em] uppercase">
              {{ headlines.up }}
            </div>
            <div
              class="text-5xl text-white font-bold leading-17 lg:text-6xl lg:leading-20"
            >
              {{ headlines.down }}
            </div>
          </div>
          <scrollDown />
        </template>
      </Galleria>
    </section>
    <section
      id="section-1"
      ref="section1"
      v-intersection-observer="animateSection"
      class="section-1-content section relative ml-10 px-10 py-20 text-left lg:ml-20 lg:px-0"
    >
      <div class="lg:w-[40%]">
        <div class="mb-3 text-sm text-[#003f5e] tracking-[0.5em] uppercase">
          DELTA SOLUTION
        </div>
        <div class="text- text-5xl text-black font-bold leading-15">
          Fabricant installateur de menuiseries ALUMINIUM <br>
          et PVC haut de gamme
        </div>
        <div />
      </div>
    </section>
    <section
      id="section-2"
      ref="section2"
      v-intersection-observer="animateSection"
      class="section flex justify-center pt-10"
    >
      <div
        class="hidden w-1/2 bg-cover bg-center bg-no-repeat lg:mr-20 lg:block"
        style="background-image: url(&quot;/images/gallery/image-1.jpg&quot;)"
      />
      <div class="flex flex-col items-center text-justify lg:mr-20 lg:w-1/2">
        <div class="flex flex-col px-10 lg:max-w-min lg:px-20 lg:pr-30">
          <div
            class="mb-5 text-left text-2xl text-black font-normal tracking-[0.01em] uppercase"
          >
            QUI SOMMES-NOUS ?
          </div>
          <div class="text-[14px] text-black leading-7">
            Chez <strong>DELTA SOLUTION</strong>, nous sommes passionnés par
            <strong>l’art de la menuiserie</strong> depuis 2003. Nous mettons
            notre savoir-faire et notre expertise à votre service pour vous
            offrir des solutions de menuiserie sur mesure, alliant
            <strong>esthétisme</strong>, <strong>performance</strong> et
            <strong>durabilité</strong>. Notre entreprise est spécialisée dans
            la fabrication et la pose de menuiseries en
            <strong>aluminium</strong>, <strong>PVC</strong> et
            <strong>métal</strong>, adaptées à tous vos besoins résidentiels et
            professionnels. Que vous soyez un
            <strong>particulier</strong> cherchant à rénover votre maison ou un
            <strong>professionnel</strong> en quête de solutions fiables pour
            vos projets, nous sommes là pour vous accompagner à chaque étape.
          </div>
          <div class="mt-10 inline-block h-0.5 w-15 bg-[#003f5e]" />
          <div
            class="mt-10 aspect-square max-w-100 w-[80%] duration-600 delay-250 ease-in-out lg:w-100"
            title="Menuiserie haut de gamme en Aluminium et sur mesure"
            style="
              background-size: cover;
              background-position: center center;
              background-repeat: no-repeat;
              background-image: url(&quot;/images/gallery/image-2.jpg&quot;);
            "
          />
        </div>
      </div>
    </section>
    <section
      id="section-3"
      ref="section3"
      v-intersection-observer="animateSection"
      class="section mt-30 pt-10"
    >
      <div class="w-full">
        <div class="text-md mb-8 text-[#003f5e] tracking-[0.5em] uppercase">
          DÉCOUVRIR
        </div>
        <div
          class="relative mb-10 border-1 border-black border-opacity-15 border-solid"
        >
          <div class="absolute right-0 h-2 w-50 bg-[#003f5e] -top-1" />
        </div>
      </div>
      <div class="mx-20 flex flex-wrap justify-center">
        <ArticleSection :articles="topArticles" />
      </div>
    </section>
    <section
      id="section-4"
      ref="section4"
      v-intersection-observer="animateSection"
      class="section relative mt-30 min-h-max flex justify-center bg-[#003f5e] bg-opacity-40 pt-10 text-black"
    >
      <div class="section-4-content max-w-[95%] w-[95%] pt-25">
        <div class="relative z-3 flex justify-center">
          <div class="flex flex-col items-end pb-20 lg:max-w-[40%]">
            <div class="mb-3 text-sm text-white tracking-[0.5em] uppercase">
              DES PRESTATIONS
            </div>
            <div class="mb-5 text-5xl text-white font-bold leading-15">
              sur mesure
            </div>
            <div class="aspect-square max-w-[85%]">
              <img
                src="/images/section/image-1.jpg"
                alt="Image"
                class="h-full w-full overflow-hidden object-cover"
              >
              <div class="max-w-[15%]" />
            </div>
            <div
              class="mb-5 mt-2.5 h-auto w-full bg-white p-5 text-left text-[1.7em] leading-10"
            >
              FABRICANT DE FENÊTRES ET BAIES VITRÉES SUR MESURE HAUT DE GAMME
            </div>
          </div>
          <div
            class="sticky top-42 hidden aspect-auto h-screen max-w-[60%] overflow-hidden lg:block"
          >
            <img
              src="/images/section/image-2.jpg"
              alt="Image"
              class="h-full w-full overflow-hidden bg-no-repeat object-cover pl-10 grayscale"
            >
          </div>
        </div>
      </div>
    </section>
    <section
      id="section-5"
      ref="section5"
      v-intersection-observer="animateSection"
      class="section section-5-content relative min-h-max flex justify-center pt-20 text-black"
    >
      <div class="relative z-3 flex justify-center">
        <div
          class="sticky top-42 mr-20 mt-10 hidden aspect-square h-screen max-w-[50%] overflow-hidden lg:block"
        >
          <img
            src="/images/section/image-3.jpg"
            alt="Image"
            class="h-full w-full overflow-hidden bg-no-repeat object-cover lg:h-[80%]"
          >
        </div>
        <div class="flex flex-col items-end lg:max-w-[50%]">
          <div class="p-x-10 pt-16 text-left lg:mr-30 md:p-x-20">
            <div class="mb-10 text-[1.8em]">
              NOS SERVICES
            </div>
            <div class="text-justify text-[14px] leading-7">
              <ul class="flex flex-col gap-y-12">
                <li>
                  <strong class="block text-lg">Fabrication sur mesure</strong>
                  <span>Nous fabriquons des menuiseries en aluminium, PVC et
                    métallique selon vos spécifications exactes. Que ce soit
                    pour des fenêtres, des portes, bais vitrés, portails,
                    pergolas, volets roulants et des rideaux métalliques, nous
                    utilisons des matériaux de haute qualité et des techniques
                    de fabrication modernes pour garantir des produits qui
                    répondent à vos attentes.
                  </span>
                </li>
                <li>
                  <strong class="block text-lg">Pose professionnelle</strong>
                  <span>Notre équipe de techniciens qualifiés se charge de la pose
                    de vos menuiseries avec précision et efficacité. Nous
                    veillons à ce que chaque installation soit réalisée dans les
                    règles de l’art, en respectant les délais et en assurant un
                    résultat impeccable.
                  </span>
                </li>
                <li>
                  <strong class="block text-lg">Conseils personnalisés</strong>
                  <span>Nos experts sont à votre écoute pour vous conseiller sur le
                    choix des matériaux, des couleurs et des finitions. Nous
                    vous aiderons à définir la solution la plus adaptée à vos
                    besoins et à votre budget.
                  </span>
                </li>
                <li>
                  <strong class="block text-lg">Entretien et réparation</strong>
                  <span>Nous offrons également des services d'entretien et de
                    réparation pour garantir la longévité de vos installations.
                    Nos interventions sont rapides et efficaces pour vous
                    assurer un confort optimal.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      id="section-6"
      ref="section6"
      v-intersection-observer="animateSection"
      class="section section-6-content relative flex justify-center pt-0 text-black !max-h-min"
    >
      <div class="relative flex justify-center">
        <div class="flex flex-col items-end lg:max-w-[45%]">
          <div class="mb-20 p-x-5 pt-20 text-left lg:mr-30 md:mb-20 md:p-x-20">
            <div class="text-[1.8em]">
              <div class="uppercase">
                Pourquoi choisir <br>
                DELTA SOLUTION ?
              </div>

              <div class="text-justify text-[14px] leading-7">
                <ul class="mt-10 flex flex-col gap-y-12">
                  <li>
                    <strong class="block text-lg">Expertise reconnue</strong>
                    <span>Des années d’expérience dans le domaine de la menuiserie.
                    </span>
                  </li>
                  <li>
                    <strong class="block text-lg">Qualité et fiabilité</strong>
                    <span>Notre équipe de techniciens qualifiés se charge de la
                      pose de vos menuiseries avec précision et efficacité. Nous
                      veillons à ce que chaque installation soit réalisée dans
                      les règles de l’art, en respectant les délais et en
                      assurant un résultat impeccable.
                    </span>
                  </li>
                  <li>
                    <strong class="block text-lg">Solutions sur mesure</strong>
                    <span>Des produits adaptés à vos besoins spécifiques et à vos
                      projets.
                    </span>
                  </li>
                  <li>
                    <strong class="block text-lg">Service client irréprochable</strong>
                    <span>Un accompagnement personnalisé de la conception à la
                      réalisation de vos projets.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div
          class="sticky mt-10 hidden h-screen max-w-[55%] overflow-hidden lg:block"
        >
          <img
            src="/images/section/image-4.jpg"
            alt="Image"
            class="max-h-min w-full overflow-hidden bg-no-repeat object-cover"
          >
        </div>
      </div>
    </section>
    <ArticlesSection />
  </div>
</template>

<style scoped>
.section-1-content::before {
  position: absolute;
  content: '';
  display: block;
  background-color: #003f5e;
  height: 200px;
  width: 8px;
  right: 0;
  top: 0;
}

.section-4 {
  -webkit-text-size-adjust: 100%;
  font-size: 14px;
  font-family: 'Poppins', sans-serif;
  text-align: left;
  color: #000;
  padding: 0;
  border: 0;
  outline: none;
  box-sizing: border-box;
  position: relative;
  display: block;
  margin: 0 auto;
  width: 85%;
  max-width: 85%;
  z-index: 3;
}

.section-4-content::before {
  position: absolute;
  display: block;
  content: '';
  background-image: url(/images/bg-graphics.jpg);
  background-size: cover;
  width: 100%;
  height: 100%;
  z-index: 0;
  top: 0;
  left: 0;
}

.section-4-content::after {
  position: absolute;
  display: block;
  content: '';
  background: #003f5e;
  width: 100%;
  height: 100%;
  z-index: 0;
  top: 0;
  left: 0;
  opacity: 0.65;
}

.section-5-content::before {
  position: absolute;
  content: '';
  display: block;
  background-color: #003f5e;
  height: 200px;
  width: 8px;
  right: 0;
  top: 0;
}
</style>

<route lang="yaml">
meta:
  layout: default
</route>
