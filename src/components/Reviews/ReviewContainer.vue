<script setup lang="ts">
import ReviewsSummary from 'src/components/Reviews/ReviewsSummary.vue';
import ReviewSearchFilter from 'src/components/Reviews/ReviewSearchFilter.vue';
import ReviewList from 'src/components/Reviews/ReviewList.vue';
import { ref } from 'vue';

interface ReviewScore {
  score: number;
  count: number;
  label?: string;
}

const reviewScores = ref<ReviewScore[]>([
  {
    score: 5,
    count: 872,
    label: 'Mükemmel',
  },
  {
    score: 4,
    count: 256,
    label: 'Çok iyi',
  },
  {
    score: 3,
    count: 102,
    label: 'Orta',
  },
  {
    score: 2,
    count: 53,
    label: 'Kötü',
  },
  {
    score: 1,
    count: 8,
    label: 'Berbat',
  },
]);

const totalReviews = reviewScores.value.reduce(
  (acc, curr) => acc + curr.count,
  0
);

const score =
  Math.round(
    (reviewScores.value.reduce(
      (acc, curr) => acc + curr.score * curr.count,
      0
    ) /
      totalReviews) *
      10
  ) / 10;
</script>

<template>
  <div class="container">
    <h1 class="reviews-containerTitle">Yorumlar</h1>
    <div class="reviews-innerContainer">
      <ReviewsSummary
        :review-scores="reviewScores"
        :total-reviews="totalReviews"
        :score="score"
      ></ReviewsSummary>
      <div class="reviews-outerSection">
        <ReviewSearchFilter></ReviewSearchFilter>
        <ReviewList></ReviewList>
      </div>
    </div>
  </div>
</template>

<style scoped>
.reviews-containerTitle {
  font-size: 24px;
  font-weight: 700;
}

.reviews-innerContainer {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 80px;
}
</style>
