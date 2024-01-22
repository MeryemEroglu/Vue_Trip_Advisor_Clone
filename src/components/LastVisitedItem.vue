<script lang="ts" setup>
import ReviewScoreIndicator from 'src/components/Reviews/ReviewScoreIndicator.vue';
import AddToFavoritiesBtn from './AddToFavoritiesBtn.vue';
import { ref } from 'vue';
</script>

<template>
  <div class="lastVisited-elem">
    <div class="elem-imgWrapper">
      <img class="elem-img" src="../assets/lastVisitedTemp.jpg" alt="" />
    </div>
    <span><b>Palaco Postal</b></span>
    <div class="review-container">
      <ReviewScoreIndicator :score="4"></ReviewScoreIndicator>
      <span>2.230</span>
    </div>
    <span>Mimari Yapılar</span>
    <div class="favoriteBtnContainer">
      <AddToFavoritiesBtn></AddToFavoritiesBtn>
    </div>
  </div>
</template>

<style scoped>
.review-container {
  display: flex;
  gap: 10px;
}
.lastVisited-elem {
  position: relative;
  width: 100%;
}
.favoriteBtnContainer {
  position: absolute;
  top: 10px;
  right: 10px;
}
.elem-img {
  border-radius: 5px;
  transition: 100ms;
  object-fit: fill;
  width: 100%;
}
.elem-img:hover {
  opacity: 0.8;
}
</style>
