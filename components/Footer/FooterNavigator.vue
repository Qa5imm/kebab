<template>
  <div>
    <h2 class="mb-8 font-bold tracking-wider">{{ title }}</h2>
    <div class="flex flex-col gap-y-2">
      <nuxt-link v-for="link in links" :to="link.href">{{
        link.name
      }}</nuxt-link>
    </div>
  </div>
</template>
<script setup>
const { title, links } = defineProps({
  title: String,
  links: Array,
});
</script>
