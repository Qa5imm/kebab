<template>
  <div id="services" class="flex flex-col items-center">
    <SectionHeader sectHeader="SERVICES" sectHeadline="What Sets Us Apart" />
    <div :class="`flex gap-x-16 justify-center ${servicesMd}`">
      <Service
        v-for="item in data"
        :icon="item.icon"
        :title="item.title"
        :description="item.description"
        class="shadow-bbs basis-1/3"
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
max-lg:gap-x-6
`;
</script>
