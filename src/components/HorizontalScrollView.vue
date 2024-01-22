<script lang="ts" setup>
import ReviewScoreIndicator from 'src/components/Reviews/ReviewScoreIndicator.vue';
import LastVisitedItem from './LastVisitedItem.vue';
import { ref } from 'vue';

const numberOfItemsOnScreen = ref<number>(4);

const scrollToLeft = () => {
  let outerContainerRef = document.getElementById('outerContainer');
  if (outerContainerRef) {
    outerContainerRef.scrollLeft -=
      (1480 - (numberOfItemsOnScreen.value - 1) * 10) /
      numberOfItemsOnScreen.value;
    if (
      outerContainerRef.scrollLeft -
        (1480 - (numberOfItemsOnScreen.value - 1) * 10) /
          numberOfItemsOnScreen.value <=
      10
    ) {
      scrollLeftLocked.value = true;
    } else {
      scrollRightLocked.value = false;
    }
  }
};

const scrollToRight = () => {
  let outerContainerRef = document.getElementById('outerContainer');
  if (outerContainerRef) {
    outerContainerRef.scrollLeft +=
      (1480 - (numberOfItemsOnScreen.value - 1) * 10) /
      numberOfItemsOnScreen.value;
    if (
      outerContainerRef.scrollLeft +
        (1480 - (numberOfItemsOnScreen.value - 1) * 10) /
          numberOfItemsOnScreen.value >=
      outerContainerRef.scrollWidth - outerContainerRef.clientWidth
    ) {
      scrollRightLocked.value = true;
    } else {
      scrollLeftLocked.value = false;
    }
  }
};

const scrollLeftLocked = ref<boolean>(true);
const scrollRightLocked = ref<boolean>(false);
</script>

<template>
  <div class="list-mainContainer">
    <h3>Son incelenenler</h3>
    <div class="list-outerContainer" id="outerContainer">
      <div class="list-innerContainer" :class="'c-' + numberOfItemsOnScreen">
        <LastVisitedItem></LastVisitedItem>
        <LastVisitedItem></LastVisitedItem>
        <LastVisitedItem></LastVisitedItem>
        <LastVisitedItem></LastVisitedItem>
        <LastVisitedItem></LastVisitedItem>
        <LastVisitedItem></LastVisitedItem>
        <LastVisitedItem></LastVisitedItem>
        <LastVisitedItem></LastVisitedItem>
      </div>
    </div>
    <button @click="scrollToLeft" v-if="!scrollLeftLocked" class="list-leftBtn">
      <i class="ri-arrow-left-line"></i>
    </button>
    <button
      @click="scrollToRight"
      v-if="!scrollRightLocked"
      class="list-rightBtn"
    >
      <i class="ri-arrow-right-line"></i>
    </button>
  </div>
</template>

<style scoped>
.list-innerContainer {
  display: flex;
  gap: 10px;
}
.list-leftBtn {
  position: absolute;
  top: 50%;
  left: -25px;
  background-color: #fff;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 1.2rem;
  border-width: 1px;
  transition: 200ms;
}
.c-3 > * {
  min-width: calc((1440px - 20px) / 3);
}
.c-4 > * {
  min-width: calc((1440px - 30px) / 4);
}
.list-leftBtn:hover {
  cursor: pointer;
  background-color: #000;
  color: #fff;
}
.list-rightBtn {
  position: absolute;
  top: 50%;
  right: -25px;
  background-color: #fff;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 1.2rem;
  border-width: 1px;
  transition: 200ms;
}
.list-rightBtn:hover {
  cursor: pointer;
  background-color: #000;
  color: #fff;
}
.list-mainContainer {
  position: relative;
}
.list-outerContainer {
  width: 100%;
  overflow-x: hidden;
  scroll-behavior: smooth;
}
</style>
