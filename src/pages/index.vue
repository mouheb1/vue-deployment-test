<script setup lang="ts">
import { galleryImages, headlines, topArticles } from '@/assets/json/config.json'

defineOptions({
  name: 'IndexPage',
})
</script>

<template>
  <div
    id="section-0"
    class="overflow-x-clip"
  >
    <section class="bg-black">
      <Galleria
        :value="galleryImages"
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
          <div class="absolute translate-y-10 px-5 lg:translate-y-0 lg:px-0">
            <div class="mb-3 text-sm text-white tracking-[0.5em] uppercase">
              {{ headlines.up }}
            </div>
            <div class="text-5xl text-white font-bold leading-17 lg:text-6xl lg:leading-20">
              {{ headlines.down }}
            </div>
          </div>
          <scrollDown />
        </template>
      </Galleria>
    </section>
    <section
      id="section-1"
      class="section-1-content relative ml-10 px-10 py-20 text-left lg:ml-20 lg:px-0"
    >
      <div class="lg:w-[40%]">
        <div class="mb-3 text-sm text-[#003f5e] tracking-[0.5em] uppercase">
          DELTA SOLUTION
        </div>
        <div class="text-5xl text-black font-bold leading-15">
          Fabricant installateur de menuiseries ALU haut de gamme
        </div>
        <div />
      </div>
    </section>
    <section
      id="section-2"
      class="flex justify-center pt-10"
    >
      <div
        class="hidden w-1/2 bg-cover bg-center bg-no-repeat lg:mr-20 lg:block"
        style="background-image: url('/images/galleryImages/image-1.jpg');"
      />
      <div class="flex flex-col items-center text-justify lg:mr-20 lg:w-1/2">
        <div class="flex flex-col px-10 lg:max-w-min lg:px-20 lg:pr-30">
          <div class="mb-5 pt-20 text-left text-2xl text-black font-normal tracking-[0.01em] uppercase">
            MENUISERIE Aluminium
          </div>
          <div class="text-[14px] text-black leading-7">
            <span> DESLTA Solution, est un </span>
            <b>fabricant de menuiserie Aluminium.</b>
            <br>
            <br>
            <span>Entreprise familiale, <strong>DELTA Solution</strong> est <strong>spécialiste de
              menuiseries
              en Aluminium sur mesure.</strong> Fabriquées dans notre atelier, nous installons nos <strong>menuiseries
              alu sur mesure haut de gamme</strong>.</span>
            <br>
            <br>
            <span>Nos artisans experts réalisent une étude de votre projet de construction de maison contemporaine,
              villa
              d’architecte ou rénovation de bâtisse ancienne et conçoivent pour vous la solution la plus adaptée à vos
              besoins. Design et innovantes, nos <strong>menuiseries alu</strong> sont performantes en termes
              d’isolation et
              d’étanchéité. Engagés dans une démarche globale de qualité, nos produits vous assurent durabilité et
              respect
              de l’environnement grâce à l'<strong>Aluminium</strong>.</span>
            <br>
            <br>
            Delta Solution, <strong>menuiserie en alu sur mesure</strong>
          </div>
          <div class="mt-10 inline-block h-0.5 w-15 bg-[#003f5e]" />
          <div
            class="mt-10 aspect-square max-w-100 w-[80%] duration-600 delay-250 ease-in-out lg:w-100"
            title="Menuiserie haut de gamme en Aluminium et sur mesure"
            style=" background-size: cover; background-position: center center; background-repeat: no-repeat; background-image: url('/images/galleryImages/image-2.jpg');"
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
        <ArticleSection :articles="topArticles" />
      </div>
    </section>
    <section
      id="section-4"
      class="relative mt-30 min-h-max flex justify-center bg-[#003f5e] bg-opacity-40 pt-10 text-black"
    >
      <div class="section-4-content max-w-[85%] w-[85%] pt-25">
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
                src="/images/sectionImages/image-1.jpg"
                alt="Image"
                class="h-full w-full overflow-hidden object-cover"
              >
              <div class="max-w-[15%]" />
            </div>
            <div class="mb-5 mt-2.5 h-auto w-full bg-white p-5 text-left text-[1.7em] leading-10">
              FABRICANT DE FENÊTRES ET BAIES VITRÉES
              SUR MESURE HAUT DE GAMME
            </div>
            <!-- <div class="max-w-[85%] text-left text-white">
              <strong class="mb-2.5 mt-10 block leading-6">
                Menuiserie Aluminium sur mesure
              </strong>
              <div class="text-justify text-[14px] leading-7">
                <div class="mb-5">
                  Nous intervenons sur l’étude, la conception et la pose de <strong>fenêtres et baies vitrées en
                    Aluminium</strong> pour vos
                  projets de construction ou rénovation de maison pour particuliers, professionnels et architectes
                  proche
                  d’ <strong>Aix-les-Bains</strong> (73) ou des <strong>Monts d’Or</strong>, près de Jemmel (69). Notre
                  savoir-faire nous permet de vous offrir des
                  <strong>fenêtres et baies vitrées en Aluminium</strong> aux structures épurées et aux grandes
                  performances d’isolation
                  thermique et phonique, qui renforcent votre sentiment de sécurité tout en apportant un style
                  contemporain et
                  minimaliste à votre bien d’exception.
                </div>

                <div class="mb-5">
                  Conçues <strong>sur mesure</strong> et donc totalement <strong>personnalisables</strong>, vous pouvez
                  <strong>adapter vos fenêtres et baies vitrées</strong>
                  selon vos attentes et votre architecture, en choisissant la taille, la forme, la couleur et les
                  finitions.
                  <strong>Baies vitrées coulissantes, fenêtres battantes</strong>, double ou triple vitrage, avec volet
                  roulant intégré… Nos
                  produits haut de gamme s'intègrent parfaitement à l’environnement, effaçant les barrières entre
                  intérieur et
                  extérieur.
                </div>

                <strong class="mb-2 mt-11 block text-left text-[16px] font-extrabold">
                  Menuiserie Aluminium minimaliste pour maison contemporaine et villa d’architecte
                </strong>

                <div>
                  Pour un intérieur encore plus minimaliste, <strong>DELTA Solution</strong> s'est
                  associé <strong>Technal</strong> et
                  Keller
                  <strong>Minimal Windows</strong>, pour vous offrir des <strong>fenêtres et baies vitrées aux
                    structures
                    invisibles</strong>. Grande
                  tendance
                  architecturale, les <strong> menuiseries minimalistes en Aluminium</strong> se traduisent par des
                  <strong>fenêtres et baies
                    vitrées
                    XXL</strong>, qui inondent votre intérieur de lumière naturelle tout en maximisant votre espace.
                  Les <strong>structures en Aluminium</strong> aux lignes fines d’une grande élégance sont quasiment
                  imperceptibles, pour
                  laisser place à d’immenses vitrages. Profitez d’une vue panoramique exceptionnelle grâce à nos
                  <strong>fenêtres
                    et
                    baies vitrées</strong> très grandes dimensions.
                </div>
                <div class="mt-10 inline-block h-0.75 w-15 bg-[#003f5e]" />
              </div>
            </div> -->
          </div>
          <div class="sticky top-42 hidden aspect-auto h-screen max-w-[55%] overflow-hidden lg:block">
            <img
              src="/images/sectionImages/image-2.jpg"
              alt="Image"
              class="h-full w-full overflow-hidden bg-no-repeat object-cover pl-10 grayscale"
            >
            <div class="max-w-[15%]" />
          </div>
        </div>
      </div>
    </section>
    <section
      id="section-5"
      class="section-5-content relative min-h-max flex justify-center pt-20 text-black"
    >
      <div class="relative z-3 flex justify-center">
        <div class="sticky top-42 mr-20 mt-10 hidden aspect-square h-screen max-w-[50%] overflow-hidden lg:block">
          <img
            src="/images/sectionImages/image-3.jpg"
            alt="Image"
            class="h-full w-full overflow-hidden bg-no-repeat object-cover"
          >
        </div>
        <div class="flex flex-col items-end lg:max-w-[50%]">
          <div class="p-x-10 pt-20 text-left lg:mr-30 md:p-x-20">
            <div class="mb-5 pt-20 text-[1.8em]">
              CONCEPTION DE VOLETS ROULANTS OU BATTANTS POUR BIENS D’EXCEPTION À ANNECY ET MEGÈVE (74)
            </div>
            <div class="text-justify text-[14px] leading-7">
              <div class="mb-5">
                De fabrication française, nos <strong>volets et brise-soleil orientables</strong> (BSO) en
                <strong>Aluminium</strong> sont pensés et conçus
                par nos artisans expérimentés dans notre atelier en région de Monastir. Grâce à
                <strong>l’Aluminium</strong>
                doté de hautes
                technologies, tous nos <strong>volets battants, volets roulants et brise-soleil orientables</strong>
                sont
                ultra résistants et
                respectueux de l’environnement. En effet, <strong>l’Aluminium</strong> est recyclable, et procure une
                longévité à nos
                produits car résistent aux conditions climatiques extrêmes, ne se déforme pas, ne rouille pas et ne
                nécessite pas d’entretien. Grâce à leur structure et lames orientables en <strong>Aluminium</strong>,
                nos
                produits vous
                garantissent isolation, étanchéité et sécurité. Si vous optez pour des volets motorisés, vous gagnerez
                également en confort de vie au quotidien. Combinés à nos <strong>fenêtres et baies vitrées en
                  Aluminium</strong>, vous
                bénéficiez de <strong>menuiseries haut de gamme</strong> s’intégrant parfaitement à votre maison, tout
                en
                adoptant un style
                contemporain. Très esthétique, le brise-soleil orientable vous offre l’avantage supplémentaire de
                pouvoir
                gérer l’apport de lumière naturelle dans votre villa tout en maîtrisant la température grâce à ses lames
                orientables en <strong>Aluminium</strong>.
              </div>

              <strong class="mb-2 mt-11 block text-left text-[16px] font-extrabold">
                Des fermetures : portes et portails en Aluminium Made in Jemmel grâce à DESLTA Solution
              </strong>

              <div>
                Première impression que les visiteurs ont de votre maison, les <strong>portes et portails</strong>
                reflètent
                l’identité de
                votre bien. Adoptez un style contemporain en optant pour des portes et portails en
                <strong>Aluminium</strong> de très grande
                qualité, fabriqués par l’équipe <strong>DELTA Solution</strong>. D’une grande solidité,
                <strong>nos portes et portails en
                  Aluminium</strong> vous assurent résistance, isolation et sécurité. D’abord fonctionnelles, les
                <strong>fermetures : portes
                  et portails en Aluminium</strong> apportent également un style, une identité à votre maison. Grâce à
                l’<strong>Aluminium</strong>ng,
                matériau malléable, vous pouvez laisser parler votre imagination tant sur la forme que sur les
                nombreuses
                couleurs disponibles avec sa peinture thermolaquée. Que vous optiez pour une <strong>porte en
                  Aluminium</strong> pleine, une
                porte semi-vitrée ou une porte vitrée, notre savoir-faire allié à notre expertise vous permet de vous
                procurer toute la sécurité dont vous avez besoin grâce à nos vitrages spécifiques et des systèmes de
                fermetures ultra sécurisés. Côté <strong>portails</strong>, les fabrications DELTA Solution vous
                certifient
                sécurité
                et solidité. Nous
                proposons également des <strong>portails motorisés</strong> et avec éclairage intégré pour maximiser
                votre
                confort.
              </div>
              <div class="mt-10 inline-block h-0.75 w-15 bg-[#003f5e]" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      id="section-6"
      class="section-6-content relative min-h-max flex justify-center pb-20 pt-0 text-black lg:py-20"
    >
      <div class="relative z-3 flex justify-center">
        <div class="flex flex-col items-end lg:max-w-[50%]">
          <div class="p-x-10 pt-20 text-left lg:mr-30 md:p-x-20">
            <div class="mb-5 pt-20 text-[1.8em]">
              PERGOLAS Aluminium
            </div>
            <div class="text-justify text-[14px] leading-7">
              <div>
                Vous recherchez un <strong class="text-[#003f5e]">fabricant de pergola Aluminium</strong> et sa
                région ? Delta Solution conçoit et installe
                selon les réglementations professionnelles vos <strong>pergolas bioclimatiques en Aluminium. La pergola
                  en
                  Aluminium</strong>
                est l’élément architectural qui apportera une touche contemporaine à votre maison tout en vous
                permettant
                de
                couvrir votre terrasse ou votre jardin. Personnalisable, vous pouvez choisir une <strong>pergola
                  auto-portée</strong> ou
                adossée à votre maison. Sa peinture thermolaquée vous offre un grand choix de couleurs qui vous
                permettra
                d’adapter votre <strong>pergola</strong> à votre décoration. Pour plus de confort, choisissez une
                <strong>pergola bioclimatique</strong>.
                Équipée de lames orientables, vous aurez alors la possibilité de maîtriser l’ensoleillement sur votre
                terrasse tout en bénéficiant d’un espace supplémentaire. Besoin d’un système pour protéger votre
                véhicule
                ?
                <strong>DELTA Solution</strong> est spécialisé dans la <strong>pergola sur mesure à
                  Jemmel</strong>, pour s'intégrer au mieux à votre
                habitat.
              </div>
              <div class="mb-15">
                Delta Solution propose désormais également ses services pour de la <strong
                  class="text-[#003f5e]"
                >location
                  de pergola bioclimatique</strong>
                pour les professionnels de l'événementiel.
              </div>

              <div>
                Toute l’équipe de <strong>DELTA Solution</strong> est à votre disposition pour vous
                accompagner dans la
                réalisation de vos plus beaux projets en <strong>Aluminium sur mesure</strong>. N’hésitez pas à nous
                contacter pour toute
                demande d’informations complémentaires.
              </div>
              <div class="mt-10 inline-block h-0.75 w-15 bg-[#003f5e]" />
            </div>
          </div>
        </div>

        <div class="sticky top-42 mr-20 mt-10 hidden aspect-square h-screen max-w-[50%] overflow-hidden lg:block">
          <img
            src="/images/sectionImages/image-4.jpeg"
            alt="Image"
            class="h-full w-full overflow-hidden bg-no-repeat object-cover"
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
