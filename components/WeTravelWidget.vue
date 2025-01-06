<script setup>

const scriptContainer = ref(null);

onMounted(() => {
  if (!document.querySelector('#wetravel_review_widget')) {
    const script = document.createElement('script');
    script.src = 'https://cdn.wetravel.com/widgets/embed_reviews.js';
    script.async = true;
    script.id = 'wetravel_review_widget';
    script.setAttribute('data-env', 'https://www.wetravel.com');
    script.setAttribute('data-version', 'v0.3');
    script.setAttribute('data-userslug', 'gotoperu');
    script.setAttribute('data-uid', '239346');
    script.setAttribute('data-showstars', 'true');
    script.setAttribute('data-showcount', 'true');
    script.setAttribute('data-name', 'WeTravel Review Widget');
    scriptContainer.value.appendChild(script);
  }
});
</script>
<template>
  <div ref="scriptContainer"></div>
</template>


