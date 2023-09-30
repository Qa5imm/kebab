<template>
  <div :class="`flex items-start justify-center gap-x-24 ${serviceMd}`">
    <img
      :src="`images/${img}`"
      alt=""
      :class="`object-contain w-60 h-48 flex justify-center ${imgMd}`"
      loading="lazy"
    />
    <div :class="`flex items-baseline gap-x-4 ${contentMd} w-1/3`">
      <div id="divider" class="flex flex-col items-center">
        <div class="h-4 w-4 bg-black mt-0"></div>
        <div
          v-if="last !== true"
          :class="`h-48 w-0 border-l-2 border-black  ${barMd}`"
        ></div>
      </div>
      <div id="description" class="flex flex-col">
        <h2 :class="`font-bold text-2xl ${titleMd} `">{{ title }}</h2>
        <div class="w-fit">
          {{ description }}
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const { img, title, description, last } = defineProps({
  img: String,
  title: String,
  description: String,
  last: Boolean,
});

// media queries -- max-width
const serviceMd = `max-md:flex-col  max-md:items-center max-md:gap-y-4`;
const imgMd = `max-md:w-70`;
const contentMd = `max-md:w-full`;
const barMd = `max-md:h-0`;
const titleMd = ` max-md:text-xl`;
</script>
