<template>
  <div id="testimonials" class="flex flex-col items-center">
    <SectionHeader
      sectHeader="TESTIMONIALS"
      sectHeadline="Read What Others Have To Say"
    />
    <div class="flex gap-x-20">
      <Testimonial
        v-for="item in data"
        :name="item.name"
        :description="item.description"
      />
    </div>
  </div>
</template>
<script setup>
import { data } from "./TestimonialsData";
</script>
