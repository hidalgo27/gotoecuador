<template>
  <section class=" h-[75vh] 2xl:h-[60vh] relative">
    <nuxt-img src="/images/hotels/banner.avif" alt="" :placeholder="[50, 25, 75, 5]" class="object-cover w-screen h-full"></nuxt-img>

    <div class="absolute inset-x-0 bottom-0">
      <div class="container">
        <h1 class="text-4xl py-6 font-semibold text-gray-50">
          Our Hotels
        </h1>
      </div>
    </div>
  </section>

  <section class="container py-12 text-gray-500 text-center">
    <p>GOTOECUADOR have handpicked the best hotels in each category, taking the following factors: great location, prime facilities and excellent service. Also if you have a preferred hotel we can consider it too, our volume lets us have special deals with them, savings that we translate to our travel packages.</p>
  </section>

  <div class="container">


    <div class="grid md:grid-cols-3 gap-4 mb-4 border" v-for="(hotels, index) in listHotel" :key="index">

      <div class="md:col-span-1">
        <nuxt-img :src="hotels.imagen" alt="" class="object-cover object-center h-60 w-full"></nuxt-img>
      </div>
      <div class="md:col-span-2 p-6">
        <h3 class="font-bold text-gray-500">{{hotels.nombre}}</h3>
        <div class="flex">
          <svg v-for="i in hotels.estrellas" :key="i" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </div>
        <div class="pt-2 flex text-sm mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <p class="ml-2">{{hotels.direccion}}</p>
        </div>

        <p class="text-gray-500"><b>Services::</b></p>

        <div class="md:flex md:gap-3">

          <div class="flex items-center text-gray-500" v-for="(service, serviceIndex) in getServices(hotels.servicios)" :key="serviceIndex">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            {{service}}
          </div>

        </div>

        <div class="flex mt-6 text-sm">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          <a :href="hotels.url" class="btn btn-outline-secondary text-blue-600 ml-2" target="_blank">{{ hotels.nombre }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useHotelStore} from "~/stores/hotel";

const listHotel = ref([])
const hotelStore = useHotelStore()

const getHotels = async () => {
  const res:any = await hotelStore.getHotel()
  listHotel.value = res
}

const getServices = (servicios:any) => {
  return servicios.split(',')
}

onMounted(async () => {
  await getHotels()
})
</script>