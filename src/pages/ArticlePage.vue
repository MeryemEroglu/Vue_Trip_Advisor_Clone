<script setup lang="ts">
import ArticleDetail from 'src/components/ArticleDetail.vue';
import FrequentlyAskedQuestions from 'src/components/FrequentlyAskedQuestions.vue';
import HorizontalScrollView from 'src/components/HorizontalScrollView.vue';
import { useArticleStore } from 'src/stores/article-store';
import { usePlaceStore } from 'src/stores/place-store';
import { defineProps, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { Timestamp } from 'firebase/firestore';
import LastVisitedItem from 'src/components/LastVisitedItem.vue';

const router = useRoute();
const articleStore = useArticleStore();
const placeStore = usePlaceStore();
const article = ref<Article | null>(null);
const props = defineProps({
  $route: {
    type: Object,
    required: true,
  },
});

onMounted(async () => {
  const articleId = router.params.id;
  const fetchedArticle = await articleStore.fetchArticleById(
    articleId.toString()
  );

  if (fetchedArticle) {
    article.value = fetchedArticle;
  }

  placeStore.fetchPlaces();
});

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

// fetch articles using article-store fetchArticleById action and store it in article variable useing pinia store
</script>
<template>
  <div class="container pageContainer" style="margin-top: 60px">
    <ArticleDetail :articleData="article"></ArticleDetail>
    <HorizontalScrollView
      title="Mevcut seyahat programınızdan biraz sapmaya değecek yerler"
    >
      <LastVisitedItem
        :placeData="place"
        :key="place.id"
        v-for="place in placeStore.places"
      ></LastVisitedItem>
      <LastVisitedItem
        :placeData="place"
        :key="place.id"
        v-for="place in placeStore.places"
      ></LastVisitedItem>
    </HorizontalScrollView>
    <div class="faq-containerArticle">
      <FrequentlyAskedQuestions></FrequentlyAskedQuestions>
    </div>
  </div>
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
