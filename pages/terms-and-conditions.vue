<template>
  <div
    class="flex flex-col mb-24 items-center mt-16 gap-y-24 justify-center text-base text-bgray-400 md:text-xl"
  >
    <div class="w-3/4 flex flex-col gap-y-16 max-md:w-full">
      <div>
        <h1 class="text-black font-bold text-3xl text-center mb-8 md:text-5xl">
          Terms and conditions
        </h1>
        <div class="flex flex-col gap-y-8">
          <div v-for="(item, index) in data" :key="index" class="">
            <!-- Display the head of the section -->
            <h2 class="text-xl font-bold mb-2 text-black md:text-2xl">
              {{ Object.keys(item.head)[0] }}. {{ Object.values(item.head)[0] }}
            </h2>
            <!-- Loop through each key-value pair in the body of the section -->
            <ul class="flex flex-col gap-y-2">
              <li
                v-for="(content, key) in item.body"
                :key="key"
                class="flex gap-x-2"
              >
                <!-- Display the content of the section -->
                <span class="font-bold">{{ key }}</span> {{ content }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const config = useRuntimeConfig();

let data = [
  {
    head: { 1: "Procedure of renting bike" },
    body: {
      1.1: "Renter will always inform in respective BikeChahiye WhatsApp group before renting bike.",
      1.2: "Renter will always Report in inbox along with pictures (as an evidence) if any bike's part is damaged or misused before taking the bike; otherwise, it will be considered that damage is done by the last person who rented the bike.",
      1.3: "Renter will always inform in WhatsApp group if bike is damaged during his/her time slot. Otherwise, renter will bear DOUBLE penalty.",
    },
  },

  {
    head: { 2: "Theft/Damage" },
    body: {
      2.1: "Bike should be driven in safe areas only and kept always locked. In case of theft, the renter will pay for the price of bike within one month.",
      2.2: "Renter is solely responsible for any damage/theft during his/her time slot. Renter will inform about any loss immediately and will pay for it within 3 days.",
    },
  },
  {
    head: { 3: "Payment" },
    body: {
      3.1: "Renter will pay the rent within 24 hours of ending ride.",
      3.2: "Renter will only deposit in Jazz Cash number 03224334086(Abdul Basit). OR ALLIED BANK Ltd. 51140020073213910011 (AbdulBasit).",
    },
  },
  {
    head: { 4: "General Rules" },
    body: {
      4.1: "Renter will always wear a helmet and follow all traffic rules. In case of challan renter must pay for it.",
      4.2: "Bike can only be used for legal and ethical activities. (The activities which collide directly with social norms or religious believes are considered as unethical activities).",
    },
  },
  {
    head: { 5: "Penalties" },
    body: {
      5.1: "In case of violation of one or more rules stated above, one or more penalties will occur from the list below:. A fine of Rs.1000/- or more. Blacklisting. Legal actions against renter.",
    },
  },
  {
    head: { 6: "Refund Policy" },
    body: {
      6.1: "All the payments made are non-refundable under any circumstances.",
    },
  },
];
</script>
