<template>
  <div>

    <section class="h-[75vh] 2xl:h-[60vh] relative">
      <nuxt-img src="/images/banners/tortuga-ecuador.webp" alt="" :placeholder="[50, 25, 75, 5]" class="object-cover object-bottom w-full h-[75vh] 2xl:h-[60vh]"></nuxt-img>

      <div class="absolute inset-x-0 bottom-0">
        <div class="container">
          <h1 class="text-4xl py-6 font-semibold text-gray-50">
            Ecuador Travel Packages
          </h1>
        </div>
      </div>
    </section>

    <section class="container py-12 text-gray-500 text-center mx-auto">
      <p class="text-sm">GOTOECUADOR offers the best Ecuador travel packages, covering the main Ecuador destinations such as the Galápagos Islands, Quito, Guayaquil, Cuenca, Baños, the Amazon, and many more. Our travel packages range from 2 to 20 days.</p>
      <p class="text-sm my-6">Our itineraries are carefully-crafted experiences combining the most memorable and unique activities and tours that Ecuador has to offer. Our Ecuador travel packages offer a planned itinerary seeing something new, interesting, and fascinating every day. Whether you are a family, group of friends, solo traveler, or a couple, our daily activities will give you the opportunity to witness the history, architecture, nature, and culture of Ecuador. You will not have to worry about anything, we have you covered from the moment you arrive in Ecuador until you depart, you will always be under the GOTOECUADOR umbrella with a friendly representative ready to assist you every day. All you need to do is sit back and enjoy each day, creating priceless memories to share with friends and family.</p>
      <p>The following Ecuador travel packages could be a reference and inspiration for your ideal Ecuadorian vacation. No matter the type of adventure you are seeking, GOTOECUADOR has a trip for you. Hoping to see giant tortoises in the Galápagos? Check! Want an active hiking trip in the Andes? Check! How about a culinary tour in Quito? Check! And a trip for you, your kids, and your grandparents? Contact us today with a short description of your ideal Ecuador trip and we will make it happen.</p>
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