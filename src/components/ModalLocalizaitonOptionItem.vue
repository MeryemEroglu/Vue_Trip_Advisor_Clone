<script setup lang="ts">
const props = defineProps<{
  optionName: string;
  optionLabel: string;
  isActive: boolean;
}>();
</script>

<template>
  <div class="modal-localization-option" :class="{ active: props.isActive }">
    <span>{{ props.optionName }}</span>
    <span>{{ props.optionLabel }}</span>
  </div>
</template>

<style scoped>
.modal-localization-option {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  color: #000;
  border-radius: 6px;
  padding: 8px;
  transition: 300ms;
  cursor: pointer;
  border: 1px solid transparent;
  height: fit-content;
}

.modal-localization-option:hover,
.modal-localization-option.active {
  background-color: #000;
  color: #fff;
  border: 1px solid #000;
}

.modal-localization-option span:nth-child(1) {
  font-size: 14px;
}

.modal-localization-option span:nth-child(2) {
  font-size: 12px;
}
</style>
