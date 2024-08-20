<template>
  <div>
    <Headers></Headers>
    <slot></slot>
    <section class="py-2 bg-gray-100 mt-12 relative z-10">

      <FormFooterInquireDetail></FormFooterInquireDetail>
    </section>
    <Footer></Footer>
<!--    <Float></Float>-->
  </div>
</template>

<script setup lang="ts">

import Headers from "~/components/page/Headers.vue";
import Footer from "~/components/page/Footer.vue";
import Float from "~/components/page/Float.vue";
</script>