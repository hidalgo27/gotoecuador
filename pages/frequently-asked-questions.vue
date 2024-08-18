<template>
  <section class="container py-12 text-gray-500 text-center">
    <h1 class="text-5xl mb-8 font-semibold ">Frequently asked questions</h1>
    <p class="text-gray-600 text-xl font-medium">A trip to Ecuador is an exciting adventure! There are a number of common questions first-time travelers to Ecuador frequently ask.</p>
  </section>

  <section class="container">

    <article class="mb-4" v-for="(faq, index) in listFaq" :key="index">

      <header class="border border-gray-200 px-4 py-2 flex justify-between cursor-pointer bg-gray-100">
        <h1 class="font-semibold text-sm text-gray-600 "><span class="capitalize">{{ index + 1 }}: </span> {{ faq.titulo }}</h1>

<!--        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">-->
<!--          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />-->
<!--        </svg>-->
      </header>
      <div class="bg-white py-2 px-4 border mt-1">
        <div class="grid grid-cols-1 gap-2 text-sm list-disc" v-html="faq.descripcion"></div>
      </div>
    </article>

  </section>
</template>

<script setup lang="ts">
import {useOtherStore} from "~/stores/others";

const otherStore = useOtherStore()
const listFaq = ref([])

const getFaq = async () => {
  const res:any = await otherStore.getFaq()
  listFaq.value = res
}

onMounted(async () => {
  await getFaq()
})
</script>