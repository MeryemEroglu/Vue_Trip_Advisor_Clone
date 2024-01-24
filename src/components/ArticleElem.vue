<script lang="ts" setup>
import { RouterLink } from 'vue-router';
import { defineProps } from 'vue';
import { Timestamp } from 'firebase/firestore';

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

// MainText comes as rawHtml from firestore, so we need to parse it to innerText
const miniMainText = props.articleData?.MainText.replace(
  /<[^>]*>?/gm,
  ''
).substring(0, 200);
</script>

<template>
  <div class="articleContainer">
    <div class="article-leftContainer">
      <h2>
        <RouterLink :to="'/Article/' + props.articleData?.id">{{
          props.articleData?.Title
        }}</RouterLink>
      </h2>
      <p v-html="miniMainText"></p>
      <div class="article-infoContainer">
        <span>Yazan: {{ props.articleData?.AuthorName }}</span>
        <div class="dot"></div>
        <span>{{
          props.articleData?.CreatedDate.toDate().toLocaleDateString()
        }}</span>
        <div class="dot"></div>
        <span>{{ props.articleData?.ReadTime }} dakikalık okuma</span>
      </div>
    </div>
    <div class="article-rightContainer">
      <img :src="props.articleData?.ArticleImage" alt="" />
    </div>
  </div>
</template>

<style scoped>
.articleContainer {
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
  gap: 10px;
}

.articleContainer h2 {
  font-size: 42px;
  font-weight: 600;
  margin-bottom: 10px;
  line-height: 1.2;
  margin-top: 10px;
}
.articleContainer h2 a {
  color: #000;
  text-decoration: none;
}
.articleContainer h2 a:hover {
  text-decoration: underline;
  color: #545454;
}

.articleContainer p {
  font-size: 20px;
  font-weight: 400;
  color: #333;
}
.article-infoContainer {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
}

.dot {
  width: 4px;
  height: 4px;
  min-width: 4px;
  border-radius: 50%;
  background-color: #333;
}

.article-rightContainer {
  height: 100%;
  min-width: 242px;
  width: 242px;
}
.article-rightContainer img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
