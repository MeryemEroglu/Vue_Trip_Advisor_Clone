<script setup lang="ts">
import ReviewContainer from 'src/components/Reviews/ReviewContainer.vue';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { usePlaceStore } from 'src/stores/place-store';
import { ref } from 'vue';
import FrequentlyAskedQuestions from 'src/components/FrequentlyAskedQuestions.vue';

const placeStore = usePlaceStore();
const router = useRoute();
const placeId = router.params.id;

onMounted(async () => {
  await placeStore.fetchPlaceById(placeId.toString());
});
</script>

<template>
  <div class="pageContainer">
    <div class="placeInfoContainer">
      <h1>Place Info</h1>
    </div>
    <ReviewContainer></ReviewContainer>
  </div>
</template>

<style scoped>
.pageContainer {
  margin: 70px 0 70px 0;
}
.placeInfoContainer {
  margin-bottom: 50px;
  margin-top: 10px;
  height: 500px;
  background-color: rgb(251, 147, 255);
  display: flex;
  align-items: center;
  justify-content: center;
}
.FAQ-container {
  margin-top: 100px;
  margin-bottom: 20px;
}
.titleInfoContainer {
  background-color: blueviolet;
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
}
</style>
