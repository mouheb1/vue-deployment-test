<script setup lang="ts">
import type { Article } from '@/types'

defineProps({
  articles: {
    type: Array as PropType<Article[]>,
  },
  wide: {
    type: Boolean,
    default: false,
  },
})
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
      :image="article.image"
    />

    <ArticleCard
      v-else
      :title="article.title"
      :image="article.image"
    />
  </div>
</template>
