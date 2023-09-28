<template>
  <div :class="`flex items-start justify-center gap-x-16 ${serviceMd}`">
    <div id="image" :class="`w-80 max-h-52 flex justify-center ${imgMd}`">
      <img
        :src="`images/${img}`"
        alt=""
        class="object-contain"
        loading="lazy"
      />
    </div>
    <div :class="`flex items-baseline self-auto gap-x-4 w-1/2 ${contentMd}`">
      <div id="divider" class="flex flex-col items-center">
        <div class="h-4 w-4 bg-black"></div>
        <div
          v-if="last !== true"
          :class="`h-52 w-0 border-l-2 border-black mt-2 ${barMd}`"
        ></div>
      </div>
      <div id="description" class="flex flex-col">
        <h2 class="font-bold text-2xl">{{ title }}</h2>
        <div class="">
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
const serviceMd = ` 
    max-md:flex-col 
    max-md:items-center
    max-md:gap-y-4
`;

const imgMd = `
  max-md:w-70
`;
const contentMd = `
  max-md:w-full
`;

const barMd = `
  max-md:h-0
`;
</script>
