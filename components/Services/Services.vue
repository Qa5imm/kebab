<template>
  <div id="services" class="flex flex-col items-center">
    <SectionHeader sectHeader="SERVICES" sectHeadline="What Sets Us Apart" />
    <div class="flex gap-x-20 justify-center">
      <Service
        v-for="item in data"
        :icon="item.icon"
        :title="item.title"
        :description="item.description"
        class=" shadow-bbs"
      />
    </div>
  </div>
</template>
<script setup>
import { data } from "./ServicesData";
</script>
