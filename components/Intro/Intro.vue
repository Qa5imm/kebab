<template>
  <div class="flex flex-col items-center gap-y-10 max-sm:gap-y-6">
    <h1 id="title" class="font-bold text-4xl max-md:text-3xl max-sm:text-2xl">
      One Stop To All Your Rushes
    </h1>
    <h3
      id="headline"
      class="text-bgray-400 text-2xl w-auto text-center max-md:text-xl max-sm:text-lg"
    >
      Pakistan's First And Only Bike Renting <br />
      Service
    </h3>
    <a
      id="button"
      class="bg-bred-200 text-white px-4 py-2 rounded-lg font-semibold max-md:px-3"
      href="https://wa.me/03224334086"
      target="_blank"
      >Try it now</a
    >
  </div>
</template>
<style scoped>
@keyframes glideUp {
  0% {
    transform: translateY(50%);
    opacity: 0;
  }
  40% {
    transform: translateY(20%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
#title {
  animation-name: glideUp;
  animation-duration: 0.4s;
  animation-delay: 0.3s;
  animation-fill-mode: both;
}
#headline {
  animation-name: glideUp;
  animation-duration: 0.6s;
  animation-delay: 0.3s;
  animation-fill-mode: both;
}
#button {
  animation-name: glideUp;
  animation-duration: 1s;
  animation-delay: 0.3s;
  animation-fill-mode: both;
}
</style>
