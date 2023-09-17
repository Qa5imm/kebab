<template>
  <nav class="flex justify-between items-center my-4">
    <img :src="`${config.BASE_URL}/images/bikeChaiye.jpg`" alt="" class="h-24 w-24" />
    <ul class="flex text-bred-200 gap-x-12 font-bold text-lg">
      <li><nuxt-link to="/">Home</nuxt-link></li>
      <li><nuxt-link to="/#services">Services</nuxt-link></li>
      <li><nuxt-link to="/#rentabike">Rent Bike</nuxt-link></li>
      <li><nuxt-link to="/about">About us</nuxt-link></li>
      <li><nuxt-link to="/#contactus">Contact us</nuxt-link></li>
    </ul>
  </nav>
</template>
<script setup>
const config = useRuntimeConfig()

</script>
