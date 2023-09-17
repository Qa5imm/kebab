<template>
  <div class="w-1/4 px-6 py-12 flex flex-col items-center gap-y-4 rounded-lg bg-bgray-100">
    <div id="icon-circle" class="h-20 w-20 rounded-full bg-bred-200 flex items-center justify-center">
      <ClientOnly>
        <font-awesome-icon :icon="`fa-solid fa-${icon}`" class="text-3xl text-white" />
      </ClientOnly>
    </div>
    <h1 class="font-bold text-xl">{{ title }}</h1>
    <p class="text-center">
      {{ description }}
    </p>
  </div>
</template>
<script setup>
const { icon, title, description } = defineProps({
  icon: String,
  title: String,
  description: String,
});
</script>
