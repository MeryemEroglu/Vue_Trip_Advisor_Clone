<script setup lang="ts">
import TheReview from 'src/components/Reviews/TheReview.vue';
import { ref } from 'vue';
import { defineProps } from 'vue';

interface review {
  score: number;
  likeCount: number;
  isUserLiked: boolean;
  createdAt: string;
  title: string;
  mainText: string;
  userName: string;
  userLocation: string;
  userContributionCount: number;
  imageUrl?: string;
}

const props = defineProps<{ reviews: review[] }>();
</script>

<template>
  <TheReview
    v-for="review in props.reviews"
    :key="review.title"
    :score="review.score"
    :like-count="review.likeCount"
    :is-user-liked="review.isUserLiked"
    :created-at="review.createdAt"
    :title="review.title"
    :main-text="review.mainText"
    :user-name="review.userName"
    :user-location="review.userLocation"
    :user-contribution-count="review.userContributionCount"
    :image-url="review.imageUrl"
  ></TheReview>
</template>

<style scoped></style>
