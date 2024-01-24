<script lang="ts" setup>
import { ref } from 'vue';
import { usePlaceStore } from 'src/stores/place-store';

const placeStore = usePlaceStore();
const props = defineProps({
  isFavorite: {
    type: Boolean,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
});
const toggleActive = () => {
  placeStore.togglePlaceFavorite(props.id);
};
</script>

<template>
  <div @click="toggleActive" class="container">
    <i v-if="!props.isFavorite" class="ri-heart-line"></i>
    <i v-else style="color: red" class="ri-heart-fill"></i>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  font-size: 20px;
  transition: 300ms;
}
.container:hover {
  cursor: pointer;
  background-color: #f2f2f2;
}
.container:active {
  background-color: #e6e6e6;
}
</style>
