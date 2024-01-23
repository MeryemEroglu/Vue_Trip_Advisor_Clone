<template>
  <div class="ml-nav">
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
  <router-view />
  <div class="footer">
    <h1>FOOTER</h1>
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

<style>
.footer {
  height: 413px;
  background-color: #faf1fd;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: auto;
}
.ml-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background-color: #fff;
}
#q-app,
body {
  height: 100%;
}
#q-app {
  display: flex;
  flex-direction: column;
}
</style>
