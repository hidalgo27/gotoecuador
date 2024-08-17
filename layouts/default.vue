<template>
  <div>
    <Headers class="sticky top-0 sm:relative z-50"></Headers>

    <slot/>

    <section class="py-2 bg-gray-100 mt-12 relative z-10">

      <form-footer-inquire></form-footer-inquire>
    </section>
    <Footer></Footer>

    <div class="">
      <div class="fixed bottom-0 right-0 z-40 py-2 px-4 sm:inline-flex md:mb-0 md:hidden">
        <a href="#form-dream-adventure" class="">
          <div class="flex items-center">
            <span class="bg-gray-800 text-white -mr-3 py-2 px-4 rounded-lg border-2 border-secondary">Start my quote</span>
            <nuxt-img src="/images/team/men1.webp" alt="" class="w-16 h-16 rounded-full bg-white object-cover object-top border-2 border-secondary"></nuxt-img>
          </div>
        </a>
      </div>

      <div class="fixed bottom-0 mb-20 right-0 z-40 py-6 px-7 sm:inline-flex md:mb-0">
        <a href="https://api.whatsapp.com/send?phone=12024911478" target="_blank">
            <span class="flex relative h-10 w-10">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-400 opacity-75"></span>
            </span>
        </a>
      </div>
      <div class="fixed bottom-0 mb-20 right-0 z-40 py-5 px-6 sm:inline-flex md:mb-0">
        <a href="https://api.whatsapp.com/send?phone=12024911478" target="_blank" class="bg-white rounded-full">
          <nuxt-img src="/icons/whatsapp.svg" alt="" class="w-12"></nuxt-img>
        </a>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">

import Headers from "~/components/page/Headers.vue";
import Footer from "~/components/page/Footer.vue";
</script>