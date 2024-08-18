<template>
<!--  <section class="h-[60vh] -z-1 relative">-->
<!--    <nuxt-img src="/images/1327.jpg" alt="" class="h-[60vh] w-full object-cover object-center"></nuxt-img>-->
<!--    <div class="absolute w-full bottom-0 left-0 p-12">-->
<!--      <div class="container">-->
<!--        <h1 class="text-5xl font-semibold text-gray-50">Ecuador Destinations</h1>-->
<!--      </div>-->
<!--    </div>-->
<!--  </section>-->

<!--  <section class=" h-[75vh] 2xl:h-[60vh] relative">-->
<!--    <nuxt-img src="/images/banners/machupicchu.avif" :placeholder="[50, 25, 75, 5]" alt="" class="object-cover w-screen h-full"></nuxt-img>-->

<!--    <div class="absolute inset-x-0 bottom-0">-->
<!--      <div class="container">-->
<!--        <h1 class="text-4xl py-6 font-semibold text-gray-50">-->
<!--          Ecuador Destinations-->
<!--        </h1>-->
<!--      </div>-->
<!--    </div>-->
<!--  </section>-->

  <section>
    <div class="relative">
      <div class="h-[75vh] 2xl:h-[60vh] relative overflow-hidden vimeo-wrapper ">
        <div class="absolute bg-gradient-to-t from-gray-800 h-[75vh] opacity-20 z-10 inset-0"></div>
        <iframe src="https://player.vimeo.com/video/996360304?background=1&autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=1" frameborder="0" allow="autoplay; fullscreen" class=""></iframe>
      </div>
      <div class="absolute inset-x-0 bottom-0 z-10">
        <div class="container">
          <h1 class="text-4xl py-6 font-semibold text-gray-50">
            Ecuador Destinations
          </h1>
        </div>

      </div>
      <!--      <div class="absolute inset-0 bg-gradient-to-t to-70% from-gray-900 from-0% opacity-50"></div>-->
    </div>
  </section>



  <section class="container py-12 text-gray-500 text-center">

    <p>Ecuador is a unique country in South America, full of wonders that cannot be easily described in a few words. You will feel the magic of this land through its rich history, delicious cuisine, vibrant culture, and exciting adventures. With thousands of years of history, Ecuador proudly stands as one of the most diverse countries in the world, offering practically endless vacation destinations. From the lush national parks of the Amazon and ancient ruins to the stunning Galápagos Islands, beautiful mountains perfect for incredible hikes, and the tourist cities of Quito, Guayaquil, and Cuenca. Let yourself be amazed by all that Ecuador has to offer and experience an unforgettable adventure with us.</p>

  </section>

  <section class="container grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

    <article class="grid grid-cols-1 place-content-between mb-6 border-r border-l dark:border-gray-700" v-for="destination in listPackages">
      <div class="w-full">
        <figure class="overflow-hidden relative">
          <nuxt-img :src="destination.imagen" alt="" class="bg-cover h-full w-full"></nuxt-img>
          <div class="absolute inset-0 gradient-cicle-gray"></div>
        </figure>

        <div class="w-full p-6 mt-4 mb-5 text-center">
          <div class="">
            <h2 class="text-xl font-bold mb-4 text-center text-gray-600 dark:text-gray-300">{{destination.nombre}}</h2>
            <p class="text-sm text-gray-500 dark:text-gray-200" v-html="destination.resumen"></p>
          </div>
        </div>

      </div>

      <div class="w-full">
        <nuxt-link :href="'/destinations/'+destination.url" class="btn-secondary block text-center mt-2">View All</nuxt-link>
      </div>
    </article>


  </section>

  <section class="px-6 container grid grid-cols-1 md:grid-cols-4 my-12">
    <div class="text-center w-full col-span-4 items-center text-2xl text-gray-700 dark:text-secondary font-bold gap-2">
      ECUADOR HIGHLIGHTS
      <div class="border-4 h-1 w-12 border-primary mx-auto mt-3"></div>
    </div>
    <div class="col-span-4 text-center mt-4">
      Exploring Ecuador's natural and cultural diversity throughout four regions inside the country.
      Ecuador's varied geography is a delight for travelers. Formally categorized into four distinct sections, each region possesses its own distinctive allure and entices explorers in pursuit of varied encounters.
    </div>
  </section>

  <section>
    <div class="container">
      <div class="">
        <div class="flex my-4 gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          <p>The coastal region, which comprises slightly more than 25% of Ecuador's total geographical area, is a paradise for both beach lovers and devotees of cultural activities. This region provides a glimpse of the coastal beauty of the country with its scenic beaches, lively coastal cities such as Guayaquil and Manta, and a significant maritime history.</p>
        </div>
        <div class="flex my-4 gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          <p>The Sierra region, situated between two adjacent mountain ranges and encompassing an inter-Andean valley, offers a haven for hiking enthusiasts, history aficionados, and individuals seeking to engage with indigenous cultures. The scenery is adorned with charming Andean communities, offering valuable glimpses into Ecuador's diverse cultural fabric.</p>
        </div>
        <div class="flex my-4 gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          <p>The Amazon Region: Journey towards the eastern side of the Andes to discover the Amazon rainforest, an immense stretch of lush untamed land teeming with a wide range of plant and animal species. At this destination, visitors have the opportunity to interact with native cultures, participate in wildlife exploration, and witness the remarkable variety of plant and animal species that inhabit the Amazon region.</p>
        </div>
        <div class="flex my-4 gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          <p>The Galapagos Islands, renowned for their extraordinary evolutionary marvels, deserve special recognition. These islands, which were famously explored by Charles Darwin, serve as a living laboratory for a diverse range of unique and indigenous species, including giant tortoises and blue-footed boobies.</p>

        </div>


<!--        <p class="flex my-4">-->
<!--          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">-->
<!--            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />-->
<!--          </svg>-->
<!--          Buggy Ride through the Sand dunes at Huacachina Oasis.-->
<!--        </p>-->
<!--        <p class="flex my-4">-->
<!--          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">-->
<!--            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />-->
<!--          </svg>-->
<!--          Food Tour in Lima, our main city is one of the gastronomic capitals of the world. Here, you can try some of the most unique and tasty dishes-->
<!--        </p>-->
<!--        <p class="flex my-4">-->
<!--          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">-->
<!--            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />-->
<!--          </svg>-->
<!--          One of the best things to do in Ecuador is drinking Pisco Sours – and lots of them!-->
<!--        </p>-->
<!--        <p class="flex my-4">-->
<!--          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">-->
<!--            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />-->
<!--          </svg>-->
<!--          Swimming with the sea lions is another wildlife activity. Believe it or not, this is a tour you actually do from Lima!-->
<!--        </p>-->
<!--        <p class="flex my-4">-->
<!--          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">-->
<!--            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />-->
<!--          </svg>-->
<!--          Explore Cusco,  the former Inca capital, this high-altitude city of terracotta rooftops is a boom town with a cosmopolitan feel-->
<!--        </p>-->
<!--        <p class="flex my-4">-->
<!--          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">-->
<!--            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />-->
<!--          </svg>-->
<!--          Hike The world famous Inca Trail to Machu Picchu, make sure to book in advance for this trek, permits are limited.-->
<!--        </p>-->
<!--        <p class="flex my-4">-->
<!--          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">-->
<!--            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />-->
<!--          </svg>-->
<!--          Go to the Amazon Rainforest and their amazing natural lodges-->
<!--        </p>-->
<!--        <p class="flex my-4">-->
<!--          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">-->
<!--            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />-->
<!--          </svg>-->
<!--          Fly Over the Nazca Lines, especially if you’re into history, archeology or even Ancient Aliens.-->
<!--        </p>-->
<!--        <p class="flex my-4">-->
<!--          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">-->
<!--            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />-->
<!--          </svg>-->
<!--          Mystic Ecuador, Ecuador has a rich tradition of healers and spiritual advisors-->
<!--        </p>-->
<!--        <p class="flex my-4">-->
<!--          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">-->
<!--            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />-->
<!--          </svg>-->
<!--          A little-known attraction that is a lot of fun: swimming with the sea turtles! north of Ecuador at the town of Mancora.-->
<!--        </p>-->

<!--        <p class="flex my-4">-->
<!--          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">-->
<!--            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />-->
<!--          </svg>-->
<!--          Close experience with alpacas or llamas for a truly unforgettable Ecuador experience, you will enjoy these super adorable creatures!-->
<!--        </p>-->
<!--        <p class="flex my-4">-->
<!--          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">-->
<!--            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />-->
<!--          </svg>-->
<!--          Spot a Sea lion on the Ballestas Islands, 4hrs south of Lima.-->
<!--        </p>-->
<!--        <p class="flex my-4">-->
<!--          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">-->
<!--            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />-->
<!--          </svg>-->
<!--          Take off on a 4×4 ATV through the hillsides of the Sacred Valley to visit the Salt Mines of Maras and archeological site of Moray-->
<!--        </p>-->
<!--        <p class="flex my-4">-->
<!--          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">-->
<!--            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />-->
<!--          </svg>-->
<!--          Visit the Lake Titicaca, the highest navigable lake in the world and their floating islands called Uros.-->
<!--        </p>-->
<!--        <p class="flex my-4">-->
<!--          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">-->
<!--            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />-->
<!--          </svg>-->
<!--          Explore the neighborhood of Barranco at Lima, the area has long been popular with artists and poets, giving it a Bohemian feel.-->
<!--        </p>-->

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {usePackageStore} from "~/stores/packages";

const packageStore = usePackageStore()

const listPackages = ref([])

const getPackage = async () => {
  const res:any = await packageStore.getDestinations()
  listPackages.value = res
}

onMounted(async () => {
  await getPackage()
})
</script>