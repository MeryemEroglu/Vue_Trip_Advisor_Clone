<script lang="ts" setup>
import { ref } from 'vue';
import FAQItem from 'src/components/FAQItem.vue';

interface Question {
  question: string;
  answer: string;
}

const questionList = ref<Question[]>([
  {
    question: 'Milli Antropoloji Müzesi nerede?',
    answer:
      'Milli Antropoloji Müzesi, Ankara’nın Çankaya ilçesinde bulunmaktadır. Müze, Atatürk Bulvarı üzerinde yer almaktadır.',
  },
  {
    question: 'Milli Antropoloji Müzesi ne zaman açıldı?',
    answer:
      'Milli Antropoloji Müzesi, 1938 yılında açılmıştır. Müze, 1938 yılında Atatürk tarafından açılmıştır.',
  },
  {
    question: 'Milli Antropoloji Müzesi ne zaman kuruldu?',
    answer:
      'Milli Antropoloji Müzesi, 1938 yılında kurulmuştur. Müze, 1938 yılında Atatürk tarafından kurulmuştur.',
  },
]);
</script>

<template>
  <div class="fqa-container">
    <h1>Milli Antropoloji Müzesi ile ilgili Sık Sorulan Sorular</h1>
    <div class="fqa-questions">
      <div v-for="questionObj in questionList" :key="questionObj.question">
        <hr />
        <FAQItem
          :question="questionObj.question"
          :answer="questionObj.answer"
        ></FAQItem>
      </div>
      <hr />
    </div>
  </div>
</template>

<style scoped>
.fqa-container h1 {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 40px;
  line-height: 15px;
}

hr {
  margin: 16px 0;
  border: none;
  border-top: 1px solid #e0e0e0;
}
</style>
