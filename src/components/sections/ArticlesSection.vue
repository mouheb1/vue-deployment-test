<script setup lang="ts">
import { bottomArticles } from '@/assets/json/config.json'
</script>

<template>
  <div>
    <section
      id="section-7"
      class="md:mb-30"
    >
      <div class="md:w-full">
        <div class="relative mb-10 border-1 border-black border-opacity-15 border-solid">
          <div class="absolute left-0 h-2 w-50 bg-[#003f5e] -top-1" />
        </div>
        <div class="mb-3 text-sm text-[#003f5e] tracking-[0.5em] uppercase">
          DÉCOUVRIR
        </div>
        <div class="mb-5 text-5xl text-black font-bold leading-15">
          également...
        </div>
      </div>
      <div class="box-border flex flex-wrap scale-75 justify-center md:scale-100">
        <ArticleSection
          :articles="bottomArticles"
          :wide="true"
        />
      </div>
    </section>
  </div>
</template>
