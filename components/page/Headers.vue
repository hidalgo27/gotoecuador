<template>
  <div class="">
    <div class="shadow hidden sm:block">
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
    <div class="bg-gray-50 hidden sm:block">
      <nav class="container flex justify-center text-center">
        <nuxt-link to="/ecuador-travel-packages" class="menu-list" active-class="active">Ecuador Travel Packages</nuxt-link>
        <nuxt-link to="/destinations" class="menu-list" active-class="active">Destinations</nuxt-link>
<!--        <nuxt-link to="/hotels" class="menu-list" active-class="active">hotel</nuxt-link>-->
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
            <div class="flex">
              <nuxt-link v-close-popper to="/why-book-with-us" class="menu-list " active-class="active">Why book with us</nuxt-link>
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

    <div class="w-full z-30 sm:hidden">


      <div class="bg-gray-50 w-full items-center mx-auto grid grid-cols-4 gap-3 text-center">


          <nuxt-link to="/" class="block menu-list-m" active-class="active">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.3" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </nuxt-link>

          <nuxt-link to="/ecuador-travel-packages" class="block menu-list-m" active-class="active">

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6 mx-auto">
              <path stroke-linecap="round" stroke-linejoin="round" d="m6.115 5.19.319 1.913A6 6 0 0 0 8.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 0 0 2.288-4.042 1.087 1.087 0 0 0-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 0 1-.98-.314l-.295-.295a1.125 1.125 0 0 1 0-1.591l.13-.132a1.125 1.125 0 0 1 1.3-.21l.603.302a.809.809 0 0 0 1.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 0 0 1.528-1.732l.146-.292M6.115 5.19A9 9 0 1 0 17.18 4.64M6.115 5.19A8.965 8.965 0 0 1 12 3c1.929 0 3.716.607 5.18 1.64" />
            </svg>

          </nuxt-link>

          <nuxt-link to="/destinations" class="block menu-list-m" active-class="active">

          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.3" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.3" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          </nuxt-link>



          <VDropdown>
            <button class=" flex items-center justify-end  w-full gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mx-auto text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16" />
              </svg>
            </button>

            <template #popper>
              <!--            <button v-close-popper>Close</button>-->
              <div class="flex flex-col-reverse divide-y divide-y-reverse  text-sm">
                <nuxt-link to="/why-book-with-us" class="menu-list-m  !p-4" active-class="active">Why book with us</nuxt-link>
                <nuxt-link to="/travel-with-confidence" class="menu-list-m  !p-4" active-class="active">Travel with confidence</nuxt-link>
                <nuxt-link to="/booking-terms-and-conditions" class="menu-list-m  !p-4" active-class="active">booking terms and conditions</nuxt-link>
                <nuxt-link to="/about-us" class="menu-list-m  !p-4" active-class="active">About us</nuxt-link>
                <nuxt-link to="/frequently-asked-questions" class="menu-list-m  !p-4" active-class="active">frequently Asked Questions</nuxt-link>
              </div>
            </template>
          </VDropdown>


<!--        <div class="cursor-pointer flex items-center" >-->
<!--          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mx-auto text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">-->
<!--            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16" />-->
<!--          </svg>-->
<!--        </div>-->




      </div>
    </div>

  </div>
</template>
<script setup lang="ts">
import {usePackageStore} from "~/stores/packages";
import Nav from "~/components/page/Nav.vue";
import Typing from "~/components/page/Typing.vue";
const packageStore = usePackageStore()
</script>
