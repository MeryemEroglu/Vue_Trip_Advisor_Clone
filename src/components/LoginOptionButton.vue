<script setup lang="ts"></script>

<template>
  <div class="loginOption-button">
    <slot></slot>
  </div>
</template>

<style scoped>
.loginOption-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 48px;
  border-radius: 8px;
  background-color: #fff;
  border: 2px solid #000;
  margin-bottom: 16px;
  cursor: pointer;
  border-radius: 50px;
  position: relative;
}
</style>
