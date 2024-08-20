<script lang="ts" setup>
import 'vue3-carousel/dist/carousel.css'
import {Carousel, Slide} from "vue3-carousel"
import {usePackageStore} from "~/stores/packages";
import {useFormStore} from "~/stores/form";

definePageMeta({
  layout: 'custom'
})
// setPageLayout('custom')
useHead({
  script: [ { src: 'https://cdn.wetravel.com/widgets/embed_checkout.js' } ]
})


const packageStore = usePackageStore()
const formStore = useFormStore()

const listTeam = ref([])

const breakpoints = {
  // 500px and up
  350: {
    itemsToShow: 1,
    snapAlign: 'start',
  },
  // 700px and up
  700: {
    itemsToShow: 2.2,
    snapAlign: 'center',
  },
  // 1024 and up
  1024: {
    itemsToShow: 2,
    snapAlign: 'start',
  },
}


// import InquireHome from "~/components/form/InquireHome.vue";


const triggerButton = ref(null);
const targetButton = ref(null);



const route = useRoute()

const router = useRouter()

const codeWetravel = ref()
const viewButton = ref(false)


const listPackages = ref([])

const showCount = ref({})

const currentItem = ref(null); //
const viewPopover = ref()// índice del ítem actualmente abierto

const randomColorClasses = ['bg-primary', 'bg-secondary', 'bg-gray-800', 'bg-yellow-500', 'bg-indigo-500'];

const randomColorBorder = ['border-primary','border-primary', 'border-secondary', 'border-gray-800', 'border-yellow-500', 'border-indigo-500'];

const clickOtherButton = async (item:any) => {
  // @ts-ignore
  codeWetravel.value = item
  await nextTick();
  targetButton.value.click();
};

const targetAction = () => {
  console.log('Botón objetivo clickeado!');
};

const getQuote = (item) => {
  router.push("#form-dream-adventure")
  packageStore.hotelDetail = item
}

function openPopover(val){
  if (val){
    viewPopover.value = val
  }else {
    viewPopover.value = 0
  }
}
function closePopover(val){
  setTimeout(() => {
    if (mouseIsOverPopover) {
      if (val){
        viewPopover.value = 0
      }
    }
  }, 100);

}


const mouseIsOverPopover = ref(false)

const items = ref([
  { title: 'Título 1', content: 'Contenido 1' },
  { title: 'Título 2', content: 'Contenido 2' },
  { title: 'Título 3', content: 'Contenido 3' },
  { title: 'Título 4', content: 'Contenido 4' },
  { title: 'Título 5', content: 'Contenido 5' },
  { title: 'Título 6', content: 'Contenido 6' },
  { title: 'Título 7', content: 'Contenido 7' },
]);
const toggleItem = (index) => {
  if (currentItem.value === index) {
    currentItem.value = null;
  } else {
    currentItem.value = index;
  }
};

const displayedItems = ref(listPackages.value.slice(0, 2));

const loadMore = () => {
  let nextItems = items.value.slice(displayedItems.value.length, displayedItems.value.length + 2);
  // @ts-ignore
  displayedItems.value = [...displayedItems.value, ...nextItems];
};
const loadLess = () => {
  displayedItems.value = displayedItems.value.slice(0, displayedItems.value.length - 2);
};

const canLoadLess = computed(() => displayedItems.value.length > 2);

const canLoadMore = computed(() => items.value.length > displayedItems.value.length);


const getPackageItinerary = async (url:any) => {
  const res = await packageStore.getItinerary(url)
  listPackages.value = res

  formStore.titlePackages = res[0].titulo

  // if (res.token) {
  //   policyStore['tokenLogin'] = res.token
  //   loadingUser.value = false
  // }
}


const getThreeStarPrice = (arr:any) => {
  const price = arr.find((priceInfo: { estrellas: number; }) => priceInfo.estrellas === 3);
  return price ? price.precio_d : 'No disponible';
}

/*const capitalizeFirstLetter = (string) => {
  return string
      ? string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
      : '';
};*/

const getGroupedByCountry = (arr) => {
  const grouped = {};
  for (const paqueteDestino of arr) {
    const { destinos } = paqueteDestino;
    const { pais, nombre, id } = destinos;
    // @ts-ignore
    if (!grouped[pais]) {
      // @ts-ignore
      grouped[pais] = [];
    }
    // @ts-ignore
    grouped[pais].push({ nombre, id });
  }
  return grouped;
};

// const paisesUnicos = (destinos:any) => {
//   const paisesVistos = new Set();
//   return destinos.filter((destino: { destinos: { pais: any; }; }) => {
//     const pais = destino.destinos.pais;
//     if (!paisesVistos.has(pais.id)) {
//       paisesVistos.add(pais.id);
//       return true;
//     }
//     return false;
//   }).map((destino: { destinos: { pais: any; }; }) => destino.destinos.pais);
// };


// const obtenerDestinosPorPais = (paisId:number) => {
//   const destinos: any[] = [];
//   listPackages.value.forEach(paquete => {
//     paquete.paquetes_destinos.forEach((destino: { destinos: { pais: { id: number; }; }; }) => {
//       if (destino.destinos.pais.id === paisId) {
//         destinos.push(destino.destinos);
//       }
//     });
//   });
//   return destinos;
// };


const expand = (id) => {
  // @ts-ignore
  const totalLength = listPackages.value.find(p => p.id === id).paquete_itinerario.length;
  // @ts-ignore
  showCount.value[id] = Math.min(showCount.value[id] + 8, totalLength); // Aumentar de 2 en 2
};


const contract = (id) => {
  // @ts-ignore
  showCount.value[id] = Math.max(4, showCount.value[id] - 4); // Reducir de 2 en 2, mínimo 2
};


// const loadScript = () => {
//   const scriptExists = document.querySelector('script[src="https://cdn.wetravel.com/widgets/embed_checkout.js"]') !== null;
//   if (!scriptExists) {
//     const script = document.createElement('script');
//     script.src = 'https://cdn.wetravel.com/widgets/embed_checkout.js';
//     script.type = 'text/javascript';
//     script.async = true;
//     document.head.appendChild(script);
//   }
// }

const getTeam = async () => {
  const res:any = await packageStore.getTeam()


  listTeam.value = res
  // if (res.token) {
  //   policyStore['tokenLogin'] = res.token
  //   loadingUser.value = false
  // }
}
const limitedTeam = computed(() => listTeam.value.slice(0, 7));
onMounted(async () => {
  await getTeam()
  // loadScript()
  // console.log(route)
  await getPackageItinerary(route.params.itinerary)
  listPackages.value.forEach(p => {
    // @ts-ignore
    showCount.value[p.id] = 15;
  });

  // await nextTick();
  codeWetravel.value = packageStore.code_w
  viewButton.value = true

})


// onUnmounted(() => {
//   const script = document.querySelector('script[src="https://cdn.wetravel.com/widgets/embed_checkout.js"]');
//   if (script) {
//     script.remove();
//   }
// });


</script>
<template>
  <div>

    <button
        class="btn-primary wtrvl-checkout_button hidden z-10 "
        id="wetravel_button_widget"
        data-env="https://www.wetravel.com"
        data-version="v0.3"
        data-uid="239346"
        :data-uuid="''+packageStore.code_w"
        :href="'https://www.wetravel.com/checkout_embed?uuid='+codeWetravel"
        ref="targetButton" @click="targetAction">
      Book Now
    </button>
    <div v-for="packages in listPackages">


      <!--  <header class="h-[75vh] relative">-->
      <!--    <img src="/images/banners/banner-lg.png" alt="" class="object-cover w-screen h-full">-->
      <!--    <div class="absolute inset-x-0 bottom-0 text-center hidden md:block">-->
      <!--      <h1 class="mb-24 font-bold text-6xl text-white">-->
      <!--        {{packages.titulo}}-->
      <!--      </h1>-->
      <!--    </div>-->
      <!--  </header>-->

<!--      <div class="relative">-->
<!--        <div class="h-[75vh] relative overflow-hidden vimeo-wrapper">-->
<!--          <iframe src="https://player.vimeo.com/video/772468390?background=1&autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=1" frameborder="0" allow="autoplay; fullscreen" class=""></iframe>-->
<!--        </div>-->
<!--        <div class="absolute inset-x-0 bottom-0 text-center">-->
<!--          <h1 class="text-white text-xl md:text-4xl drop-shadow-[0_3px_6px_rgba(0,0,0,0.7)] mb-24">{{packages.titulo}}</h1>-->
<!--        </div>-->
<!--      </div>-->

      <div class="h-[75vh] 2xl:h-[60vh] bg-gray-500">
        <carousel  ref="carouselRef" :wrap-around="true" :breakpoints="breakpoints">
          <template v-for="paquete_destino in packages.paquetes_destinos">

              <slide v-for="(destino_imagen, index) in paquete_destino.destinos.destino_imagen" :key="index">
                <nuxt-img :src="destino_imagen.nombre" alt="" :placeholder="[50, 25, 75, 5]" class="object-cover w-full h-[75vh] 2xl:h-[60vh] object-bottom"></nuxt-img>
              </slide>

          </template>
        </carousel>

      </div>



      <section class="">
        <div class="container grid md:grid-cols-12 gap-12">
          <div class="md:col-span-9">

              <div class="flex gap-6 my-5 overflow-x-scroll focus:touch-pan-x">
                <a href="#overview"  class="text-sm py-2 bg-slate-100 text-gray-800 font-medium rounded-full focus:bg-[#D6DD85] focus:text-primary">Overview</a>
                <a href="#itinerary" class="text-sm py-2 bg-slate-100 text-gray-800 font-medium rounded-full focus:bg-[#D6DD85] focus:text-primary" >Itinerary</a>
                <a href="#included" class="text-sm py-2 bg-slate-100 text-gray-800 font-medium rounded-full focus:bg-[#D6DD85] focus:text-primary">Included</a>
                <!--      <a href="#hotels" class="text-sm py-2 bg-slate-100 text-gray-800 font-medium rounded-full focus:bg-[#D6DD85] focus:text-primary">Hotels</a>-->
                <!--      <a href="included" class="text-sm py-2 bg-slate-100 text-gray-800 font-medium rounded-full focus:bg-[#D6DD85] focus:text-primary">Hotels</a>-->
<!--                <a href="#prices" class="text-sm py-2 bg-slate-100 text-gray-800 font-medium rounded-full focus:bg-[#D6DD85] focus:text-primary">Prices</a>-->
              </div>


            <div class="grid grid-cols-3 text-xs md:grid-cols-5  gap-6">
              <div v-for="(destination, index) in p = packages.paquetes_destinos" :key="destination.id">

                <div class="relative">
                  <img :src="destination.destinos.imagen" alt="" class=" w-full object-cover rounded-xl shadow-xl">
                  <div class="absolute inset-x-0 bottom-0 p-3 text-white bg-gradient-to-t from-gray-800 rounded-b-xl">
                    {{destination.destinos.nombre}}
                  </div>
                </div>

              </div>
            </div>



<!--            <div class="grid my-8 space-y-2">-->
<!--              <div class="flex gap-2">-->
<!--                <img src="/icons/location.svg" alt=""> <span class="font-bold">Start</span> Lima, Peru-->
<!--              </div>-->
<!--              &lt;!&ndash;          <div class="flex gap-2">&ndash;&gt;-->
<!--              &lt;!&ndash;            <img src="/icons/location.svg" alt=""> <span class="font-bold">Finish</span> La Paz, Bolivia&ndash;&gt;-->
<!--              &lt;!&ndash;          </div>&ndash;&gt;-->
<!--              <div class="flex gap-2">-->
<!--                <img src="/icons/location.svg" alt="">-->
<!--                <span class="font-bold">Destinations</span>-->


<!--                <span class="badged-sm" :class="randomColorClasses[index % randomColorClasses.length]" v-for="(destination, index) in p = packages.paquetes_destinos" :key="destination.id">-->
<!--                  {{destination.destinos.nombre}}-->
<!--                </span>-->
<!--              </div>-->

<!--              <div class="flex gap-2">-->
<!--                <img src="/icons/search.svg" alt=""> <span class="font-bold">Code</span> {{ packages.codigo }}-->
<!--              </div>-->
<!--            </div>-->

            <article class="mt-6" id="overview">
              <h2 class="text-2xl font-bold mb-8">Overview</h2>
              <div v-html="packages.descripcion">
              </div>
              <img :src="packages.mapa" alt="" class="rounded-2xl mt-12 w-full">
            </article>

            <article class="my-12" id="itinerary">
              <h2 class="text-2xl font-bold mb-8">Itinerary</h2>
              <div class="">

                <div class="w-full mx-auto relative">

                  <div v-for="(itinerary, index) in iti =  packages.paquete_itinerario.slice(0, showCount[packages.id])" :key="itinerary.id" class="flex item">

                    <div class="relative w-20 text-center gap-12">
                      <div class="absolute -z-10 left-1/2 top-0 bottom-0 border-l-2 border-dashed border-slate-300"></div>
                      <div class="bg-white py-2  font-bold text-xs" :class="[currentItem == index ? 'text-secondary' : 'text-slate-500']">DAY <span class="rounded-full px-2 py-1  text-white" :class="{'bg-red-700': packages.duracion == index + 1, 'bg-primary': index + 1 ==  1, 'bg-gray-500': index + 1 > 1}">{{index + 1}}</span></div>
                    </div>
                    <div class="space-y-2 w-full " :class="[index + 1 == items.length ? 'border-y' : 'border-t']">
                      <div>
                        <button @click="toggleItem(index)" class="w-full text-left p-4 flex justify-between items-center hover:bg-gray-200">
                          {{ itinerary.itinerarios.titulo }}
                          <span>
                        {{ currentItem == index ? '-' : '+' }}
                      </span>
                        </button>
                        <transition name="bottom">
                          <div v-if="currentItem === index" class="p-4" v-html="itinerary.itinerarios.resumen">

                          </div>
                        </transition>
                      </div>
                    </div>
                  </div>

                  <button @click="expand(packages.id)" v-if="showCount[packages.id] < packages.paquete_itinerario.length" class="mt-4 p-4 bg-[#ffeece] mt-2 font-bold text-secondary rounded w-full hover:bg-secondary hover:text-white">
                    View More
                  </button>

                  <button @click="contract(packages.id)" v-if="showCount[packages.id] > 4" class="px-4 py-2 w-full mt-2 rounded text-gray-400 hover:text-primary">
                    View Less
                  </button>

                </div>
              </div>

            </article>


          </div>
          <div class="md:col-span-3 -mt-32 z-10">


            <div class="flex gap-3 ">

              <div class="flex-1 border bg-white p-3 flex items-center" v-if="packages.is_p_t == 1">

                <div class="text-4xl font-semibold text-gray-600">
                  <span class="text-base block">{{ packages.duracion }} days</span>
                  <h2 class="text-2xl mb-3 font-bold text-gray-600"> {{ packages.titulo }}</h2>
                  <div class="flex -space-x-1 overflow-hidden">
                    <img class="inline-block h-8 w-8 rounded-full ring-2 ring-white" :src="team.imagen_perfil" :alt="team.nombre" v-for="(team, index) in limitedTeam" :key="index">
                  </div>
                  <p class="text-sm font-normal mt-2">Get a travel expert to plan your dream vacation</p>

                  <div v-if="getThreeStarPrice(packages.precio_paquetes) > 0">
                    <p class="text-xs font-light mt-2">Price p.p. from</p>
                    <span>${{ getThreeStarPrice(packages.precio_paquetes) }}</span>
                    <span class="text-sm"> usd</span>
                  </div>

                  <span class="text-red-500 text-sm font-bold" v-else>Price: Inquire Now</span>

                  <span class="block text-red-500 mt-3 text-xs font-normal">See book With Confidence terms</span>
                </div>
              </div>

              <div class="flex-1 border bg-white p-3 flex items-center" v-else>

                <div class="text-4xl font-semibold text-gray-600" v-if="packages.precio_tours > 0">
                  <span class="text-base block">{{ packages.duracion }} days</span>
                  <p class="text-xs font-light mt-3">Price p.p. from</p>
                  <span>${{ packages.precio_tours }}</span>
                  <span class="text-sm"> usd</span>
                  <span class="block text-red-500 mt-3 text-xs font-normal">See book With Confidence terms</span>
                </div>

                <span class="text-red-500 font-bold" v-else>Inquire</span>


              </div>

            </div>

            <div class="mt-6">
              <button v-if="packages.codigo_f" class="wtrvl-checkout_button btn-primary block w-full mb-2" id="wetravel_button_widget" data-env="https://www.wetravel.com" data-version="v0.2" data-uid="239346" :data-uuid="packages.codigo_f" :href="'https://www.wetravel.com/checkout_embed?uuid='+packages.codigo_f" >Book Now</button>
              <a href="#form-dream-adventure" class="btn-secondary mt-3  font-bold block text-center w-full">Get a Quote</a>
            </div>



            <div class="border my-3 bg-gray-600 text-white p-3 text-xs">
              <p class="text-white">Contact our travel advisor to use this itinerary (or others) as a base to design together your perfect Ecuatorian adventure!</p>
              <p class="mt-2"><span class="text-secondary font-bold">For Example:</span> add one day / reduce the program lenght / upgrades hotels / add all meals / upgrade to private tours</p>
            </div>

            <div class="border">
              <div class="bg-blue-100 font-medium p-3">
                Availability
              </div>
              <div class="px-3 text-xs divide-y grid grid-cols-1 divide-slate-200">
                <div class="grid grid-cols-2 py-2 items-center">
                  <div class="">
                    Departures Available
                  </div>
                  <div class="text-right font-medium">
                    Until December 2024
                  </div>
                </div>

                <div class="grid grid-cols-2 py-2 items-center">

                  <div class="border p-1 text-center">
                    Group Tours
                  </div>

                  <div class="text-right font-medium">
                    Available
                  </div>

                </div>


                <div class="grid grid-cols-2 py-2 items-center">

                  <div class="border border-fuchsia-500 text-fuchsia-500 p-1 text-center flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                    Private Tours
                  </div>

                  <div class="text-right font-medium">
                    Available
                  </div>
                </div>

                <div class="grid grid-cols-2 py-2 items-center">

                  <div class="border border-cyan-500 text-cyan-500 p-1 text-center flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg> Solo Travelers
                  </div>

<!--                  <div class="text-right font-medium">-->
<!--                    @foreach($paquete['precio_paquetes'] as $precio)-->
<!--                    @if($precio['estrellas'] == 2)-->
<!--                    @if($precio['precio_s'] > 0)-->
<!--                    <div class="text-4xl font-semibold text-gray-600">-->
<!--                      {{&#45;&#45;                                                                            <span> {{__('message.pack_par5')}} </span>&#45;&#45;}}-->
<!--                      From${{$precio['precio_d']}}usd-->
<!--                    </div>-->
<!--                    @else-->
<!--                    <span class="text-red-500 font-bold">{{__('message.button_inquire')}}</span>-->
<!--                    @endif-->
<!--                    @endif-->
<!--                    @endforeach-->
<!--                  </div>-->

                </div>
              </div>
            </div>

            <div class="grid grid-cols-2 my-3 gap-4">
              <div class="flex items-center gap-3">
                <div class="rounded-full bg-secondary p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 stroke-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div class="leading-none">
                  <span class="text-xs block">Travel Style</span>
                  <span class="text-sm font-medium">ESCORTED TOURS</span>
                </div>
              </div>
              <div class="flex items-center gap-3">
                <div class="rounded-full bg-gray-400 p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 stroke-white" fill="none" viewBox="0 0 24 24" stroke="stroke-amber-400" stroke-width="1">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div class="leading-none">
                  <span class="text-xs block">Season</span>
                  <span class="text-sm font-medium">JAN - DEC</span>
                </div>
              </div>
              <div class="flex items-center gap-3">
                <div class="rounded-full bg-gray-900 p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 stroke-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <div class="leading-none">
                  <span class="text-xs block">Interest</span>
                  <span class="text-sm font-medium">Culture, history, Adventure</span>
                </div>
              </div><div class="flex items-center gap-3">
              <div class="rounded-full bg-primary p-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 stroke-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                </svg>
              </div>
              <div class="leading-none">
                <span class="text-xs block">Departure</span>
                <span class="text-sm font-medium">Daily</span>
              </div>
            </div>






            </div>

<!--            <div class="block">-->
<!--              <div id="TA_cdsratingsonlynarrow522" class="TA_cdsratingsonlynarrow w-full"><ul id="8CdJuXhFL" class="TA_links ZrzN0Ffd"><li id="7JQHh6DaTf" class="SOH6nHQUMt"><a target="_blank" href="https://www.tripadvisor.com.pe/Attraction_Review-g294314-d15202262-Reviews-Gotoperu-Cusco_Cusco_Region.html"><img src="https://www.tripadvisor.com.pe/img/cdsi/img2/branding/v2/Tripadvisor_lockup_horizontal_secondary_registered-18034-2.svg" class="mx-auto" alt="TripAdvisor"/></a></li></ul></div>-->
<!--              <script async src="https://www.jscache.com/wejs?wtype=cdsratingsonlynarrow&amp;uniq=522&amp;locationId=15202262&amp;lang=es_PE&amp;border=true&amp;display_version=2" data-loadtrk onload="this.loadtrk=true"></script>-->
<!--            </div>-->
          </div>
        </div>
      </section>

      <section class="container ">
        <div class="flex mb-3 items-center text-2xl text-gray-700 font-bold gap-2 dark:text-gray-400">
          <div class="">
            <span class="inline-block w-5 h-2.5 bg-secondary"></span>
          </div> Included
        </div>
        <div class="grid grid-cols-6 gap-4">
          <div class="col-start-2 col-span-4">
            <div class="grid grid-cols-3 md:grid-cols-7 content-center text-center">
              <div class="">
                <img src="/images/include/assistances.png" alt="" class="object-contain px-4 text-center">
                <p class="text-xs">Assistances</p>
              </div>
              <div class="">
                <img src="/images/include/breakfast.png" alt="" class="object-contain px-4 text-center">
                <p class="text-xs">Breakfast</p>
              </div>
              <div class="">
                <img src="/images/include/entrances.png" alt="" class="object-contain px-4 text-center">
                <p class="text-xs">Entrances</p>
              </div>

              <div class="">
                <img src="/images/include/hotels.png" alt="" class="object-contain px-4 text-center">
                <p class="text-xs">Hotels</p>
              </div>
              <div class="">
                <img src="/images/include/tours.png" alt="" class="object-contain px-4 text-center">
                <p class="text-xs">Tours</p>
              </div>
<!--              <div class="">-->
<!--                <img src="/images/include/trains.png" alt="" class="object-contain px-4 text-center">-->
<!--                <p class="text-xs">Trains</p>-->
<!--              </div>-->
              <div class="">
                <img src="/images/include/transfers.png" alt="" class="object-contain px-4 text-center">
                <p class="text-xs">Transfers</p>
              </div>

              <div class="">
                <img src="/images/include/flight.png" alt="" class="object-contain px-4 grayscale text-center">
                <p class="text-xs">Flight</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!--    <ModalItinerary></ModalItinerary>-->

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
          <a :href="'https://wa.me/12024911478?text=I%20would%20like%20a%20quote%20for%20the%20package: '+packages.titulo" target="_blank" rel="noopener noreferrer">
            <span class="flex relative h-10 w-10">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-400 opacity-75"></span>
            </span>
          </a>
          <!--        <a href="https://wa.me/12024911478?text=Deseo%20una%20cotización%20del%20paquete:" target="_blank" rel="noopener noreferrer">Enviar mensaje</a>-->
        </div>
        <div class="fixed bottom-0 mb-20 right-0 z-40 py-5 px-6 sm:inline-flex md:mb-0">
          <a :href="'https://wa.me/12024911478?text=I%20would%20like%20a%20quote%20for%20the%20package: '+packages.titulo" target="_blank" rel="noopener noreferrer" class="bg-white rounded-full">
            <nuxt-img src="/icons/whatsapp.svg" alt="" class="w-12"></nuxt-img>
          </a>
        </div>
      </div>

    </div>



  </div>
</template>

