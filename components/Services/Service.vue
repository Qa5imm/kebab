<template>
  <div
    :class="`w-1/4 px-6 py-12 flex flex-col items-center gap-y-4 rounded-lg bg-bgray-100 ${mediaMd}`"
  >
    <div
      id="icon-circle"
      class="h-20 w-20 rounded-full bg-bred-200 flex items-center justify-center"
    >
      <ClientOnly>
        <font-awesome-icon
          :icon="`fa-solid fa-${icon}`"
          class="text-3xl text-white"
        />
      </ClientOnly>
    </div>
    <h1 class="font-bold text-xl">{{ title }}</h1>
    <p class="text-center text-[0.9rem]">
      {{ description }}
    </p>
  </div>
</template>
<script setup>
const mediaMd = `
max-md:w-9/12
max-sm:w-full
max-sm:px-2
max-sm:py-6
`;
const { icon, title, description } = defineProps({
  icon: String,
  title: String,
  description: String,
});
</script>
