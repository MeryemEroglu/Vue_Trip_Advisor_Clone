<script setup lang="ts">
import { defineProps } from 'vue';
const props = defineProps({
  score: {
    type: Number,
    required: true,
  },
});

let filledCircleCount = Math.floor(props.score);
</script>

<template>
  <div class="reviewScoreIndicator-container">
    <div
      v-for="n in filledCircleCount"
      :key="n"
      class="reviewScoreIndicator-circle --filled"
    ></div>
    <div
      v-for="n in 5 - filledCircleCount"
      :key="n"
      class="reviewScoreIndicator-circle"
    ></div>
  </div>
</template>

<style scoped>
.reviewScoreIndicator-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  gap: 2px;
}

.reviewScoreIndicator-circle {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: #f2f2f2;
}

.reviewScoreIndicator-circle.--filled {
  background-color: #00aa6c;
}
</style>
