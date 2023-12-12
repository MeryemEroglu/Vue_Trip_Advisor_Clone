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
    <LocalizationOptions
      @closeLocalizationModal="
        () => {
          isLocalizationModalActive = false;
        }
      "
      v-if="isLocalizationModalActive == true"
    ></LocalizationOptions>
    <LoginModal
      v-if="isLoginModalActive == true"
      @closeLoginModal="() => (isLoginModalActive = false)"
    ></LoginModal>
  </div>
</template>

<script setup lang="ts">
import NavBar from 'src/components/NavBar.vue';
import LocalizationOptions from 'src/components/LocalizationOptions.vue';
import LoginModal from 'src/components/LoginModal.vue';
import { ref } from 'vue';
const isLocalizationModalActive = ref<boolean>(false);
const isLoginModalActive = ref<boolean>(false);
</script>
