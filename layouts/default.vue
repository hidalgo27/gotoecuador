<template>
  <div>
    <Headers class="sticky top-0 sm:relative z-50"></Headers>

    <slot/>

    <section class="py-2 bg-gray-100 mt-12 relative z-10">

      <form-footer-inquire></form-footer-inquire>
    </section>
    <Footer></Footer>

    <Float></Float>

  </div>
</template>

<script setup lang="ts">

import Headers from "~/components/page/Headers.vue";
import Footer from "~/components/page/Footer.vue";
import Float from "~/components/page/Float.vue";
</script>