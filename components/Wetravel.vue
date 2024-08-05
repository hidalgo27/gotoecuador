<template>
  <button
      class="btn-primary wtrvl-checkout_button hidden z-10 "
      id="wetravel_button_widget"
      data-env="https://www.wetravel.com"
      data-version="v0.3"
      data-uid="239346"
      :data-uuid="''+packageStore.code_w"
      :href="'https://www.wetravel.com/checkout_embed?uuid='+packageStore.code_w"
      ref="targetButton" @click="targetAction">
    Book Now {{packageStore.code_w}}
  </button>
</template>
<script setup lang="ts">
import {usePackageStore} from "~/stores/packages";

useHead({
  script: [ { src: 'https://cdn.wetravel.com/widgets/embed_checkout.js' } ]
})

const targetButton = ref<HTMLButtonElement | null>(null);


const packageStore = usePackageStore()
const targetAction = () => {
  console.log('Botón objetivo clickeado!');

};

watch(() => packageStore.code_w, async (newVal, oldVal) => {
  if (newVal && targetButton.value) {
    await nextTick();
    targetButton.value.click();
  }
});

</script>