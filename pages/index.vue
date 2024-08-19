<template>
  <section>
    <div class="relative">
      <div class="h-[75vh] relative overflow-hidden vimeo-wrapper ">
        <div class="absolute bg-gradient-to-t from-gray-800 h-[75vh] opacity-20 z-10 inset-0"></div>
        <nuxt-img src="/images/logos/logo-gotoecuador3.svg" class="w-[350px] z-10 relative mx-auto sm:hidden p-6"></nuxt-img>
        <iframe src="https://player.vimeo.com/video/996360304?background=1&autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=1" frameborder="0" allow="autoplay; fullscreen" class=""></iframe>
      </div>
      <div class="absolute inset-x-0 mb-52 bottom-0 z-10 text-center">
        <h2 class="text-white text-xl md:text-3xl container font-medium drop-shadow-[0_3px_6px_rgba(0,0,0,0.7)]">THE BEST VACATION IN <span class="text-primary">ECUADOR</span> <span class="text-secondary">WITH THE BEST</span> ECUATORIAN OPERATOR</h2>

        <!--        <InquireHome></InquireHome>-->

      </div>
<!--      <div class="absolute inset-0 bg-gradient-to-t to-70% from-gray-900 from-0% opacity-50"></div>-->
    </div>
  </section>

<!--  <div class="relative w-full h-[75vh] overflow-hidden">-->
<!--    <video autoplay muted loop class="absolute inset-0 w-full h-full object-cover">-->
<!--      <source src="/videos/banner.mov" type="video/mp4" />-->
<!--      Tu navegador no soporta el video en HTML5.-->
<!--    </video>-->
<!--    <div class="relative z-10 flex items-center justify-center w-full h-full text-center bg-black bg-opacity-50">-->
<!--      <h2 class="text-white text-xl md:text-3xl container font-medium ">THE BEST VACATION IN <span class="text-primary">PERU</span> <span class="text-secondary">WITH THE BEST</span> PERUVIAN OPERATOR</h2>-->
<!--    </div>-->
<!--  </div>-->

  <IconSlider></IconSlider>

  <section class="container grid grid-cols-1 md:grid-cols-4 my-12">
    <div class="text-center w-full col-span-4 items-center text-4xl text-secondary font-semibold gap-2">
      Ecuador Travel Packages
      <div class="border-4 h-1 w-12 border-primary mx-auto mt-3"></div>

    </div>
    <div class="col-span-4 text-center text-gray-800  mt-4 ">
      <p class="flex items-center gap-1 justify-center">Plan your trip to Ecuador with a free video call from an expert! <nuxt-link to="#"><nuxt-img src="/icons/meet.svg" class="h-8 w-8"></nuxt-img></nuxt-link></p>
      <p class="flex items-center gap-1 justify-center">Or talk to an expert right now to start making plans for your fully customized trip <nuxt-link to="https://api.whatsapp.com/send?phone=12024911478" target="_blank"><nuxt-img src="/icons/whatsapp.svg" class="h-6 w-6"></nuxt-img></nuxt-link></p>
    </div>
  </section>

  <section class="bg-gray-700">
    <div class="container  grid grid-cols-1 md:grid-cols-6 items-end">
      <div class="md:col-span-4 relative bg-gray-700">
        <div class="inset-0 flex items-center text-white w-full">
          <div class="w-full grid grid-cols-1 md:grid-cols-6 items-end">
            <div class="py-12 col-span-3 hidden sm:block">
              <h3 class="font-semibold block text-xl">Your Ecuatorian Travel Operator</h3>
              <p class="block font-light text-sm leading-6 my-6">
                We are a travel company that focuses on creating customized itineraries. We have a local team of guides, drivers, travel representatives plus partnerships with the best hotels in Ecuador and yachts operating in the Galapagos Islands. This will undoubtedly ensure that your trip is an amazing one. Our website offers many trip models ranging from 5 to 14 or more days. However, if you have specific preferences for alternative destinations or itineraries, we are able to customize them to meet your expectations.We can combine all the available alternatives in Ecuador to create a unique itinerary tailored to your preferences. Feel free to request a quote according to your requirements.
              </p>

              <div class="block my-6">
                <a href="#" class="btn-secondary">View Tours</a>
              </div>
            </div>
            <div class="col-span-3 pt-4 sm:pt-12">
              <nuxt-img src="/images/team/renzo.webp" class="w-[200px] sm:w-[280px] mx-auto" alt=""></nuxt-img>
            </div>
          </div>
        </div>
      </div>
      <div class="md:col-span-2 bg-gray-800 p-9 font-light shadow-lg text-white flex items-center">
        <div class="">
          <h3 class="font-semibold block text-xl">WHY BOOK WITH US</h3>
          <p class="flex my-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            Our specialized knowledge enables travelers to immerse themselves in Ecuadorian traditions, lifestyle, and culture in a distinctive manner.</p>
          <p class="flex my-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            24/7 Support</p>
          <p class="flex my-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            Whether you’ve just booked or are already enjoying your trip, we are here for you.
          </p>
<!--          <p class="flex my-4">-->
<!--            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">-->
<!--              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />-->
<!--            </svg>-->
<!--            Dedicated to providing personalized, quality service</p>-->
          <div class="block mt-6">
            <nuxt-link to="/why-book-with-us" class="btn-primary">View More</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="container my-12">
    <div class="text-center w-full mb-6 text-2xl text-gray-700 font-bold gap-2">
      Most Popular Travel Packages
      <div class="border-4 h-1 w-12 border-primary mx-auto mt-3"></div>
    </div>
    <div class="grid grid-cols-10 sm:grid-cols-6">
      <div class="col-start-2 col-span-8 sm:col-start-2 sm:col-span-4">
        <div class="grid grid-cols-4 md:grid-cols-7 text-center gap-2">
          <div>
            <nuxt-img src="/images/include/assistances.png" alt="" class="px-4"></nuxt-img>
            <p class="text-xs">Assistances</p>
          </div>
          <div>
            <nuxt-img src="/images/include/breakfast.png" alt="" class="px-4"></nuxt-img>
            <p class="text-xs">Breakfast</p>
          </div>
          <div>
            <nuxt-img src="/images/include/entrances.png" alt="" class="px-4"></nuxt-img>
            <p class="text-xs">Entrances</p>
          </div>
          <div>
            <nuxt-img src="/images/include/flight.png" alt="" class="px-4"></nuxt-img>
            <p class="text-xs">Flight</p>
          </div>
          <div>
            <nuxt-img src="/images/include/hotels.png" alt="" class="px-4"></nuxt-img>
            <p class="text-xs">Hotels</p>
          </div>
          <div>
            <nuxt-img src="/images/include/tours.png" alt="" class="px-4"></nuxt-img>
            <p class="text-xs">Tours</p>
          </div>
<!--          <div>-->
<!--            <nuxt-img src="/images/include/trains.png" alt="" class="px-4"></nuxt-img>-->
<!--            <p class="text-xs">Trains</p>-->
<!--          </div>-->
          <div>
            <nuxt-img src="/images/include/transfers.png" alt="" class="px-4"></nuxt-img>
            <p class="text-xs">Transfers</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <PopularPackages :listPackages="listPackages"></PopularPackages>

  <section class="container mt-12">
    <div class="flex mb-3 sm:mt-0 items-center text-2xl text-gray-700 dark:text-secondary mt-12 font-bold gap-2  md:flex">

      <span class="md:inline-flex inline-block w-5 h-2.5 bg-secondary dark:bg-primary"></span> GET SOCIAL WITH US

    </div>
    <p class="font-light text-lg mt-2">Follow our Ecuatorian adventures and share your own with us.</p>
  </section>

  <div class="container hidden sm:block  my-6">
    <div class="grid grid-cols-7 items-center text-2xl text-gray-700 font-bold gap-3">
      <div class="border dark:border-gray-700">
        <a href="https://www.instagram.com/goto.peru/" target="_blank">
          <nuxt-img src="/images/logos/instagram2.png" alt="" class="md:px-6 md:py-4 p-2 w-full"></nuxt-img>
        </a>
      </div>
      <div class="border dark:border-gray-700">
        <a href="https://www.facebook.com/GOTOPERUcom/" target="_blank">
          <nuxt-img src="/images/logos/facebook2.png" alt="" class="md:px-6 md:py-4 p-2 w-full"></nuxt-img>
        </a>
      </div>
      <div class="border dark:border-gray-700">
        <a href="https://www.youtube.com/channel/UCWjJ10j-_BfNTDnmjBug8Ng" target="_blank">
          <nuxt-img src="/images/logos/youtube2.png" alt="" class="md:px-6 md:py-4 p-2 w-full"></nuxt-img>
        </a>
      </div>
      <div class="border dark:border-gray-700">
        <a href="https://www.tiktok.com/@gotoperu" target="_blank">
          <nuxt-img src="/images/logos/tiktok2.png" alt="" class="md:px-6 md:py-4 p-2 w-full"></nuxt-img>
        </a>
      </div>
      <div class="border dark:border-gray-700">
        <a href="https://www.tripadvisor.com.pe/Attraction_Review-g294314-d15202262-Reviews-Gotoperu-Cusco_Cusco_Region.html" target="_blank">
          <nuxt-img src="/images/logos/tripadvisor2.png" alt="" class="md:px-6 md:py-4 p-2 w-full dark:filter dark:grayscale dark:invert"></nuxt-img>
        </a>
      </div>
      <div class="border dark:border-gray-700">
        <a href="https://www.yelp.com/biz/gotoperu-washington?osq=gotoperu.com" target="_blank">
          <nuxt-img src="/images/logos/yelp2.png" alt="" class="md:px-6 md:py-4 p-2 w-full dark:filter dark:grayscale dark:invert"></nuxt-img>
        </a>
      </div>
      <div class="border dark:border-gray-700">
        <a href="https://www.trustpilot.com/review/gotoperu.com">
          <nuxt-img src="/images/logos/trust2.png" alt="" class="md:px-6 md:py-4 p-2 w-full dark:filter dark:grayscale dark:invert"></nuxt-img>
        </a>
      </div>
    </div>
  </div>

  <section class="container grid grid-cols-1 md:grid-cols-2 md:mb-12">
    <div class="bg-gray-800 dark:bg-gray-800 text-white dark:bg-opacity-90 p-6 dark:text-gray-50  items-center  md:block">
      <div class="py-12 text-sm">
        <h3 class="font-semibold text-2xl">
          ABOUT GOTOECUADOR
        </h3>
        <p class="block my-12">
          We are a travel operator with Headquarters in Quito City and offices in the main destinations of Ecuador catering to travelers who want an original, authentic and unforgettable experience at the land of the Incas.
        </p>

        <h3 class="font-medium">Personalized Service</h3>
        <p class="flex my-4 items-start">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          First name basis always, since your own custom-made itinerary our dedicated local team, including representatives, guides, drivers will be always there for you on each day of your vacation. Plus a truly local assistance 24/7 on each destination.
        </p>
        <h3 class="font-medium">Confidence</h3>
        <p class="flex my-4 items-start">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          GOTOECUADOR is certified by the ECUATORIAN Government, by the Ministry of Foreign Trade and Tourism of ECUADOR (MINCETUR) . In addition we are also highly rated on Tripadvisor, Trustpilot and diverse well known travel forums.
        </p>
      </div>
    </div>
    <div class="bg-primary text-white flex items-end">
      <nuxt-img src="images/team/women1.webp" alt="" class="mx-auto w-1/2 pt-4"></nuxt-img>
      <div class="text-center">
      </div>
    </div>
  </section>


  <section class="container">
    <div class=" mb-12">
      <div class="elfsight-app-5eb4043b-fced-4876-890c-bcac70bb6720" data-elfsight-app-lazy></div>
    </div>
  </section>

<!--  <section>-->
<!--    <div class=" mb-3 container sm:mt-0 items-center text-2xl text-gray-700 dark:text-secondary font-bold gap-2 hidden  md:flex">-->
<!--      <div class="">-->
<!--        <span class="hidden md:inline-flex  w-5 h-2.5 bg-secondary dark:bg-primary"></span>-->
<!--      </div> ECUADOR Travel Information-->
<!--    </div>-->
<!--    <div class="hidden md:block">-->
<!--      <section class="grid grid-cols-1 md:grid-cols-5 container gap-4">-->
<!--        <div class="md:col-span-3 relative">-->
<!--          <nuxt-img src="images/hotel.jpg" alt="" class="object-cover h-full w-full"></nuxt-img>-->
<!--          <div class="absolute inset-0 gradient-cicle-gray"></div>-->
<!--        </div>-->
<!--        <div class="md:col-span-2 bg-secondary bg-opacity-20 dark:bg-gray-700 dark:bg-opacity-90 p-6 dark:text-gray-50 flex items-center">-->
<!--          <div class="">-->
<!--            <h3 class="font-semibold text-2xl">Hotels</h3>-->
<!--            <div class=" mb-10">-->
<!--              <span class="inline-block w-10 h-2 bg-secondary dark:bg-primary"></span>-->
<!--            </div>-->
<!--            <p class="block my-12">-->
<!--              “At GOTOECUADOR, we are guided by a set of core values — quality, passion, trust and personal service : and we guarantee that these hallmarks will be met every day during your vacation in ECUADOR".-->
<!--            </p>-->
<!--            <a href="#" class="btn-primary">View All</a>-->
<!--          </div>-->
<!--        </div>-->
<!--      </section>-->
<!--    </div>-->

<!--  </section>-->



</template>
<script setup lang="ts">
import IconSlider from "~/components/page/home/IconSlider.vue";

import {usePackageStore} from "~/stores/packages";
import PopularPackages from "~/components/packages/PopularPackages.vue";

const packageStore = usePackageStore()

const listPackages = ref([])

const getPackage = async () => {
  const res:any = await packageStore.getPackageTop()
  listPackages.value = res
}

onMounted(async () => {
  await getPackage()
  if (process.client) {
    // @ts-ignore
    import('https://static.elfsight.com/platform/platform.js').then((module) => {

    });
  }
})

</script>