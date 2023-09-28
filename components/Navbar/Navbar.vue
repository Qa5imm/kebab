<template>
  <nav class="flex justify-between items-center my-4">
    <img
      :src="`/images/bikeChaiye.jpg`"
      alt=""
      class="h-24 w-24"
      loading="lazy"
    />
    <ul class="flex text-bred-200 gap-x-12 font-bold text-lg max-md:hidden">
      <li v-for="navItem in data">
        <nuxt-link :to="navItem.href">{{ navItem.name }}</nuxt-link>
      </li>
    </ul>
    <Dropdown />
  </nav>
</template>
<script setup>
import { data } from "./NavbarData";
console.log(data)
const config = useRuntimeConfig();
</script>
