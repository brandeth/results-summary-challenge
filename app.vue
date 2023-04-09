<script lang="ts" setup>
const { summaryItems } = useSummary();
</script>

<template>
  <div class="main">
    <!-- Container -->
    <div class="container">
      <!-- Your Result -->
      <div class="results">
        <h1>Your Result</h1>
        <!-- Make this container a circle -->
        <div class="results__display__container">
          <div class="results__display">
            <div class="results__numerator">76</div>
            <div class="results__denominator">
              <p>of 100</p>
            </div>
          </div>
        </div>
        <h1>
          Great
        </h1>
        <p>
          You scored higher that 65% of the people who have taken these tests.
        </p>
      </div>
      <!-- Summary -->
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
                <span class="summary__item__user-score">{{ score }}</span><span> / 100</span>
              </div>
            </div>
          </div>
        </div>

        <button class="summary__button">Continue</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css');

.main {
  display: grid;
  justify-content: center;
  align-content: center;
  min-height: 100vh;
}
</style>
