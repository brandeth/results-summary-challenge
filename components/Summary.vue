<script setup lang="ts">
defineProps<{
  summaryItems: {
    category: string;
    icon: string;
    score: number;
  }[];
}>()

const total = ref(100)
</script>

<template>
  <div class="summary">
    <h1 class="summary__title">Summary</h1>
    <div class="summary__item__container">
      <div v-for="({ category, icon, score }, index) in summaryItems" :key="index" :class="`summary__item summary__item__${category}`">
        <img class="summary__item__icon" :src="icon" alt="">
        <div class="summary__item__details">
          <div>
            <span class="summary__item__category">{{ category }}</span>
          </div>
          <div class="summary__item__score">
            <span class="summary__item__user-score">{{ score }}</span><span> / {{ total }}</span>
          </div>
        </div>
      </div>
    </div>

    <button class="summary__button">Continue</button>
  </div>
</template>