<!-- eslint-disable vue/multi-word-component-names -->

<script setup>
import ImageCard from "./Imagedisplay.vue";
import TitleCard from "./Titledisplay.vue";
</script>

<template>
  <div class="protfolio" id="work">
    <div class="protfolio-title">
      <span>نمونه کارها</span>
      <h3>آخرین پروژه ها</h3>
    </div>
    <div class="latest-project">
      <div class="latest-projects">
        <ImageCard src="/src/assets/svgs/i5.svg" />
        <div class="project-description">
          <TitleCard text="Simple-Login-Form-Vue-JS" />
          <a href="https://github.com/alifasihi/Simple-Login-Form-Vue-JS-1" class="btns btn btn-primary" id="btn-needfood" target="_blank">مشاهده گیت هاب</a>
        </div>
      </div>
      <div class="latest-projects">
        <ImageCard src="/src/assets/images/i3.png" />

        <div class="project-description">
          <TitleCard text="توسعه وبسایت خیابان کافه" />
          <a href="#" class="btns btn btn-primary" id="btn-cafestreet">مشاهده در گیت هاب</a>
        </div>
      </div>
      <div class="latest-projects">
        <ImageCard src="/src/assets/images/i4.png" />
        <div class="project-description">
          <TitleCard text="توسعه وبسایت مسافربری" />
          <a href="#" class="btns btn btn-primary" id="btn-travelapp">مشاهده در گیت هاب</a>
        </div>
      </div>
    </div>
  </div>
</template>
