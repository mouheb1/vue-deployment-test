<script setup lang="ts">
import type { Article } from '@/types'
import { general } from '@/assets/json/config.json'

defineProps({
  articles: {
    type: Array as PropType<Article[]>,
  },
  wide: {
    type: Boolean,
    default: false,
  },
})

const router = useRouter()
</script>

<template>
  <div
    v-for="article of articles"
    :key="article.articleId"
    :class="[!wide ? 'mx-0.5' : '']"
  >
    <WideArticleCard
      v-if="wide"
      :title="article.title"
      :description="article.description"
      :image="`${general.imageProviderBaseUrl}${article.image}`"
      @click="router.push({ path: article.link })"
    />

    <ArticleCard
      v-else
      :title="article.title"
      :image="`${general.imageProviderBaseUrl}${article.image}`"
      @click="router.push({ path: article.link })"
    />
  </div>
</template>
