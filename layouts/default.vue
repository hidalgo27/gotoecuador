<template>
  <Headers></Headers>
  <slot></slot>
  <Footer></Footer>
</template>

<script setup lang="ts">

import Headers from "~/components/page/Headers.vue";
import Footer from "~/components/page/Footer.vue";
</script>