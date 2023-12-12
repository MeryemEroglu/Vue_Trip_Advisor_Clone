<script setup lang="ts">
import ReviewsSummary from 'src/components/Reviews/ReviewsSummary.vue';
import ReviewSearchFilter from 'src/components/Reviews/ReviewSearchFilter.vue';
import ReviewList from 'src/components/Reviews/ReviewList.vue';
</script>

<template>
  <div class="container">
    <h1 class="reviews-containerTitle">Yorumlar</h1>
    <div class="reviews-innerContainer">
      <ReviewsSummary></ReviewsSummary>
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
}
</style>
