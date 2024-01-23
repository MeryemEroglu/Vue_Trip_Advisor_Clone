<script lang="ts" setup>
import ArticleElem from 'src/components/ArticleElem.vue';
</script>

<template>
  <h1 class="articleListTitle">Tüm Seyahat Makaleleri</h1>
  <div class="listContainer">
    <ArticleElem></ArticleElem>
    <ArticleElem></ArticleElem>
    <ArticleElem></ArticleElem>
  </div>
</template>

<style scoped>
.articleListTitle {
  margin-top: 100px;
  font-size: 24px;
  font-weight: 800;
  margin-bottom: 20px;
  line-height: 20px;
}
.listContainer {
  border-top: 1px solid black;
  padding-top: 50px;
  margin-bottom: 100px;
}
</style>
