<script setup lang="ts">
import { ref } from 'vue';
const selectSort = ref('En Yeni');
const sortOptions = ref(['En Yeni', 'En Eski']);
const isSearchInputFocused = ref(false);
</script>

<template>
  <div class="reviewSearchFilter-container">
    <div :class="{ focused: isSearchInputFocused }" class="review-searchInput">
      <i class="ri-search-line"></i>
      <input
        @focusin="
          () => {
            isSearchInputFocused = true;
          }
        "
        @focusout="
          () => {
            isSearchInputFocused = false;
          }
        "
        placeholder="Yorumlarda ara..."
        type="text"
      />
    </div>
    <div class="reviewFilter-selectWrapper">
      <q-select
        rounded
        outlined
        color="grey-8"
        v-model="selectSort"
        :options="sortOptions"
        :dense="true"
      ></q-select>
    </div>
  </div>
</template>

<style scoped>
.reviewFilter-selectWrapper {
  width: 100%;
  max-width: 111px;
}

.review-searchInput {
  display: flex;
  align-items: center;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  padding: 0 16px;
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
  color: #000;
}
.review-searchInput input {
  border: none;
  outline: none;
  width: 100%;
  padding: 8px 0;
  margin-left: 8px;
}

.review-searchInput.focused {
  border: 1px solid #000;
}
.reviewSearchFilter-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  gap: 16px;
  padding-bottom: 20px;
}
</style>
