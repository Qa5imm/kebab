<template>
  <div id="testimonials" class="flex flex-col items-center">
    <SectionHeader
      sectHeader="TESTIMONIALS"
      sectHeadline="Read What Others Have To Say"
    />
    <div :class="`flex gap-x-12 ${testimMd}`">
      <Testimonial
        v-for="item in data"
        :name="item.name"
        :description="item.description"
        class="basis-1/3"
      />
    </div>
  </div>
</template>
<script setup>
import { data } from "./TestimonialsData";

// media queries
const testimMd = `max-sm:flex-col max-sm:gap-y-8 max-md:gap-x-6`;
</script>
