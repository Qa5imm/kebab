<template>
  <div id="dropdown" class="relative md:hidden">
      <ClientOnly>
        <font-awesome-icon
          @click="toggleDropdown"
          icon="fa-solid fa-bars"
          class="text-3xl text-bred-200 cursor-pointer"
        />
      </ClientOnly>
    <div
      id="menu"
      v-show="display"
      class="absolute py-4 rounded-lg right-0 top-6 z-10"
    >
      <ul
        class="flex flex-col text-bred-200 w-32 border px-4 gap-y-2 py-2 rounded-lg bg-bgray-100"
      >
        <li class="text-center w-full hover:opacity-60" v-for="navItem in data">
          <nuxt-link to="/">{{ navItem }}</nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import { data } from "./NavbarData";
const display = ref(false);
function toggleDropdown(e) {
  display.value = !display.value;
}
</script>
