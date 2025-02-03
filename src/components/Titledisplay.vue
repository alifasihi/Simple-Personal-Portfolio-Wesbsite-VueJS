<!-- eslint-disable vue/multi-word-component-names -->

<script setup>
const props = defineProps({
  text: String, // مقدار متنی که والد ارسال می‌کند
});

const getText = () => props.text || "متن پیش‌فرض در صورت نبود مقدار!";
</script>

<template>
  <div class="titleCard">
    <span>{{ getText() }}</span>
  </div>
</template>
