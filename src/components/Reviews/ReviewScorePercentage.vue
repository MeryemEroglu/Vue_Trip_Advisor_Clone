<script setup lang="ts">
import { PropertySignature } from 'typescript';
import { defineProps } from 'vue';
const props = defineProps({
  percentage: {
    type: Number,
    required: true,
  },
});
</script>

<template>
  <div class="reviewScorePercentage-container">
    <div
      class="reviewScorePercentage-inner"
      :style="{ width: percentage + '%' }"
    ></div>
  </div>
</template>

<style scoped>
.reviewScorePercentage-container {
  width: 100%;
  height: 12px;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
}
.reviewScorePercentage-inner {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background-color: #00aa6c;
  border-radius: 8px;
}
</style>
