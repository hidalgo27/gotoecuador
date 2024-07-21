<template>
  <div class="sticky top-0 z-40 bg-white">
    <div class="container flex justify-between py-6 items-center">
      <div class="md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" @click="packageStore.showModalMenu = !packageStore.showModalMenu">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </div>
      <Nav></Nav>
      <div class="">
        <a class="btn-secondary" href="#form-dream-adventure">Inquire Now</a>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {usePackageStore} from "~/stores/packages";
import Nav from "~/components/page/Nav.vue";
const packageStore = usePackageStore()

</script>