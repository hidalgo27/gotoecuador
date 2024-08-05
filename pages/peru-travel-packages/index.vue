<template>
  <div>

    <section class="-mt-20 h-[60vh] -z-1 relative overflow-hidden">
      <img src="/images/banners/machu-picchu-full-day.jpg" alt="" class="h-[60vh] w-full object-cover object-center">
      <div class="absolute w-full bottom-0  p-12">
        <div class="container">
          <h1 class="text-4xl py-6 font-semibold text-gray-50">Peru Travel Packages</h1>
        </div>
      </div>
    </section>

    <section class="container py-12 text-gray-500 text-center mx-auto">
      <p class="text-sm">GOTOPERU offers the best Peru travel packages covering the main Peru destinations such as Machu Picchu, Rainbow Mountain, Cusco, Lima, Sacred Valley, Titicaca Lake, Puno, Arequipa, Nazca, the Amazon and many more. Our travel packages range from 2 days to 20 days.</p>
      <p class="text-sm my-6">Our Itineraries are carefully-crafted experiences combining the most memorable unique activities and tours that Peru has to offer. Our Peru travel packages offer a planned itinerary seeing something new, interesting and fascinating every day. If you are a family, group of friends, solo traveler or a couple our daily activities will give you the opportunity to witness the history, architecture, nature and culture of Peru. You will not have to worry about anything, we have you cover since you arrive at Peru until you depart, you will be always under GOTOPERU umbrella with a friendly representative ready to assist you every day. All you need to do is sit back and enjoy everyday, creating priceless memories to share with friends and family.</p>
      <p>The following travel Peru packages could be a reference and inspiration for your ideal peruvian vacation. No matter the type of adventure you are seeking, GOTOPERU has a trip for you. Hoping to see Llamas? Check! .Want an active Inca Trail hiking trip? Check! How about a Ceviche in Lima? Check! .How about a trip for you, your kiddos, and Grandma and Grandpa? Contact us today with a short description of your ideal Peru trip and we will make it happen.</p>
    </section>

    <Wetravel></Wetravel>

    <PopularPackages :listPackages="listPackages"></PopularPackages>

  </div>
</template>
<script setup lang="ts">
import {usePackageStore} from "~/stores/packages";
import PopularPackages from "~/components/packages/PopularPackages.vue";
import Wetravel from "~/components/Wetravel.vue";

const packageStore = usePackageStore()

const listPackages = ref([])

const getPackage = async () => {
  const res:any = await packageStore.getPackage()
  listPackages.value = res
}

onMounted(async () => {
  await getPackage()
})
</script>