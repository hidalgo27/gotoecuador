<template>
  <div class="container">
    <div class="grid grid-cols-7">
      <div class="col-span-7 md:col-span-7">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">

<!--          <div class="bg-white md:col-span-2 w-full rounded-xl my-2 block shadow-md relative overflow-hidden">-->

<!--            <a href="/peru-travel-packages/Amazing-Peru-9-days"><img src="/images/banners/banner-navidad.jpg" alt="" class="object-cover  h-full">-->

<!--              <div class="absolute inset-0 bg-gradient-to-b to-70% from-gray-900 from-0% opacity-50"></div></a>-->
<!--          </div>-->

          <a :href="'/peru-travel-packages/'+packages.url" class="p-3 bg-white col-span-1 w-full rounded-xl my-2 block shadow-md cursor-pointer" v-for="packages in listPackages" :key="packages.id">
            <div class="relative">
              <img :src="packages.imagen" alt="" class="w-full rounded-lg">
<!--              <div class="bg-gray-500 px-2 py-1 z-10 rounded w-auto absolute flex items-center bottom-0 -mb-2 m-2 text-[9px] font-semibold text-white">-->
<!--                -->
<!--&lt;!&ndash;                <template v-for="(des, index) in packages.paquetes_destinos">&ndash;&gt;-->
<!--&lt;!&ndash;                  {{des.destinos.nombre}}&ndash;&gt;-->
<!--&lt;!&ndash;                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5 text-orange-400" v-if="index < packages.paquetes_destinos.length - 1">&ndash;&gt;-->
<!--&lt;!&ndash;                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />&ndash;&gt;-->
<!--&lt;!&ndash;                  </svg>&ndash;&gt;-->

<!--&lt;!&ndash;                </template>&ndash;&gt;-->
<!--              </div>-->
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

          <!--          </div>-->
        </div>
        <!--        </Carousel>-->
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