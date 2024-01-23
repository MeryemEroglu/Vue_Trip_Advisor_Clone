<script lang="ts" setup></script>

<template>
  <div class="articleContainer">
    <div class="article-leftContainer">
      <h2>
        <RouterLink to="/Article/1"
          >Tüm dünyadan kaçırılmaması gereken 14 destansı karnaval
          kutlaması</RouterLink
        >
      </h2>
      <p>
        Sizi günlerce eğlendirecek enerjik platform geçit törenleri, gösterişli
        kostümler ve sokak partileri. Evet, dünyanın en iyi karnavalları geri
        döndü ve uğruna seyahate çıkmaya değecek en büyük 14 kutla...
      </p>
      <div class="article-infoContainer">
        <span>Yazan: Michelle Neo</span>
        <div class="dot"></div>
        <span>9 Oca 2024</span>
        <div class="dot"></div>
        <span>7 dakikalık okuma</span>
      </div>
    </div>
    <div class="article-rightContainer">
      <img src="../assets/article.jpg" alt="" />
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
</style>
