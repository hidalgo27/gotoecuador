<template>
  <section class="bg-gray-50 hidden sm:flex">
    <div class="container">
      <div class="w-full my-3 overflow-hidden relative">
        <carousel  ref="carouselRef" :wrap-around="true" :breakpoints="breakpoints">
          <slide :key="1">
            <div class="grid items-center grid-cols-5 text-left">
              <div class="col-span-1">
                <nuxt-img src="/images/icons/shield.png" alt="" class="w-full"></nuxt-img>
              </div>
              <div class="col-span-4 p-3 text-gray-500">
                <h3 class="truncate font-bold text-sm">Book with Confidence</h3>
                <p class="text-xs">Plan your travels with peace of mind</p>

              </div>
            </div>
          </slide>
          <slide :key="2">
            <div class="grid items-center grid-cols-5 text-left">
              <div class="col-span-1">
                <nuxt-img src="/images/icons/trusted.jpg" alt="" class="w-full"></nuxt-img>
              </div>
              <div class="col-span-4 p-3 text-gray-500">
                <h3 class="truncate font-bold text-sm">Trusted local Ecuador travel experts</h3>
                <p class="text-xs">Professional service from trusted local experts</p>
              </div>
            </div>
          </slide>
          <slide :key="3">
            <div class="grid items-center grid-cols-5 text-left">
              <div class="col-span-1">
                <nuxt-img src="/images/icons/tripadvisor.png" alt="" class="w-full"></nuxt-img>
              </div>
              <div class="col-span-4 p-3 text-gray-500">
                <h3 class="truncate font-bold text-sm">Great Reviews</h3>
                <p class="text-xs">We are proud of our service quality and great reviews</p>
              </div>
            </div>
          </slide>
          <slide :key="4">
            <div class="grid items-center grid-cols-5 text-left">
              <div class="col-span-1">
                <nuxt-img src="/images/icons/good.png" alt="" class="w-full"></nuxt-img>
              </div>
              <div class="col-span-4 p-3 text-gray-500">
                <h3 class="truncate font-bold text-sm">You are in good hands</h3>
                <p class="text-xs">While on your journey help is never out of reach</p>
              </div>
            </div>
          </slide>
          <slide :key="5">
            <div class="grid items-center grid-cols-5 text-left">
              <div class="col-span-1">
                <nuxt-img src="/images/icons/hassle.png" alt="" class="w-full"></nuxt-img>
              </div>
              <div class="col-span-4 p-3 text-gray-500">
                <h3 class="truncate font-bold text-sm">Hassle-free experience</h3>
                <p class="text-xs">We plan and book your entire Ecuador trip before you arrive.</p>
              </div>
            </div>
          </slide>
          <slide :key="6">
            <div class="grid items-center grid-cols-5 text-left">
              <div class="col-span-1">
                <nuxt-img src="/images/icons/tours.png" alt="" class="w-full"></nuxt-img>
              </div>
              <div class="col-span-4 p-3 text-gray-500">
                <h3 class="truncate font-bold text-sm">Flexible tour options</h3>
                <p class="text-xs">Our vacation packages are customisable to your needs.</p>
              </div>
            </div>
          </slide>
          <slide :key="7">
            <div class="grid items-center grid-cols-5 text-left">
              <div class="col-span-1">
                <nuxt-img src="/images/icons/good.png" alt="" class="w-full"></nuxt-img>
              </div>
              <div class="col-span-4 p-3 text-gray-500">
                <h3 class="truncate font-bold text-sm">Hospitality at its finest</h3>
                <p class="text-xs">Ecuatorian hospitality is worldwide known and we are proof of that.</p>
              </div>
            </div>
          </slide>
          <slide :key="8">
            <div class="grid items-center grid-cols-5 text-left">
              <div class="col-span-1">
                <nuxt-img src="/images/icons/secure.png" alt="" class="w-full"></nuxt-img>
              </div>
              <div class="col-span-4 p-3 text-gray-500">
                <h3 class="truncate font-bold text-sm">Full Financial Protection</h3>
                <p class="text-xs">Your payments are protected with financial safety as standard.</p>
              </div>
            </div>
          </slide>
          <slide :key="9">
            <div class="grid items-center grid-cols-5 text-left">
              <div class="col-span-1">
                <nuxt-img src="/images/icons/guarantee.png" alt="" class="w-full"></nuxt-img>
              </div>
              <div class="col-span-4 p-3 text-gray-500">
                <h3 class="truncate font-bold text-sm">Value for Money</h3>
                <p class="text-xs">Exceptional quality for your Money, no intermediaries.</p>
              </div>
            </div>
          </slide>
        </carousel>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import {Carousel, Slide} from "vue3-carousel"

const breakpoints = {
  // 500px and up
  350: {
    itemsToShow: 1.2,
    snapAlign: 'start',
  },
  // 700px and up
  700: {
    itemsToShow: 2.2,
    snapAlign: 'center',
  },
  // 1024 and up
  1024: {
    itemsToShow: 4.5,
    snapAlign: 'start',
  },
}

</script>