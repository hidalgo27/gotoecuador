<template>
  <div class="">
    <div class="shadow">
      <div class="container flex justify-between py-6 items-center">
        <div class="flex items-end gap-4">
          <nuxt-link to="/"><nuxt-img src="/images/logos/logo-gotoecuador3.svg" class="w-[150px] md:w-[270px]"></nuxt-img></nuxt-link>
          <Typing></Typing>
        </div>
        <div class="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" @click="packageStore.showModalMenu = !packageStore.showModalMenu">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </div>
  <!--      <Nav></Nav>-->
        <div class="flex gap-3 items-center">
          <span class="font-semibold">+1 (202) 4911478</span>
          <a class="btn-secondary" href="#form-dream-adventure">Inquire Now</a>
        </div>
      </div>
    </div>
    <div class="bg-gray-50">
      <nav class="container flex justify-center text-center">
        <nuxt-link to="/ecuador-travel-packages" class="menu-list" active-class="active">Peru Travel Packages</nuxt-link>
        <nuxt-link to="/destinations" class="menu-list" active-class="active">Destinations</nuxt-link>
        <nuxt-link to="/hotels" class="menu-list" active-class="active">hotel</nuxt-link>
        <!--      <nuxt-link to="/#top-12" class="flex gap-2 items-center"><img src="/icons/star.svg"> Top tours</nuxt-link>-->
        <!--      <nuxt-link to="/reviews" class="flex gap-2 items-center"><img src="/icons/search.svg"> Reviews</nuxt-link>-->

        <VDropdown>
          <button class="menu-list flex items-center gap-1">
            About us
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 h-4 w-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>

          </button>

          <template #popper>
<!--            <button v-close-popper>Close</button>-->
            <div class="py-6">
              <nuxt-link v-close-popper to="/why-book-with-us" class="menu-list" active-class="active">Why book with us</nuxt-link>
              <nuxt-link v-close-popper to="/travel-with-confidence" class="menu-list" active-class="active">Travel with confidence</nuxt-link>
              <nuxt-link v-close-popper to="/booking-terms-and-conditions" class="menu-list" active-class="active">booking terms and conditions</nuxt-link>
              <nuxt-link v-close-popper to="/about-us" class="menu-list" active-class="active">About us</nuxt-link>
              <nuxt-link v-close-popper to="/frequently-asked-questions" class="menu-list" active-class="active">frequently Asked Questions</nuxt-link>
            </div>
          </template>
        </VDropdown>
        <nuxt-link to="/reviews" class="menu-list" active-class="active">Reviews</nuxt-link>

      </nav>

    </div>
  </div>
</template>
<script setup lang="ts">
import {usePackageStore} from "~/stores/packages";
import Nav from "~/components/page/Nav.vue";
import Typing from "~/components/page/Typing.vue";
const packageStore = usePackageStore()
</script>
