<script lang="ts" setup>
const { summaryItems } = useSummary();
</script>

<template>
  <div class="main">
    <!-- Container -->
    <div class="container">
      <!-- Your Result -->
      <div class="results">
        <div>Your Result</div>
        <div>
          <span>76</span>
          <span>of</span>
          <span>100</span>
        </div>
        <div>
          Great
        </div>
        <div>
          You scored higher that 65% of the people who have taken these tests.
        </div>
      </div>
      <!-- Summary -->
      <div class="summary">
        <div>Summary</div>
        <div>
          <div v-for="({ category, icon, score }, index) in summaryItems" :key="index">
            <div>
              <span><img :src="icon" alt=""></span>
            </div>
            <div>
              <span>{{ category }}</span>
              <span>{{ score }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css');
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}
.main {
  display: grid;
  justify-content: center;
  align-content: center;
  height: 100vh;
}
.results {
  border: 1px solid #ccc;
  border-radius: 1rem;
}
</style>
