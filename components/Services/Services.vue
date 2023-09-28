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
import { maxStringCombiner } from "../utils";
import { data } from "./ServicesData";
const servicesMdArray = ["flex-col", "gap-y-12", "items-center"];
const servicesMd = maxStringCombiner("md", servicesMdArray);
</script>
