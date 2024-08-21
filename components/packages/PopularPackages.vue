<template>
  <div>

  <div class="container">
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
      <div class="group border  block hover:shadow  overflow-hidden text-center transition duration-500" v-for="(packages, index) in listPackages" :key="index">
        <div class="overflow-hidden relative">
          <div class="relative">
            <img :src="packages.imagen" :alt="packages.titulo" class="object-cover h-96 w-full transition duration-500 ease-in-out transform group-hover:-translate-x-0 group-hover:scale-105"/>
            <div class="absolute inset-0 gradient-cicle-gray"></div>
          </div>
          <div class="absolute inset-x-0 bottom-0 w-full p-2">
            <div class="bg-primary bg-opacity-70 text-left p-3 text-gray-50 group-hover:bg-opacity-100 transition duration-500 ">
              <h2 class="font-semibold">{{ packages.titulo }}</h2>
              <div class="flex text-xs italic gap-1 items-center overflow-x-scroll no-scrollbar  focus:touch-pan-x">
                <template v-for="(des, index) in packages.paquetes_destinos">
                  {{des.destinos.nombre}}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-3 h-3 text-orange-400" v-if="index < packages.paquetes_destinos.length - 1">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                  </svg>

                </template>
              </div>

            </div>
          </div>
        </div>

        <div class="p-6">
          <div class="flex -space-x-1 justify-center mb-2">
            <div class="inline-block rounded-full ring-1 m-1 ring-white relative">
              <VTooltip>
                <img src="/images/include/assistances.png" alt=""  class="h-6 w-6">
                <template #popper>
                  Assistances
                </template>
              </VTooltip>
            </div>
            <div class="inline-block rounded-full ring-1 m-1 ring-white relative">
              <VTooltip>
                <img src="/images/include/breakfast.png" alt=""  class="h-6 w-6">
                <template #popper>
                  Breakfast
                </template>
              </VTooltip>
            </div>
            <div class="inline-block rounded-full ring-1 m-1 ring-white relative">
              <VTooltip>
                <img src="/images/include/entrances.png" alt=""  class="h-6 w-6">
                <template #popper>
                  Entrances
                </template>
              </VTooltip>
            </div>

            <div class="inline-block rounded-full ring-1 m-1 ring-white relative">
              <VTooltip>
                <img src="/images/include/hotels.png" alt=""  class="h-6 w-6">
                <template #popper>
                  Hotels
                </template>
              </VTooltip>
            </div>

            <div class="inline-block rounded-full ring-1 m-1 ring-white relative">
              <VTooltip>
                <img src="/images/include/tours.png" alt=""  class="h-6 w-6">
                <template #popper>
                  Tours
                </template>
              </VTooltip>
            </div>

            <div class="inline-block rounded-full ring-1 m-1 ring-white relative">
              <VTooltip>
                <img src="/images/include/trains.png" alt=""  class="h-6 w-6">
                <template #popper>
                  Trains
                </template>
              </VTooltip>
            </div>

            <div class="inline-block rounded-full ring-1 m-1 ring-white relative">
              <VTooltip>
                <img src="/images/include/transfers.png" alt=""  class="h-6 w-6">
                <template #popper>
                  Transfers
                </template>
              </VTooltip>
            </div>

          </div>

          <div class="font-bold text-gray-500 text-lg mb-4 flex justify-center gap-1">
            {{packages.duracion}} days /

            <div v-if="packages.is_p_t == 0">
              <div v-if="packages.precio_tours > 0">
                ${{ packages.precio_tours }}<span class="text-sm text-secondary">usd</span>
              </div>
              <div v-else>
                <span class="text-red-500">Inquire</span>
              </div>
            </div>
            <div v-else>
              <div class="flex items-center" v-if="getThreeStarPrice(packages.precio_paquetes) > 0">
                <span class="text-xs text-gray-400">From</span> ${{ getThreeStarPrice(packages.precio_paquetes) }} usd
              </div>
              <div v-else>
                <span class="text-red-500">Inquire</span>
              </div>
            </div>

          </div>

<!--          <button  class="wtrvl-checkout_button btn-primary block w-full mb-2" id="wetravel_button_widget" data-env="https://www.wetravel.com" data-version="v0.2" data-uid="239346" :data-uuid="packages.codigo_f" :href="'https://www.wetravel.com/checkout_embed?uuid='+packages.codigo_f" >Book Now</button>-->
<!--          <button v-show="packages.codigo_f" @click="pack(packages.codigo_f)" class="wtrvl-checkout_button btn-ternary mb-2 block w-full" id="wetravel_button_widget">Book Now</button>-->
          <nuxt-link  :to="'/ecuador-travel-packages/'+packages.url" @click="viewGTM(packages.titulo, packages.duracion)" class="btn-secondary block">View details</nuxt-link>



        </div>

      </div>
    </div>

  </div>
  </div>

</template>

<script setup lang="ts">

import {usePackageStore} from "~/stores/packages";

const packageStore = usePackageStore()


const pack = (packages:string) => {
  console.log(packages)
  packageStore.code_w = packages
};

// const listPackages = ref([])

// const getPackage = async () => {
//   const res:any = await packageStore.getPackageTop()
//
//   console.log(res)
//   listPackages.value = res
//
// }

// interface listPackages{
//   duracion:any, imagen:any, paquetes_destinos:any, precio_paquetes:any, titulo:any, url:any, is_p_t:any, precio_tours:any, codigo_f:any
// }

const getThreeStarPrice = (arr:any) => {
  const price = arr.find((priceInfo: { estrellas: number; }) => priceInfo.estrellas === 3);
  return price ? price.precio_d : 'No disponible';
}

// const props = defineProps({
//   listPackages: {
//     type: Array,
//   }
// });
// defineProps({
//   listPackages: listPackages[]
// })

// defineProps<{
//   listPackages: listPackages[]
// }>();

const props = defineProps<{
  listPackages: Array<{ url: string, [key: string]: any }>
}>();

const viewGTM = (listPackages: Array<{ url: string, [key: string]: any }>, duration: number) => {
  console.log(listPackages, duration)
  dataLayer.push({
    'event': 'view_item',
    'TravelPackage':  listPackages,
    // 'Destinations': ['Quito', 'Galapagos', 'Cuicocha Lake'],
    'TripLength': duration,
  });

}



</script>