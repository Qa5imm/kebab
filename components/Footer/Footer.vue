<template>
  <div id="contactus" :class="`bg-bgray-300 flex flex-col gap-y-12 py-12`">
    <div class="flex flex-col gap-y-6 mx-4 justify-around border border-2 rounded-lg p-4 md:flex-row md:mx-12">
       <div class="flex gap-x-4 items-center">
        <ClientOnly>
          <font-awesome-icon
            icon="fa-solid fa-phone-volume"
            class="text-2xl md:text-4xl text-bred-200 cursor-pointer"
          />
        </ClientOnly>
        <div>
          <p class="font-bold">Call us</p>
          <p>03224334086</p>
        </div>
      </div>
      <p class="border"></p>
      <div class="flex gap-x-4 items-center">
        <ClientOnly>
          <font-awesome-icon
            icon="fa-solid fa-envelope"
            class="text-2xl md:text-4xl text-bred-200 cursor-pointer"
          />
        </ClientOnly>
        <div>
          <p class="font-bold">Email us</p>
          <p>bikechaiye@gmail.com</p>
        </div>
      </div>
      <p class="border"></p>

      <div class="flex gap-x-4 items-center">
        <ClientOnly>
          <font-awesome-icon
            icon="fa-solid fa-location-dot"
            class="text-2xl md:text-4xl text-bred-200 cursor-pointer"
          />
        </ClientOnly>
        <div>
          <p class="font-bold">Address</p>
          <p>DHA Phase 5, Lahore</p>
        </div>
      </div>
    </div>
    <div
      :class="` flex justify-around items-baseline flex-wrap gap-x-6  ${footerSect}`"
    >
      <div >
        <h1 class="tracking-wider font-bold text-xl mb-1">BIKE CHAIYE</h1>
        <ClientOnly>
          <div class="flex gap-x-5">
            <a
              :href="socialHandle.link"
              target="_blank"
              v-for="socialHandle in socialHandles"
            >
              <font-awesome-icon
                :icon="`fa-brands fa-${socialHandle.icon}`"
                class="text-xl"
              />
            </a>
          </div>
        </ClientOnly>
      </div>
      <FooterNavigator
        v-for="item in items"
        :title="item.title"
        :links="item.links"
      />
      <div :class="`flex flex-col gap-y-6 ${signupMd}`">
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
// media queries
const footerSect = `max-md:justify-between max-md:px-6`;
const signupMd = `max-md:mt-6`;
</script>
