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
    <a
      id="button"
      class="bg-bred-200 text-white px-4 py-2.5 rounded-lg font-semibold mt-16 flex gap-x-2 max-md:px-3"
      href="https://wa.me/+923224334086"
      target="_blank"
      >Rent now
      <ClientOnly>
        <font-awesome-icon
          :icon="`fa-solid fa-square-up-right`"
          class="text-2xl text-white"
        />
      </ClientOnly>
    </a>
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
