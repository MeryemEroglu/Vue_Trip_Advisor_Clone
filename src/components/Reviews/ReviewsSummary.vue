<script setup lang="ts">
import ReviewScoreIndicator from './ReviewScoreIndicator.vue';
</script>

<template>
  <div class="container reviewSummary-container">
    <div class="reviewSummary-top">
      <span>5.0</span>
      <ReviewScoreIndicator :score="4" />
      <span>20.172 yorum</span>
    </div>
    <div>
      <div>
        <span>Mükemmel</span>
        <div></div>
        <span>17.384</span>
      </div>
      <div>
        <span>Çok iyi</span>
        <div></div>
        <span>2.477</span>
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
</style>
