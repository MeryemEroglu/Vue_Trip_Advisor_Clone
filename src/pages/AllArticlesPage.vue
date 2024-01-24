<script setup lang="ts">
import ArticleList from 'src/components/ArticleList.vue';
import { useArticleStore } from 'src/stores/article-store';
import { onMounted } from 'vue';
const articleStore = useArticleStore();
onMounted(async () => {
  await articleStore.fetchArticles();
  console.log(articleStore.articles);
});
</script>
<template>
  <div class="container" style="margin-top: 60px; max-width: 750px">
    <ArticleList :articleList="articleStore.articles"></ArticleList>
  </div>
</template>
