<script setup lang="ts">
import ReviewsSummary from 'src/components/Reviews/ReviewsSummary.vue';
import ReviewSearchFilter from 'src/components/Reviews/ReviewSearchFilter.vue';
import ReviewList from 'src/components/Reviews/ReviewList.vue';
import { ref } from 'vue';

interface ReviewScore {
  score: number;
  count: number;
  label?: string;
}

interface review {
  score: number;
  likeCount: number;
  isUserLiked: boolean;
  createdAt: string;
  title: string;
  mainText: string;
  userName: string;
  userLocation: string;
  userContributionCount: number;
  imageUrl?: string;
}

const reviewScores = ref<ReviewScore[]>([
  {
    score: 5,
    count: 872,
    label: 'Mükemmel',
  },
  {
    score: 4,
    count: 256,
    label: 'Çok iyi',
  },
  {
    score: 3,
    count: 102,
    label: 'Orta',
  },
  {
    score: 2,
    count: 53,
    label: 'Kötü',
  },
  {
    score: 1,
    count: 8,
    label: 'Berbat',
  },
]);

const totalReviews = reviewScores.value.reduce(
  (acc, curr) => acc + curr.count,
  0
);

const score =
  Math.round(
    (reviewScores.value.reduce(
      (acc, curr) => acc + curr.score * curr.count,
      0
    ) /
      totalReviews) *
      10
  ) / 10;

const reviews = ref<review[]>([
  {
    score: 4,
    likeCount: 451,
    isUserLiked: false,
    createdAt: '16/10/2021',
    title: 'Çok güzel bir yer',
    mainText:
      "Şubat 2019'da Mexico-Cuba turuna gittik. Genel kültürüme ve tarih bilgime güvenirim. Dünyada çoğu ülkeyi dolaştım. Ama böyle bir kültür-tarih hazinesi beni şaşırttı doğrusu. İnanılmaz buldum. Taş devrinden beri bölgede olan herşey belirli bir düzen içinde görsel-yazısal anlatılmış. Ayrıca, Asya'lı atalarının varlığına ve nasıl geldiklerine ait açık kanıtları net bir şekilde sergilemişler. Kültür hazinesi mevcut. Bana göre, dünyada en çok görülesi müze ve şehirdi. Çok memnun kaldım. Tavsiye ederim.",
    userName: 'SenaKH',

    userLocation: 'İstanbul, Türkiye',
    userContributionCount: 12,
    imageUrl: 'src/assets/profilePicture1.jpg',
  },
  {
    score: 3,
    likeCount: 256,
    isUserLiked: true,
    createdAt: '8/12/2022',
    title: 'Ortalama bir gezi',
    mainText:
      'Meksika ya gelince muhakkak uzun süre ayırıp gezilmeli. Bir çok medeniyeti kapsayan bu müzeye hayran kaldım. Bir çok eseri sağlam şekilde görebiliyorsunuz. Ardından da bu eserlerin ait olduğu mekanlarıda ziyaret edin',
    userName: 'drerata',

    userLocation: 'Eskişehir, Türkiye',
    userContributionCount: 12,
    imageUrl: 'src/assets/profilePicture2.jpg',
  },
  {
    score: 5,
    likeCount: 12,
    isUserLiked: false,
    createdAt: '25/11/2021',
    title: 'Mütiş',
    mainText:
      'Ortam gerçekten çok başarılı. Dünya üzerinde gelebileceğiniz en iyi müzelerden biri. İçerisi ayrı zengin, bulunduğu bölge ayrı keyifli. İnsanlık tarihi çok güzel ve başarılı bir şekilde anlatılmış. Eğer çok iyi incelemek istiyorsanız en az yarım gün ayırın çıkarken hediyelik eşya dükkanına da uğramayı unutmayın.',
    userName: 'Zeki O',

    userLocation: 'Bolu, Türkiye',
    userContributionCount: 12,
    imageUrl: 'src/assets/profilePicture3.jpg',
  },
]);

const showedReviews = ref<review[]>(reviews.value);

const reviewsSortBy = ref('En Yeni');

const handleSearch = (searchText: string) => {
  if (searchText === '') {
    showedReviews.value = reviews.value;
  } else {
    showedReviews.value = reviews.value.filter(
      (review) =>
        review.mainText.toLowerCase().includes(searchText.toLowerCase()) ||
        review.title.toLowerCase().includes(searchText.toLowerCase()) ||
        review.userName.toLowerCase().includes(searchText.toLowerCase())
    );
  }
};

const handleSort = (sortBy: string) => {
  reviewsSortBy.value = sortBy;
  if (sortBy === 'En Yeni') {
    showedReviews.value = reviews.value.sort((a, b) => {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });
  } else if (sortBy === 'En Eski') {
    showedReviews.value = reviews.value.sort((a, b) => {
      return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
    });
  }
};
</script>

<template>
  <div class="container">
    <h1 class="reviews-containerTitle">Yorumlar</h1>
    <div class="reviews-innerContainer">
      <ReviewsSummary
        :review-scores="reviewScores"
        :total-reviews="totalReviews"
        :score="score"
      ></ReviewsSummary>
      <div class="reviews-outerSection">
        <ReviewSearchFilter
          @search="handleSearch"
          @sort="handleSort"
        ></ReviewSearchFilter>
        <ReviewList :reviews="showedReviews"></ReviewList>
      </div>
    </div>
  </div>
</template>

<style scoped>
.reviews-containerTitle {
  font-size: 24px;
  font-weight: 700;
}

.reviews-innerContainer {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 80px;
}
</style>
