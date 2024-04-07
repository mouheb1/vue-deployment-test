<script setup lang="ts">
const articles = ref([
  {
    articleId: '1',
    title: 'Fenêtres & Baies vitrées en aluminium à Lyon',
    image: 'src/assets/articlesImages/image-1.jpg',
  },
  {
    articleId: '2',
    title: 'Portails aluminium à Lyon',
    image: 'src/assets/articlesImages/image-2.jpg',

  },
  {
    articleId: '3',
    title: 'Volets roulants en aluminium à Lyon',
    image: 'src/assets/articlesImages/image-3.jpg',

  },
  {
    articleId: '4',
    title: 'Menuiseries minimalistes à Lyon',
    image: 'src/assets/articlesImages/image-4.jpg',

  },
  {
    articleId: '5',
    title: 'Pergolas bioclimatiques à Lyon',
    image: 'src/assets/articlesImages/image-5.jpg',

  },
  {
    articleId: '6',
    title: 'Nos réalisations en menuiserie aluminium à Lyon',
    image: 'src/assets/articlesImages/image-6.jpg',

  },
])
</script>

<template>
  <div
    v-for="article of articles"
    :key="article.articleId"
    class="mx-0.5 max-w-90"
  >
    <ArticleCard
      :title="article.title"
      :image="article.image"
    />
  </div>
</template>

<style scoped></style>
