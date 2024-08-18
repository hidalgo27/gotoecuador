<template>
  <header class="h-[75vh] 2xl:h-[60vh] relative">
    <nuxt-img src="/images/team/gotoecuador-team3.webp" :placeholder="[50, 25, 75, 5]" alt="" class="object-cover w-screen h-full"></nuxt-img>
    <div class="absolute inset-x-0 bottom-0">
      <div class="container">
        <h1 class="text-4xl py-6 font-semibold text-gray-50">
          About Us
        </h1>
      </div>
    </div>
  </header>

  <section class="my-12 container">

      <div class="grid md:grid-cols-2 grid-cols-1 items-center  gap-24">

          <div class="columns-2 space-y-4 gap-3">
            <img src="/images/home/operator9.webp" alt="" class="rounded-2xl bg-primary">
            <img src="/images/home/operator10.webp" alt="" class="rounded-2xl bg-secondary">
            <img src="/images/home/operator11.webp" alt="" class="rounded-2xl bg-gray-700">
            <img src="/images/home/operator8.webp" alt="" class="rounded-2xl">
          </div>


        <article>
          <h2 class="text-3xl font-bold mb-6">About GotoEcuador Team</h2>
          <p class="mb-3">Gotoecuador is a travel agency operated by passionate local ecuatorians,  from our drivers, guides, office representatives and more...</p>
          <p class="mb-3">Throughout the course of our fourteen years in business, we have made a name for ourselves as one of Ecuador's top travel companies and tour guides.</p>
          <p>Above all, we take great satisfaction in offering individualized service and employing a group of knowledgeable local travel advisors who are familiar with the entire nation.</p>
        </article>
      </div>

  </section>

  <section class="mt-12 bg-primary py-12">
    <div class="container gap-6 grid md:grid-cols-3">
      <article class="text-center bg-white px-6 py-12 rounded-xl">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 text-primary mx-auto">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
        </svg>
        <h3 class="my-6 font-semibold">VALUES</h3>
        <hr class="my-6">
        <p>In the GotoEcuador Family, the core values that guide us in all our trips are passion for travel, innovation, customer orientation, trust, safety, communication, and quality of service.</p>
      </article>
      <article class="text-center bg-white px-6 py-12 rounded-xl">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 text-primary mx-auto">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
        </svg>

        <h3 class="my-6 font-semibold">CERTIFICATIONS</h3>
        <hr class="my-6">
        <p>GotoEcuador is certified by the Ministry of Foreign Trade and Tourism, and the National Tourism Control Organisms, as well as by various tourist reservation and review platforms such as Trip Advisor and Trustpilot.</p>
      </article>
      <article class="text-center bg-white px-6 py-12 rounded-xl">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 text-primary mx-auto">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>

        <h3 class="my-6 font-semibold">COMMITMENT</h3>
        <hr class="my-6">
        <p>At GotoEcuador, our commitment goes beyond just creating an ideal plan for you. Our family wants you to create a bond with each place you visit, so you can have the trip of your dreams.</p>
      </article>
    </div>
  </section>

  <section class="bg-gray-100 py-12">
    <CarouselTeam></CarouselTeam>
  </section>

  <section>
    <div class="container grid md:grid-cols-12 py-12 gap-12 items-center">
      <div class="md:col-span-3">
        <h2 class="text-3xl font-bold">Social Media <br>& Reviews</h2>
        <p class="my-6">At the GotoEcuador family, we value the comments and feedback of all our travelers. Follow us on our social networks and digital platforms so you don't miss out on our latest news about LATAM destinations.</p>
      </div>
      <div class="md:col-span-9 gap-6 grid md:grid-cols-4">
        <article class="text-center px-6 py-12 border rounded-xl">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 mx-auto">
            <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
          </svg>
          <h3 class="my-6 text-3xl font-semibold">97%</h3>
          <hr class="my-6">
          <p>GUEST SATISFACTION RATE</p>
        </article>
        <article class="text-center px-6 py-12 border rounded-xl">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 mx-auto">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
          </svg>

          <h3 class="my-6 text-3xl font-semibold">9000 +</h3>
          <hr class="my-6">
          <p>GOTOLATAM GUESTS</p>
        </article>
        <article class="text-center px-6 py-12 border rounded-xl">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 mx-auto">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
          </svg>

          <h3 class="my-6 text-3xl font-semibold">30 000+</h3>
          <hr class="my-6">
          <p>FACEBOOK FOLLOWERS</p>
        </article>
        <article class="text-center px-6 py-12 border rounded-xl">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 mx-auto">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
          </svg>
          <h3 class="my-6 text-3xl font-semibold">#gotoperu</h3>
          <hr class="my-6">
          <p>Tag us on Instagram</p>
        </article>
      </div>
    </div>
  </section>



</template>

<script lang="ts" setup>

import CarouselTeam from "~/components/page/slider/CarouselTeam.vue";
</script>