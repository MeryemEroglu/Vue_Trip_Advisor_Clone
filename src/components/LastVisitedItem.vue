<script lang="ts" setup>
import ReviewScoreIndicator from 'src/components/Reviews/ReviewScoreIndicator.vue';
import AddToFavoritiesBtn from './AddToFavoritiesBtn.vue';
import { ref, defineProps } from 'vue';
const props = defineProps<{ placeData: Place }>();

interface Place {
  id: string;
  Category: string;
  Image: string;
  Rate: number;
  Rate1Count: number;
  Rate2Count: number;
  Rate3Count: number;
  Rate4Count: number;
  Rate5Count: number;
  Title: string;
  RateCount: number;
  isFavorite: boolean;
}
</script>

<template>
  <div class="lastVisited-elem">
    <div class="elem-imgWrapper">
      <img class="elem-img" :src="props.placeData?.Image" alt="" />
    </div>
    <span
      ><b>{{ props.placeData?.Title }}</b></span
    >
    <div class="review-container">
      <ReviewScoreIndicator
        :score="props.placeData.Rate"
      ></ReviewScoreIndicator>
      <span>{{ props.placeData.RateCount }}</span>
    </div>
    <span>{{ props.placeData.Category }}</span>
    <div class="favoriteBtnContainer">
      <AddToFavoritiesBtn
        :id="props.placeData.id"
        :isFavorite="props.placeData.isFavorite"
      ></AddToFavoritiesBtn>
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
  height: 270px;
}
.elem-img:hover {
  opacity: 0.8;
}
</style>
