<template>
  <div id="dropdown" class="flex flex-col items-center w-3/5">
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
      <p class="w-10/12 py-3 px-3 text-start">{{ answer }}</p>
    </div>
  </div>
</template>
<script setup>

const { query, answer } = defineProps({
  query: String,
  answer: String,
});

const inputId = `touch-${Math.random().toString(36).substring(7)}`;


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
  height: 6rem;
}
</style>

<!-- <style scoped>
#dropdown > #menu {
  height: 0;
  opacity: 0;
  transition: opacity 0s linear;
}
#dropdown:hover > #menu {
  margin-bottom: 2rem;
  height: fit-content;
  opacity: 1;
  transition-duration: 0.5s;
}
</style> -->
