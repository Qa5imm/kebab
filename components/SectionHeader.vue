<template>
  <div class="flex flex-col gap-y-2 mb-20 max-md:mb-12">
    <h3 class="font-semibold text-center">
      {{ sectHeader }}
    </h3>
    <h1 class="text-3xl font-bold max-md:text-2xl">
      {{ sectHeadline }}
    </h1>
  </div>
</template>

<script setup>
const { sectHeader, sectHeadline } = defineProps({
  sectHeader: String,
  sectHeadline: String,
});
</script>
