<template>
  <div id="services" class="flex flex-col items-center">
    <SectionHeader sectHeader="SERVICES" sectHeadline="What Sets Us Apart" />
    <div :class="`flex gap-x-20 justify-center ${servicesMd}`">
      <Service
        v-for="item in data"
        :icon="item.icon"
        :title="item.title"
        :description="item.description"
        class="shadow-bbs"
      />
    </div>
  </div>
</template>
<script setup>
import { data } from "./ServicesData";

// media queries
const servicesMd = `
max-md:flex-col
max-md:gap-y-12 
max-md:items-center
`;
</script>
