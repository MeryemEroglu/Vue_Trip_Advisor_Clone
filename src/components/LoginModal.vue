<script setup lang="ts"></script>

<template>
  <div class="loginModal-container">
    <div class="loginModal-innerCoontainer">
      <button @click="$emit('closeLocalizationModal')">
        <i class="ri-close-line"></i>
      </button>
      <img src="../assets/logo-white.svg" alt="Logo" />
      <h2>Tripadvisor’ın en iyilerini görüntülemek için giriş yapın.</h2>
      <div class="loginOption-button">
        <img
          class="loginOption-icon"
          src="../assets/googleLogo.png"
          alt="google"
        />
        <span>Google ile devam et</span>
      </div>
      <div class="loginOption-button">
        <i class="ri-mail-line loginOption-icon"></i>
        <span>E-posta ile devam et</span>
      </div>
      <div class="userAgreementContainer">
        <p>
          Devam ettiğiniz takdirde
          <a href="https://www.tripadvisor.com.tr/pages/terms.html?locale=tr-TR"
            >Kullanım Koşullarımızı</a
          >
          kabul etmiş ve
          <a
            href="https://www.tripadvisor.com.tr/pages/privacy.html?locale=tr-TR"
            >Gizlilik ve Çerezlerle İlgili Bildirimimizi</a
          >
          okuduğunuzu onaylamış sayılırsınız.
        </p>
        <p>
          Bu site, reCAPTCHA koruması altında olup Google
          <a href="https://policies.google.com/privacy">Gizlilik Politikası</a>
          ve <a href="https://policies.google.com/terms">Hizmet Şartları</a> 'na
          tabidir.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.loginModal-container {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(76, 76, 76, 0.586);
}
</style>
