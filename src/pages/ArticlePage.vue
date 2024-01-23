<template>
  <div class="container pageContainer" style="margin-top: 60px">
    <div class="article-titleContainer">
      <h1 class="article-title">Article Title</h1>
      <div class="article-author">
        <div class="article-authorImage">
          <img src="../assets/profilePicture1.jpg" alt="" />
        </div>
        <span>Yazan: Ali Wunderman</span>
        <div class="dot"></div>
        <span>20 Haz 2023</span>
        <div class="dot"></div>
        <span>9 dakikalık okuma</span>
      </div>
    </div>

    <div class="article-imageWrapper">
      <img src="../assets/article.jpg" alt="" />
    </div>
    <div class="article-text">
      İzlanda’da geçirilecek zaman konusunda verilecek hiçbir karar yanlış
      olmaz, ancak üç günlük bir tatil ideal olacaktır. Reykjavik ve
      çevresindeki bölgeyi, ancak tekrar ziyaret etmeye ilham verecek kadar
      görebileceksiniz. İzlanda Havayolları’nın (Icelandair) transatlantik
      yolcuların hiçbir ek uçuş ücreti ödemeden İzlanda’da 1 ila 7 gün
      kalabilmesine olanak tanıyan Stopover programı sayesinde, Reykjavik
      herhangi bir Avrupa seyahati için mükemmel bir ek olacaktır.
    </div>
    <HorizontalScrollView></HorizontalScrollView>
    <div class="faq-containerArticle">
      <FrequentlyAskedQuestions></FrequentlyAskedQuestions>
    </div>
  </div>
</template>

<script setup lang="ts">
import FrequentlyAskedQuestions from 'src/components/FrequentlyAskedQuestions.vue';
import HorizontalScrollView from 'src/components/HorizontalScrollView.vue';
</script>

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
