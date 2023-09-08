<template>
  <div id="rentabike" class="flex flex-col justify-center items-center">
    <SectionHeader sectHeader="RENT A BIKE" sectHeadline="How Does It Work" />
    <div class="flex flex-col items-center">
      <RentaBikeStep
        v-for="item in data"
        :img="item.img"
        :title="item.title"
        :description="item.description"
        :last="item.last"
      />
    </div>

  </div>
</template>
<script setup>
import { data } from "./RentaBikeData";
</script>
