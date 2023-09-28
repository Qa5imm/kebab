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

    <div id="menu" :class="` w-full bg-bgray-200 rounded-b-lg`">
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
  height: 0px;
  overflow: hidden;
  text-align: center;
  transition: height 0.4s ease;
}
:checked + #menu {
  height: 5rem;
}

@media screen and (max-width: 768px) {
  :checked + #menu {
    height: 8rem;
  }
}
</style>
