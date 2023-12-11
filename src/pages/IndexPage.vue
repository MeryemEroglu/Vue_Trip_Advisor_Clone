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
    <LoginModal></LoginModal>
  </div>
</template>

<script setup lang="ts">
import NavBar from 'src/components/NavBar.vue';
import LocalizationOptions from 'src/components/LocalizationOptions.vue';
import LoginModal from 'src/components/LoginModal.vue';
import { ref } from 'vue';
const isLocalizationModalActive = ref<boolean>(false);
</script>
