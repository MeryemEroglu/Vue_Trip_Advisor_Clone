<script setup>
import { ref } from 'vue';
</script>

<template>
  <div class="container">
    <nav class="inner-container">
      <div class="logo-search-container">
        <img src="../assets/logo.svg" alt="logo resmi" />
      </div>
      <div class="main-links-container">
        <a href="#">Keşfedin</a>
        <a href="#">Seyahetler</a>
        <a href="#">Yorum Yazın</a>
        <a href="#">Devamı</a>
      </div>
      <div class="language-login-btn-container">
        <div
          @click="$emit('openLocalizationModal')"
          class="language-selector-button-container"
        >
          <i class="ri-global-line"></i>
          <div>
            <span>TRY</span>
          </div>
        </div>
        <button @click="$emit('openLoginModal')" class="login-btn">
          giriş yap
        </button>
      </div>
    </nav>
  </div>
</template>

<style scoped>
.container {
  margin-top: 8px;
}
.inner-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
}
.logo-search-container {
  display: flex;
}
.main-links-container {
  display: flex;
}
.main-links-container a:nth-child(1),
.main-links-container a:nth-child(4) {
  padding: 10px 16px;
  border-radius: 20px;
  color: #000;
  background-color: #fff;
  transition: 300ms;
  text-decoration: none;
}
.main-links-container a:nth-child(1):hover,
.main-links-container a:nth-child(4):hover {
  background-color: #f2f2f2;
}
.main-links-container a:nth-child(2),
.main-links-container a:nth-child(3) {
  padding: 10px 16px;
  border-radius: 20px;
  color: #000;
  background-color: #fff;
  text-decoration: none;
}
.main-links-container a:nth-child(2):hover,
.main-links-container a:nth-child(3):hover {
  text-decoration: underline;
  color: #545454;
}

.main-links-container a {
  font-size: 16px;
  font-weight: 700;
  font-family: 'PT Sans', sans-serif;
  white-space: nowrap;
}
.logo-search-container img {
  width: 188px;
}
.login-btn {
  background-color: #000;
  border: none;
  color: #fff;
  border-radius: 20px;
  padding: 10px 16px;
  font-size: 16px;
  line-height: 22px;
  cursor: pointer;
  transition: 300ms;
}
.login-btn:hover {
  background-color: #333;
}
.language-selector-button-container {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 10px 16px;
  transition: 300ms;
  height: 42px;
  border-radius: 20px;
  font-weight: 700;
  font-size: 16px;
  user-select: none;
  cursor: pointer;
}
.language-selector-button-container div {
  border-left: 1px solid #e0e0e0;
  padding-left: 4px;
}
.language-login-btn-container {
  display: flex;
  gap: 8px;
}
.language-selector-button-container:hover {
  background-color: #f2f2f2;
}

@media (min-width: 1024px) {
}
</style>
