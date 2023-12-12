<script setup lang="ts">
import ReviewScoreIndicator from './ReviewScoreIndicator.vue';
import ReviewScorePercentage from './ReviewScorePercentage.vue';

import { defineProps } from 'vue';

interface ReviewScore {
  score: number;
  count: number;
  label?: string;
}

const props = defineProps({
  totalReviews: {
    type: Number,
    required: true,
  },
  reviewScores: {
    type: Array as () => ReviewScore[],
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
});
</script>

<template>
  <div class="container reviewSummary-container">
    <div class="reviewSummary-top">
      <span class="reviewSummary-score">{{ props.score }}</span>
      <ReviewScoreIndicator :score="4" />
      <span>{{ props.totalReviews }}</span>
    </div>
    <div class="reviewSummary-scorePercentageList">
      <div
        v-for="reviewScore in reviewScores"
        :key="reviewScore.score"
        class="reviewSummary-scorePercentageWrapper"
      >
        <span class="reviewSummary-totalCount">{{ reviewScore.label }}</span>
        <ReviewScorePercentage
          :percentage="(reviewScore.count / totalReviews) * 100"
        ></ReviewScorePercentage>
        <span>{{ reviewScore.count }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.reviewSummary-container {
  display: flex;
  flex-direction: column;
}
.reviewSummary-top {
  display: flex;
  align-items: center;
  gap: 8px;
}
.reviewSummary-scorePercentageList {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 24px;
}

.reviewSummary-scorePercentageWrapper {
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  align-items: center;
  gap: 8px;
}

.reviewSummary-scorePercentageWrapper span:first-of-type {
  font-size: 14px;
  font-weight: 300;
  width: 67px;
  margin-right: 16px;
}

.reviewSummary-scorePercentageWrapper span:last-of-type {
  font-size: 12px;
  font-weight: 300;
}

.reviewSummary-score {
  font-size: 24px;
  font-weight: 700;
}

.reviewSummary-totalCount {
  font-size: 16px;
  font-weight: 400;
  color: #333;
}
</style>
