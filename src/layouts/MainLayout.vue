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
    <p>FOOTER</p>
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
  min-height: 413px;
  background-color: #0efe66;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: auto;
  font-size: 30px;
  font-weight: 600;
  margin-top: 20px;
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
