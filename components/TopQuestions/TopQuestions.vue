<template>
  <div id="faqs" class="flex flex-col items-center justify-center">
    <SectionHeader
      sectHeader="Top Questions"
      sectHeadline="Clear All Your Confusions"
    />
    <div class="w-full flex flex-col items-center">
      <TopQuestion
        v-for="item in data"
        :query="item.query"
        :answer="item.answer"
      />
    </div>
  </div>
</template>
<script setup>
import { data } from "./TopQuestionsData";
</script>
