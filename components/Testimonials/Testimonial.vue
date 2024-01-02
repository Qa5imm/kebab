<template>
  <div class="flex justify-center relative pt-12">
    <img
      :src="`images/default.jpg`"
      alt=""
      class="w-[4.5rem] h-[4.5rem] rounded-full absolute top-0"
      loading="lazy"
    />
    <div class="bg-bred-200 text-white pt-12 pb-6 px-6 rounded-2xl">
      <h2 class="font-semibold text-center">{{ name }}</h2>
      <p class="text-center text-sm">
        {{ description }}
      </p>
    </div>
  </div>
  <!-- </div> -->
</template>
<script setup>
const config = useRuntimeConfig();

const { name, description } = defineProps({
  name: String,
  description: String,
});
</script>
