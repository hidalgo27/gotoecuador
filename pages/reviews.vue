<template>
<!--  <section class="h-[75vh] -z-1 relative">-->
<!--    <nuxt-img src="/images/team/banner4.webp" alt="" class="object-cover w-full object-center"></nuxt-img>-->
<!--    <div class="absolute bottom-0 left-0 p-12">-->
<!--      <h1 class="text-5xl font-semibold text-gray-50">Reviews and Testimonials</h1>-->
<!--    </div>-->
<!--  </section>-->
  <header class="h-[75vh] 2xl:h-[60vh] relative">
    <nuxt-img src="/images/team/gotoecuador-team1.webp" :placeholder="[50, 25, 75, 5]" alt="" class="object-cover w-screen h-full"></nuxt-img>
        <div class="absolute inset-x-0 bottom-0">
          <div class="container">
            <h1 class="text-4xl py-6 font-semibold text-gray-50">
              Reviews and Testimonials
            </h1>
          </div>
        </div>
  </header>
  <section class="container py-12 text-gray-500 text-center">
    <p>Experience Ecuador with an award-winning team on a completely customized, private or small group tour for an authentic trip of a lifetime. With our 97% satisfaction rate, round-the-clock local support and 100% financial protection, explore 20+ enchanting destinations around the land of the Incas safely and seamlessly. Our 9,000+ enchanted guests will vouch for us.</p>
    <div class="text-gray-600 text-xl font-medium">
      We will work according to your agenda and travel interests to build together the most exclusive travel plans.
    </div>
  </section>



  <section class="container mt-6">


    <div class="mt-6 text-white mb-6">
      <div class="elfsight-app-5eb4043b-fced-4876-890c-bcac70bb6720" data-elfsight-app-lazy></div>
    </div>

    <div class="mt-6 text-white">
      <div class="elfsight-app-cfbb45fe-6aae-4647-bd41-811d26479335" data-elfsight-app-lazy></div>
    </div>



  </section>



  <section class="container  mt-12 py-6">

    <div class="flex items-center text-2xl text-gray-700 mb-4 dark:text-secondary font-bold gap-2">
      <div class="border-4 h-1 w-12 border-secondary"></div> VIDEO TESTIMONIALS
    </div>


    <div class="mt-6 text-white">
      <div class="elfsight-app-c498a4fd-fc7b-4351-9853-204c13347838" data-elfsight-app-lazy></div>
    </div>

  </section>


</template>

<script setup lang="ts">
onMounted(async () => {

  if (process.client) {
    // @ts-ignore
    import('https://static.elfsight.com/platform/platform.js').then((module) => {

    });
  }

})
</script>