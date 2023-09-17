<template>
  <div class="relative flex justify-center mt-12">
    <div id="img" class="w-[5.5rem] h-[5.5rem] absolute -top-1/4">
      <img :src="`${config.BASE_URL}/images/default.jpg`" alt="" class="rounded-full" />
    </div>
    <div class="bg-bred-200 text-white pt-12 pb-6 px-8 rounded-2xl h-52">
      <h2 class="font-semibold text-center">{{ name }}</h2>
      <p class="text-center">
        {{ description }}
      </p>
    </div>
  </div>
</template>
<script setup>
const config = useRuntimeConfig()

const { name, description } = defineProps({
  name: String,
  description: String,
});
</script>
