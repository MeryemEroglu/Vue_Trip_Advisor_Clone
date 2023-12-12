<script setup lang="ts">
import LoginOptionButton from './LoginOptionButton.vue';
</script>

<template>
  <div class="loginModal-container">
    <div class="loginModal-innerCoontainer">
      <button class="loginModal-closeBtn" @click="$emit('closeLoginModal')">
        <i class="ri-close-line"></i>
      </button>
      <img class="loginModal-logo" src="../assets/logo-white.svg" alt="Logo" />
      <h2>Tripadvisor’ın en iyilerini görüntülemek için giriş yapın.</h2>

      <LoginOptionButton style="margin-top: 30px">
        <img
          class="loginOption-icon"
          src="../assets/googleLogo.png"
          alt="google"
        />
        <span>Google ile devam et</span>
      </LoginOptionButton>
      <LoginOptionButton>
        <i class="ri-mail-line loginOption-icon"></i>
        <span>E-posta ile devam et</span>
      </LoginOptionButton>
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
.userAgreementContainer {
  margin-top: auto;
  text-align: center;
  font-size: 12px;
  color: #333;
}

.userAgreementContainer a {
  color: #333;
  text-decoration: underline;
}
.loginModal-logo {
  height: 48px;
  width: fit-content;
}
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
.loginModal-innerCoontainer {
  width: 500px;
  height: 655px;
  background-color: #fff;
  border-radius: 10px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  position: relative;
}

.loginModal-innerCoontainer h2 {
  font-size: 28px;
  font-weight: 500;
  line-height: 33px;
  max-width: 70%;
}
.loginModal-closeBtn {
  position: absolute;
  top: 0px;
  right: 0px;
  padding: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 20px;
}
.loginModal-closeBtn:hover {
  color: #545454;
}

.loginOption-button span {
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  color: #333;
}

img.loginOption-icon {
  width: 20px;
  height: 20px;
  margin-right: 16px;
  position: absolute;
  left: 20px;
}

i.loginOption-icon {
  font-size: 20px;
  margin-right: 16px;
  left: 20px;
  position: absolute;
}
</style>
