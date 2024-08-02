<template>
  <div>
  <div class="container hidden">
    <div class="grid grid-cols-7">
      <div class="col-span-7 md:col-span-7">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a :href="'/peru-travel-packages/'+packages.url" class="p-3 bg-white col-span-1 w-full rounded-xl my-2 block shadow-md cursor-pointer" v-for="packages in listPackages" :key="packages.id">
            <div class="relative">
              <img :src="packages.imagen" alt="" class="w-full rounded-lg">
              <div class="absolute inset-0 bg-gradient-to-t to-70% from-gray-900 from-0% opacity-40"></div>
            </div>
            <div class="">
              <h3 class="text-left text-lg font-semibold my-3">{{ packages.titulo }}</h3>
              <div class="flex text-xs font-semibold gap-1 items-center">
                <template v-for="(des, index) in packages.paquetes_destinos">
                  {{des.destinos.nombre}}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5 text-orange-400" v-if="index < packages.paquetes_destinos.length - 1">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                  </svg>

                </template>
              </div>
              <div class="flex gap-2 mt-3 text-sm">
<!--                <img src="/icons/map-location.svg" alt=""> Starting Airport <span class="text-primary font-semibold">{{ packages.codigo_vuelo }}</span>-->
              </div>
              <div class="border my-4"></div>
              <div class="flex justify-between text-lg font-semibold">
                <div>{{ packages.duracion }} days</div>
                <div v-if="getThreeStarPrice(packages.precio_paquetes) > 0">
                  <span class="text-xs text-gray-400">From</span> ${{ getThreeStarPrice(packages.precio_paquetes) }}
                </div>
                <div v-else>
                  <sup class="italic light text-xs">Price </sup>Inquire
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="grid grid-cols-3 gap-6">
      <div class="group" v-for="packages in listPackages" :key="packages.id">
        <div class="overflow-hidden relative">
          <div class="relative">
            <img :src="packages.imagen" :alt="packages.titulo" class="object-cover h-96 w-full transition duration-500 ease-in-out transform group-hover:-translate-x-0 group-hover:scale-105"/>
            <div class="absolute inset-0 gradient-cicle-gray"></div>
          </div>
          <div class="absolute inset-x-0 bottom-0 w-full p-6">
            <div class="bg-primary bg-opacity-95 p-4 text-gray-50 group-hover:bg-opacity-100 transition duration-500 rounded-lg shadow-xl">
              <h2 class="text-xl font-bold">{{ packages.titulo }}</h2>
              <div class="flex text-xs font-semibold gap-1 items-center">
                <template v-for="(des, index) in packages.paquetes_destinos">
                  {{des.destinos.nombre}}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5 text-orange-400" v-if="index < packages.paquetes_destinos.length - 1">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                  </svg>

                </template>
              </div>

            </div>
          </div>
        </div>

        <div class="border p-6 block group-hover:border-primary text-center transition duration-500">
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

          <div class="font-bold text-gray-500 dark:text-gray-300 text-lg mb-4 flex justify-center gap-1">
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

          <button v-if="packages.codigo_f" class="wtrvl-checkout_button btn-primary block w-full mb-2" id="wetravel_button_widget" data-env="https://www.wetravel.com" data-version="v0.2" data-uid="239346" :data-uuid="packages.codigo_f" :href="'https://www.wetravel.com/checkout_embed?uuid='+packages.codigo_f" >Book Now</button>
          <a :href="'peru-travel-packages/'+packages.url" class="btn-secondary block" v-else>View details</a>

        </div>

      </div>
    </div>

  </div>
  </div>

</template>

<script setup lang="ts">

import {usePackageStore} from "~/stores/packages";

const packageStore = usePackageStore()

const listPackages = ref([])

const getPackage = async () => {
  const res:any = await packageStore.getPackageTop()

  console.log(res)
  listPackages.value = res

}

const getThreeStarPrice = (arr:any) => {
  const price = arr.find((priceInfo: { estrellas: number; }) => priceInfo.estrellas === 3);
  return price ? price.precio_d : 'No disponible';
}

onMounted(async () => {
  await getPackage()
})
</script>