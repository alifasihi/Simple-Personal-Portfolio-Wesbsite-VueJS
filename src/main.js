import './assets/styles/global.css'
import './assets/styles/main.css'
import './assets/styles/devices.css'
import '../public/fonts/Vazir.ttf'
import '../public/fonts/Vazir.woff'
import '../public/fonts/Vazir.woff2'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

window.addEventListener("load", function () {
  // وقتی صفحه به طور کامل لود شد، کلاس 'loaded' به تگ body اضافه می‌شود
  document.body.classList.add("loaded");
});

//اسکرول نرم بین بخش‌های صفحه
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

const sections = document.querySelectorAll("section, header, footer");
const navLi = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((a) => {
    a.classList.remove("active");
    if (a.getAttribute("href") === `#${current}`) {
      a.classList.add("active");
    }
  });
});
