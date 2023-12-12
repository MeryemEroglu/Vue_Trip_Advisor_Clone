<template>
  <div>
    <NavBar
      @openLocalizationModal="
        () => {
          isLocalizationModalActive = true;
        }
      "
      @openLoginModal="
        () => {
          isLoginModalActive = true;
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
    <!-- <ReviewContainer></ReviewContainer> -->
    <LoginModal
      v-if="isLoginModalActive == true"
      @closeLoginModal="() => (isLoginModalActive = false)"
    ></LoginModal>
    <div class="container">
      <FrequentlyAskedQuestions></FrequentlyAskedQuestions>
    </div>
  </div>
</template>

<script setup lang="ts">
import NavBar from 'src/components/NavBar.vue';
import LocalizationOptions from 'src/components/LocalizationOptions.vue';
import LoginModal from 'src/components/LoginModal.vue';
import ReviewContainer from 'src/components/Reviews/ReviewContainer.vue';
import FrequentlyAskedQuestions from 'src/components/FrequentlyAskedQuestions.vue';
import { ref } from 'vue';
const isLocalizationModalActive = ref<boolean>(false);
const isLoginModalActive = ref<boolean>(false);
</script>
