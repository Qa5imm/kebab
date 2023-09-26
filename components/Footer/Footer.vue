<template>
  <div
    class="bg-bgray-300 flex justify-center justify-around items-baseline py-8"
  >
    <div id="contactus">
      <h1 class="tracking-wider font-bold text-xl mb-1">BIKE CHAIYE</h1>
      <ClientOnly>
        <ul class="flex gap-x-5">
          <li v-for="name in socialHandles">
            <font-awesome-icon :icon="`fa-brands fa-${name}`" class="text-xl" />
          </li>
        </ul>
      </ClientOnly>
      <div class="flex flex-col gap-y-3 mt-4">
        <div>
          <p class="font-bold">Contact us</p>
          <p>0321-12345678</p>
        </div>
        <div>
          <p class="font-bold">Email us</p>
          <p>bikechaiye@gamil.com</p>
        </div>
      </div>
    </div>
    <FooterNavigator
      v-for="item in items"
      :title="item.title"
      :links="item.links"
    />
    <div class="flex flex-col gap-y-6">
      <h1 class="font-bold">Stay update on the latest news from us</h1>
      <div>
        <p class="font-medium mb-4">Enter your email address</p>

        <input
          type="text"
          class="border-b-2 border-black w-full bg-inherit outline-0"
          v-model="email"
        />
      </div>
      <button
        class="py-2 px-3 bg-bred-200 w-1/2 text-white hover:opacity-90"
        @click="onClick"
      >
        Sign up
      </button>
    </div>
  </div>
</template>

<script setup>
import { items, socialHandles } from "./FooterData";
const email = ref(null);
const onClick = (e) => {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (emailPattern.test(email.value)) {
    e.target.innerText = "Signed up";
    e.target.disabled = true;
  } else {
    e.target.innerText = "Invalid Email";
  }
};
</script>
