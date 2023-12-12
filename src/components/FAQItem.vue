<script lang="ts" setup>
import { ref } from 'vue';
import { defineProps } from 'vue';

const props = defineProps({
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
});
const isQuestionItemActive = ref<boolean>(false);
</script>

<template>
  <div class="fqa-questionItem" :class="{ '--expanded': isQuestionItemActive }">
    <div
      class="fqa-questionItem-top"
      @click="
        () => {
          isQuestionItemActive = !isQuestionItemActive;
        }
      "
    >
      <p>{{ props.question }}</p>
      <i class="ri-arrow-down-s-line"></i>
    </div>
    <div v-if="isQuestionItemActive == true" class="fqa-questionItem-body">
      <p>
        {{ props.answer }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.fqa-questionItem {
  display: flex;
  flex-direction: column;
}
.fqa-questionItem-top {
  display: flex;
  justify-content: space-between;
  user-select: none;
  cursor: pointer;
}

.fqa-questionItem-top p {
  font-size: 16px;
  font-weight: 500;
  color: #000;
}

.fqa-questionItem-body {
  margin-top: 16px;
  color: #333;
  font-size: 16px;
}

.fqa-questionItem p {
  margin: 0;
}
.fqa-questionItem.--expanded i {
  transform: rotate(-180deg);
}

.fqa-questionItem i {
  transition: 300ms;
}
</style>
