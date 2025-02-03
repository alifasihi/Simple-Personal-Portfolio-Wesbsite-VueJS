<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref } from "vue";

const isMenuOpen = ref(false);

// Toggle function to open/close the menu
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>
<template>
  <div class="navbar">
    <a href="#"><img src="/src/assets/svgs/Logo.svg" alt="/" class="btns logo" /></a>

    <nav>
      <ul>
        <li class="btns link-nav">
          <a
            class="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            href="#about"
            >درباره من</a
          >
        </li>
        <li class="btns link-nav">
          <a
            class="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            href="#specializing"
            >کارهای من</a
          >
        </li>
        <li class="btns link-nav">
          <a
            class="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            href="#work"
            >نمونه کارها</a
          >
        </li>
        <li class="btns link-nav">
          <a
            class="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            href="#contact"
            >تماس با من</a
          >
        </li>
      </ul>
    </nav>
    <!-- Hamburger Icon -->
    <img
      src="/src/assets/svgs/menu-alt-3.svg"
      alt="Menu"
      class="hamburger-icon"
      @click="toggleMenu"
    />

    <!-- Side Menu -->
    <div :class="['hamburger-menu', { 'show-hamburger-menu': isMenuOpen }]">
      <!-- Cross Icon -->
      <div class="cross-icon" @click="toggleMenu">
        <img src="/src/assets/svgs/x.svg" alt="Close Menu" />
      </div>

      <!-- Menu Items -->
      <div class="hamburger-menu-items">
        <ul>
          <li>
            <a
              class="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
              href="#about"
            >
              درباره من
            </a>
          </li>
          <li>
            <a
              class="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
              href="#specializing"
            >
              کارهای من
            </a>
          </li>
          <li>
            <a
              class="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
              href="#work"
            >
              نمونه کارها
            </a>
          </li>
          <li>
            <a
              class="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
              href="#contact"
            >
              تماس با من
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
