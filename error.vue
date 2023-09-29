<template>
  <div
    class="flex flex-col items-center border-4 border-bred-200 mt-12 mx-auto w-fit px-24 py-12 gap-y-3"
  >
    <p class="font-bold text-4xl">{{ error.statusCode }}</p>
    <p>Oops :(</p>
    <p>{{ error.message }}</p>
    <nuxt-link to="/" class="font-bold hover:underline px-2 py-1 rounded-md">Back to BikeChaiye?</nuxt-link>
  </div>
</template>
<script setup>
defineProps(["error"]);
</script>
