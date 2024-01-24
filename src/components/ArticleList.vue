<script lang="ts" setup>
import ArticleElem from 'src/components/ArticleElem.vue';
import { defineProps } from 'vue';
import { Timestamp } from 'firebase/firestore';

const props = defineProps<{ articleList: Article[] | null }>();

console.log(props.articleList, 'aaaaaaaaaaaaa');

interface Article {
  id: string;
  Title: string;
  ReadTime: number;
  ArticleImage: string;
  CreatedDate: Timestamp;
  MainText: string;
  AuthorName: string;
  AuthorImage: string;
}
</script>

<template>
  <h1 class="articleListTitle">Tüm Seyahat Makaleleri</h1>
  <div class="listContainer">
    <ArticleElem
      :articleData="articleData"
      :key="articleData.id"
      v-for="articleData in articleList"
    ></ArticleElem>
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
