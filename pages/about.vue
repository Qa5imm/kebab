<template>
  <div
    class="flex flex-col mb-24 items-center mt-12 gap-y-24 justify-center text-xl text-bgray-400"
  >
    <div class="flex justify-center items-center gap-x-12">
      <div
        class="rounded-full w-72 h-72 bg-red-400 border-[12px] border-red-500"
      >
        <img :src="`images/file.enc`" alt="" class="rounded-full"/>
      </div>

      <div class="basis-1/2">
        <h1 class="text-black text-start font-bold text-3xl text-2xl mb-4">
          About Founder
        </h1>
        <p class="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid error
          expedita asperiores explicabo facilis! Eaque nostrum doloribus
          reprehenderit repellendus. Porro minus doloremque odit voluptatum.
          Ullam non ipsa corporis repellendus id, similique aut voluptatem iure
          ipsum quia accusamus tempore, sint labore.
        </p>
      </div>
    </div>

    <div class="w-3/4 flex flex-col gap-y-16">
      <div>
        <h1 class="text-black font-bold text-3xl text-center mb-4">
          How it started?
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          cumque recusandae harum laboriosam laborum a expedita assumenda,
          ratione earum mollitia esse officiis voluptatem! Eaque recusandae
          soluta sequi beatae. Ipsam eos nemo quod repudiandae, dolore animi ex
          id hic, iste autem voluptas! Ipsam molestiae maiores excepturi in
          expedita eveniet eos dolor cumque! Deserunt quis culpa libero nisi
          consectetur amet reprehenderit quasi tempore tenetur magnam placeat
          corrupti, non ipsa voluptates aspernatur autem.
        </p>
      </div>
      <div>
        <h1 class="text-black font-bold text-3xl text-center mb-4">
          The Way Forward
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          cumque recusandae harum laboriosam laborum a expedita assumenda,
          ratione earum mollitia esse officiis voluptatem! Eaque recusandae
          soluta sequi beatae. Ipsam eos nemo quod repudiandae, dolore animi ex
          id hic, iste autem voluptas! Ipsam molestiae maiores excepturi in
          expedita eveniet eos dolor cumque! Deserunt quis culpa libero nisi
          consectetur amet reprehenderit quasi tempore tenetur magnam placeat
          corrupti, non ipsa voluptates aspernatur autem.
        </p>
      </div>
    </div>
  </div>
</template>
<script setup>
const config = useRuntimeConfig()

</script>