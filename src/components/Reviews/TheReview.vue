<script setup lang="ts">
import { ref } from 'vue';
import ReviewScoreIndicator from './ReviewScoreIndicator.vue';
import { defineProps } from 'vue';

interface formattedDate {
  day: number;
  month: number;
  year: number;
}

const props = defineProps({
  score: {
    type: Number,
    required: true,
  },
  likeCount: {
    type: Number,
    required: true,
  },
  isUserLiked: {
    type: Boolean,
    required: true,
  },
  createdAt: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  mainText: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  userLocation: {
    type: String,
    required: true,
  },
  userContributionCount: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
    required: false,
  },
});

const isUserLiked = ref<boolean>(props.isUserLiked);
const likeCount = ref<number>(props.likeCount);
const formattedReviewDate = ref<formattedDate>({
  day: Number(props.createdAt.split('/')[0]),
  month: Number(props.createdAt.split('/')[1]),
  year: Number(props.createdAt.split('/')[2]),
});

const months = <string[]>[
  'Oca',
  'Şub',
  'Mar',
  'Nis',
  'May',
  'Haz',
  'Tem',
  'Ağu',
  'Eyl',
  'Eki',
  'Kas',
  'Ara',
];

const handleLikeClick = () => {
  isUserLiked.value = !isUserLiked.value;
  if (isUserLiked.value) {
    likeCount.value++;
  } else {
    likeCount.value--;
  }
};
</script>

<template>
  <div class="review-container">
    <div class="review-top">
      <div class="review-profilePicture-wrapper">
        <img :src="props.imageUrl" alt="" />
      </div>
      <div class="review-userInfo-container">
        <span>{{ props.userName }}</span>
        <div class="review-userInfo-sum">
          <span>{{ props.userLocation }}</span>
          <span> {{ props.userContributionCount }} katkı</span>
        </div>
      </div>
      <div @click="handleLikeClick" class="review-likeSection-container">
        <div class="review-likeBtn">
          <i v-if="!isUserLiked" class="ri-thumb-up-line"></i>
          <i v-if="isUserLiked" class="ri-thumb-up-fill"></i>
        </div>
        <span class="review-likeCount">{{ likeCount }}</span>
      </div>
    </div>
    <div class="review-body">
      <ReviewScoreIndicator :score="props.score" />
      <span class="review-body-title">{{ props.title }}</span>
      <span
        >{{ months[formattedReviewDate.month - 1] }}
        {{ formattedReviewDate.year }}</span
      >
      <p class="review-body-mainText">
        {{ props.mainText }}
      </p>
      <span class="review-disclaimer"
        >Yazıldığı tarih: {{ formattedReviewDate.day }}
        {{ months[formattedReviewDate.month - 1] }}
        {{ formattedReviewDate.year }}</span
      >
      <p class="review-disclaimer">
        Bu yorum, bir Tripadvisor üyesinin öznel görüşü olup Tripadvisor LLC
        şirketine ait değildir. Tripadvisor, yorumlar üzerinde kontroller
        yapmaktadır.
      </p>
    </div>
  </div>
</template>

<style scoped>
.review-container {
  padding-top: 32px;
  margin-top: 32px;
  border-top: 1px solid #e0e0e0;
}
.review-disclaimer {
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  color: #333;
  margin-bottom: 0;
}
.review-body-title {
  font-size: 16px;
  font-weight: 500;
}
.review-profilePicture-wrapper {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  overflow: hidden;
  min-width: 32px;
}

.review-top {
  display: flex;
  align-items: center;
  gap: 8px;
}

.review-userInfo-sum {
  display: flex;
  gap: 5px;
}

.review-userInfo-sum span:last-child::before {
  content: '\00a0\2022\00a0';
  font-weight: 400;
  line-height: 1px;
  color: #717171;
}

.review-userInfo-sum span {
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  color: #717171;
}

.review-userInfo-container {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.review-userInfo-container > span {
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
}

.review-likeSection-container {
  display: flex;
  align-items: center;
  gap: 3px;
  margin-left: auto;
  user-select: none;
  cursor: pointer;
  transition: 300ms;
  border-radius: 20px;
  padding: 5px 10px;
}

.review-likeSection-container:hover {
  color: #343434;
  background-color: #d9d9d9;
}

.review-body {
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-top: 16px;
}

.review-body-mainText {
  margin-bottom: 0;
}
</style>
