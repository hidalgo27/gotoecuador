<template>


  <section class="h-[75vh] 2xl:h-[60vh] relative">
    <nuxt-img :src="'/images/banners/destinations/'+route.params.destino+'.webp'" alt="" :placeholder="[50, 25, 75, 5]" class="object-cover object-bottom w-full h-[75vh] 2xl:h-[60vh]"></nuxt-img>

    <div class="absolute inset-x-0 bottom-0">
      <div class="container">
        <h1 class="text-4xl py-6 font-semibold text-gray-50 capitalize">
          {{ destino }} Tours
        </h1>
      </div>
    </div>
  </section>

<!--  <div class="h-[75vh] 2xl:h-[60vh] bg-gray-500">-->
<!--    <carousel  ref="carouselRef" :wrap-around="true" :breakpoints="breakpoints">-->
<!--      <template v-for="paquete_destino in packages.paquetes_destinos">-->

<!--        <slide v-for="(destino_imagen, index) in paquete_destino.destinos.destino_imagen" :key="index">-->
<!--          <nuxt-img :src="destino_imagen.nombre" alt="" class="object-cover w-full h-[60vh] object-bottom"></nuxt-img>-->
<!--        </slide>-->

<!--      </template>-->
<!--    </carousel>-->

<!--  </div>-->

  <section class="my-12">
    <div class="container my-6">
      <div class="grid text-center text-lg">
        <p>ECUADOR packages are created by our team of travel specialists so that you can enjoy the most of your time in every destination in Ecuador.</p>
        <p>Every detail of your travel itinerary is planned and executed to perfection by our partners in each Ecuador destination. If you are looking for an activity or destination not listed in our travel packages, do not hesitate to contact us for more information.</p>
      </div>
    </div>

    <div class="container col-span-12 md:col-span-10 flex justify-center my-9 md:grid-cols-3 gap-3 overflow-x-scroll focus:touch-pan-x">

      <div class="flex" v-for="destino2 in listDestination">

        <nuxt-link :to="destino2.url" :for="destino2.id" class="w-full text-center gap-2 select-none cursor-pointer  text-gray-800 rounded-full px-4 text-sm py-2 transition-colors duration-200 ease-in-out grayscale peer-checked:grayscale-0 peer-checked:text-primary"
                   :class="[destino2.url == destino ? 'bg-[#D6DD85]' : 'bg-gray-100']"
        >

          <!--                  <img :src="destino.imagen" alt="" class=" w-8 h-8 rounded-full shadow-lg float-left">-->
          <span class="overflow-auto">{{ destino2.nombre }}</span>

        </nuxt-link>

      </div>
    </div>

    <PopularPackages :listPackages="listPackages"></PopularPackages>

    <div class="container grid md:grid-cols-3 gap-12">

      <!-- Aquí puedes poner el contenido de cada slide, por ejemplo: -->



<!--      <a :href="'/peru-travel-packages/'+packages.paquetes.url" class="p-3 bg-white w-full rounded-xl my-2 shadow-md cursor-pointer" v-for="packages in listPackages" :key="packages.paquetes.id">-->
<!--        <div class="relative">-->
<!--          <img :src="packages.paquetes.imagen" alt="" class="rounded-lg w-full">-->
<!--          <div class="bg-secondary px-2 py-1 rounded w-auto absolute bottom-0 -mb-2 m-2 text-[9px] font-semibold text-white">PAQUETE</div>-->
<!--        </div>-->
<!--        <div class="">-->
<!--          <h3 class="text-left text-lg font-semibold my-3">{{ packages.paquetes.titulo }}</h3>-->
<!--          <div class="flex flex-nowrap overflow-x-auto">-->
<!--            <div class="flex text-xs font-semibold gap-1 items-center" v-for="(destination, index) in p = packages.paquetes.paquetes_destinos" :key="destination.id">-->
<!--              <span class="truncate" :class="[destination.destinos.url == destino ? 'bg-[#D6DD85] rounded-full px-2 text-primary':'bg-gray-50 text-gray-800']">{{destination.destinos.nombre}}</span>-->
<!--              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5 text-orange-400" v-if="index < p.length - 1">-->
<!--                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />-->
<!--              </svg>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="flex gap-2 mt-3 text-sm">-->
<!--            <img src="/icons/map-location.svg" alt=""> Starting Airport <span class="text-primary font-semibold">{{ packages.paquetes.codigo_vuelo }}</span>-->
<!--          </div>-->
<!--          <div class="border my-4"></div>-->
<!--          <div class="flex justify-between text-lg font-semibold">-->
<!--            <div>{{ packages.paquetes.duracion }} days</div>-->
<!--            <div v-if="getThreeStarPrice(packages.paquetes.precio_paquetes) > 0">-->
<!--              <span class="text-xs text-gray-400">From</span> ${{ getThreeStarPrice(packages.paquetes.precio_paquetes) }}-->
<!--            </div>-->
<!--            <div v-else>-->
<!--              <sup class="italic light text-xs">Price </sup>Inquire-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </a>-->


    </div>
  </section>
</template>

<script setup lang="ts">
import {usePackageStore} from "~/stores/packages";
import PopularPackages from "~/components/packages/PopularPackages.vue";
import {Carousel, Slide} from "vue3-carousel";

const packageStore = usePackageStore()

const listPackages = ref([])

const listDestination = ref([])

const destinoImagen = ref([])

const destino = ref()

const route = useRoute()


const getPackage = async (url:any) => {
  const res:any = await packageStore.getCountryShow(url)
  // console.log(res.paquetes)
  listPackages.value = res.map(item => item.paquetes);
}

interface Item {
  id: number;
  name: string;
}

const getThreeStarPrice = (arr:any) => {
  const price = arr.find((priceInfo: { estrellas: number; }) => priceInfo.estrellas === 3);
  return price ? price.precio_d : 'No disponible';
}

const getDestinations = async () => {

  const res:any = await packageStore.getDestinations()
  destinoImagen.value = res.filter(desti => desti.url === destino.value);
  listDestination.value = res
}

onMounted(async () => {
  console.log(route.params)
  destino.value = route.params.destino
  await getDestinations()
  await getPackage(route.params.destino)

})
</script>