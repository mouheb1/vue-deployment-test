<script setup lang="ts">

</script>

<template>
  <footer
    class="mx-auto box-border border-0 border-t-1 border-black border-opacity-25 border-solid bg-white text-black"
  >
    <div class="h-80 flex items-start justify-around pb-15 pt-20 text-left text-sm">
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
          16 chemin des Mûriers <br>
          69740 Genas
        </div>
        <Button
          class="border-2 border-[#003f5e] rounded-none bg-transparent px-5 py-[13.3333px] text-sm text-[#003f5e] duration-300 hover:bg-[#003f5e] hover:text-white"
        >
          Plan d'accès
        </Button>
      </div>

      <div class="p-5">
        <div class="my-2.5 block tracking-[6px]">
          NOUS CONTACTER
        </div>
        <div class="block">
          contact@stbnaluminium.com
        </div>
        <a
          href="https://wa.me/21698405053"
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
        <div
          id="socials"
          class="flex justify-start gap-x-5"
        >
          <a
            href="https://www.facebook.com/ste.deltasolution"
            target="_blank"
          >
            <i
              class="pi pi-facebook color-[#003f5e]"
              style="font-size: 1.6rem"
            />
          </a>
          <a
            href="https://www.instagram.com/deltasolution/"
            target="_blank"
          >
            <i
              class="pi pi-instagram color-[#003f5e]"
              style="font-size: 1.6rem"
            />
          </a>

          <a
            href="https://tn.linkedin.com/company/frameconcept"
            target="_blank"
          >
            <i
              class="pi pi-linkedin color-[#003f5e]"
              style="font-size: 1.6rem"
            />

          </a>
        </div>
      </div>
    </div>

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
        href="https://github.com/moetezbouazra"
        class="py-[7px]"
        target="_blank"
      >
        <Button
          class="max-w-min border-none bg-transparent text-nowrap text-black hover:cursor-pointer hover:text-[#003f5e]"
          link
          unstyled
        >
          © 2024 Moetez Dev
        </Button>
      </a>
    </div>
  </footer>
</template>
