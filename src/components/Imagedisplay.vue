<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
// Sample images array
const props = defineProps({
  src: String, // آدرس تصویر
  alt: String  // متن جایگزین
});

const getImageSrc = () => props.src || "/src/assets/images/default.jpg";


</script>

<template>
  <div class="project-image">
    <img :src="getImageSrc()" alt="alt">
  </div>
</template>
