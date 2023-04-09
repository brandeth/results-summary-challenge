<script lang="ts" setup>
const { summaryItems } = useSummary();
</script>

<template>
  <div class="main">
    <div class="container">
      <Results />
      <Summary :summaryItems="summaryItems" />
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
