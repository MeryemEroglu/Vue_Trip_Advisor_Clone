<script setup lang="ts">
import { Timestamp } from 'firebase/firestore';
import { defineProps } from 'vue';
import { ref } from 'vue';

const props = defineProps<{ articleData: Article | null }>();

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
  <div class="article-titleContainer">
    <h1 class="article-title">{{ props.articleData?.Title }}</h1>
    <div class="article-author">
      <div class="article-authorImage">
        <img :src="props.articleData?.AuthorImage" alt="" />
      </div>
      <span>Yazan: {{ props.articleData?.AuthorName }}</span>
      <div class="dot"></div>
      <span>{{
        props.articleData?.CreatedDate.toDate().toLocaleDateString()
      }}</span>
      <div class="dot"></div>
      <span>{{ props.articleData?.ReadTime }} dakikalık okuma</span>
    </div>
  </div>
  <div class="article-imageWrapper">
    <img :src="props.articleData?.ArticleImage" alt="" />
  </div>
  <div class="article-text" v-html="props.articleData?.MainText"></div>
</template>

<style scoped>
.faq-containerArticle {
  margin-top: 30px;
  width: 750px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
}
.article-titleContainer {
  width: 750px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
}
.article-title {
  font-size: 54px;
  font-weight: 600;
  margin: 50px 0 0 0;
}
.pageContainer {
  display: flex;
  flex-direction: column;
}
.article-author {
  display: flex;
  gap: 7px;
  align-items: center;
  color: #333;
  font-size: 16px;
}
.article-authorImage {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
}

.dot {
  width: 4px;
  height: 4px;
  min-width: 4px;
  border-radius: 50%;
  background-color: #333;
}
.article-imageWrapper {
  width: 100%;
}
.article-imageWrapper img {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 10px;
  margin: 20px 0;
}
.article-text {
  font-size: 20px;
  font-weight: 400;
  color: #333;
  line-height: 1.5;
  margin-bottom: 40px;
  width: 750px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
}
</style>
