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
      <div class="latest-projects btns">
        <ImageCard src="/src/assets/images/i5.png" />
        <div class="project-description">
          <TitleCard text="توسعه فرم ورود ساده با Vue js" />
          <a href="https://github.com/alifasihi/Simple-Login-Form-Vue-JS-1" class="btns btn btn-primary" target="_blank">مشاهده گیت هاب</a>
        </div>
      </div>
      <div class="latest-projects btns">
        <ImageCard src="/src/assets/images/i3.png" />

        <div class="project-description">
          <TitleCard text="توسعه وبسایت شخصی با Vue js" />
          <a href="#" class="btns btn btn-primary">مشاهده در گیت هاب</a>
        </div>
      </div>
      <div class="latest-projects btns">
        <ImageCard src="/src/assets/images/i4.png" />
        <div class="project-description">
          <TitleCard text="توسعه وبسایت پوشاک و مد با html و css ساده" />
          <a href="https://github.com/alifasihi/Fashion-website-with-HTML-CSS" class="btns btn btn-primary">مشاهده در گیت هاب</a>
        </div>
      </div>
    </div>
  </div>
</template>
