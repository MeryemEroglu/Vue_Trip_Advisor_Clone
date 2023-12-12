<template>
  <div>
    <NavBar
      @openLocalizationModal="
        () => {
          isLocalizationModalActive = true;
        }
      "
    ></NavBar>
    <br />
    <br />
    <LocalizationOptions
      @closeLocalizationModal="
        () => {
          isLocalizationModalActive = false;
        }
      "
      v-if="isLocalizationModalActive == true"
    ></LocalizationOptions>
    <br />
    <br />
    <!-- <LoginModal></LoginModal>-->
    <ReviewContainer></ReviewContainer>
  </div>
</template>

<script setup lang="ts">
import NavBar from 'src/components/NavBar.vue';
import LocalizationOptions from 'src/components/LocalizationOptions.vue';
import LoginModal from 'src/components/LoginModal.vue';
import ReviewContainer from 'src/components/Reviews/ReviewContainer.vue';
import { ref } from 'vue';
const isLocalizationModalActive = ref<boolean>(false);
</script>
