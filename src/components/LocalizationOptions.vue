<script setup lang="ts">
import { ref } from 'vue';
import ModalLocalizationOptionItem from './ModalLocalizaitonOptionItem.vue';
const selectedContentOption = ref<string>('region');

interface Region {
  region: string;
  language: string;
}

interface Money {
  name: string;
  tag: string;
}

const regionLanguageList = ref<Region[]>([
  { region: 'Türkiye', language: 'Türkçe' },
  { region: 'Argentina', language: 'Español' },
  { region: 'Australia', language: 'English' },
  { region: 'België', language: 'Nederlands' },
  { region: 'Belgique', language: 'Brasil' },
  { region: 'Canada', language: 'English' },
  { region: 'Chile', language: 'Colombia' },
]);

const moneyTypeList = ref<Money[]>([
  { name: 'Türk lirası', tag: 'TRY' },
  { name: 'ABD doları', tag: 'USD' },
  { name: 'Afganistan afganisi', tag: 'AFN' },
  { name: 'Angola kvanzası', tag: 'AOA' },
  { name: 'Arjantin pezosu', tag: 'ARS' },
  { name: 'Arnavutluk leki', tag: 'ALL' },
  { name: 'Avro', tag: 'EUR' },
]);

const selectedRegion = ref('Türkiye');
const selectedMoneyType = ref('TRY');

const handleContentOptionClick = (newOption: string) => {
  selectedContentOption.value = newOption;
};
</script>

<template>
  <section class="modal-container">
    <div class="modal-innerContainer">
      <div class="modal-header">
        <button @click="$emit('closeLocalizationModal')">
          <i class="ri-close-line"></i>
        </button>
      </div>
      <div class="modal-body">
        <h2 class="modal-title">Tercihler</h2>
        <div class="modal-contentOptions">
          <div
            @click="(e) => handleContentOptionClick('region')"
            class="modal-contentOption"
            :class="{ active: selectedContentOption === 'region' }"
          >
            <span>Bögle Ve Dil</span>
          </div>
          <div
            @click="(e) => handleContentOptionClick('money')"
            class="modal-contentOption"
            :class="{ active: selectedContentOption === 'money' }"
          >
            <span>Para Birimi</span>
          </div>
        </div>
        <div
          v-if="selectedContentOption === 'region'"
          class="modal-localizationContent"
        >
          <h3 class="content-title">Bölge ve dil seçin</h3>
          <div class="modal-localizationOptions">
            <ModalLocalizationOptionItem
              v-for="{ region, language } in regionLanguageList"
              :optionName="region"
              :optionLabel="language"
              :isActive="selectedRegion == region"
              :key="region"
              @click="
                () => {
                  selectedRegion = region;
                }
              "
            ></ModalLocalizationOptionItem>
          </div>
        </div>
        <div
          v-if="selectedContentOption === 'money'"
          class="modal-localizationContent"
        >
          <h3 class="content-title">Para birimi seçin</h3>
          <div class="modal-localizationOptions">
            <ModalLocalizationOptionItem
              v-for="money in moneyTypeList"
              :optionName="money.name"
              :optionLabel="money.tag"
              :key="money.tag"
              :isActive="selectedMoneyType == money.tag"
              @click="
                () => {
                  selectedMoneyType = money.tag;
                }
              "
            ></ModalLocalizationOptionItem>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.modal-innerContainer {
  width: 60%;
  max-width: 660px;
  height: 100%;
  max-height: 500px;
  background-color: #fff;
  border-radius: 12px;
}

.modal-localizationOptions {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  row-gap: 24px;
  column-gap: 8px;
}
.modal-container {
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
.modal-header {
  display: flex;
  justify-content: flex-end;
  padding: 10px;
}
.modal-header button {
  background-color: none;
  border: none;
  background: none;
  font-size: 20px;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  min-width: 30px;
  transition: 300ms;
}

.modal-header button:hover {
  background-color: rgb(219, 219, 219);
}
.modal-title {
  font-size: 28px;
  font-weight: 800;
  margin: 0;
}

.modal-body {
  padding: 0 48px;
  max-height: 88%;
  height: 88%;
  overflow-y: auto;
}
.modal-contentOptions {
  display: flex;
  gap: 16px;
}

.modal-contentOption {
  font-size: 16px;
  color: #333;
  font-weight: 400;
  cursor: pointer;
  padding-bottom: 5px;
  user-select: none;
}

.modal-contentOption:hover {
  border-bottom: 2px solid #545454;
  color: #545454;
}

.content-title {
  font-size: 18px;
  font-weight: 700;
  color: #000;
  margin: 0 0 20px 0;
}

.modal-localizationContent {
  padding-top: 20px;
}

.modal-contentOption.active {
  border-bottom: 2px solid #000;
}
</style>
