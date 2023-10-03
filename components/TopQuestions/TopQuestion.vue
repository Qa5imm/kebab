<template>
  <div id="dropdown" :class="`flex flex-col items-center w-3/5 ${dropdownMd}`">
    <label
      class="py-3 px-3 w-full bg-bgray-200 flex justify-between items-center cursor-pointer rounded-t-lg mt-4"
      :for="inputId"
    >
      {{ query }}
      <ClientOnly>
        <font-awesome-icon icon="fa-solid fa-angle-down" class="text-xl" />
      </ClientOnly>
    </label>
    <input type="checkbox" :id="inputId" class="hidden" />

    <div id="menu" :class="`w-full bg-bgray-200 rounded-b-lg height-fit`">
      <p class="py-3 px-3 text-start">{{ answer }}</p>
    </div>
  </div>
</template>
<script setup>
const { query, answer } = defineProps({
  query: String,
  answer: String,
});

const inputId = `touch-${Math.random().toString(36).substring(7)}`;
const dropdownMd = `max-md:w-full`;
</script>
<style scoped>
#menu {
  clear: both;
  max-height: 0px;
  overflow: hidden;
  text-align: center;
  transition: max-height 0.8s ease;
}
:checked + #menu {
  max-height: fit-content;
  max-height: 8rem;
}
</style>
