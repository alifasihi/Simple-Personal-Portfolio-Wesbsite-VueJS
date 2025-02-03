<script setup>
import Navigator from "./components/Navigator.vue";
import HeaderShow from "./components/Headershow.vue";
import AboutMe from "./components/Aboutme.vue";
import Specializing from "./components/Specializing.vue";
import Protfolio from "./components/Protfolio.vue";
import ContactMe from "./components/Contactme.vue";
import FooterShow from "./components/Footershow.vue";
import { ref, onMounted, onUnmounted } from "vue";

const isVisible = ref(false);

// Function to check scroll position
const handleScroll = () => {
  isVisible.value = window.scrollY > 100;
};

// Function to scroll to top smoothly
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Attach scroll event when component mounts
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

// Remove scroll event when component unmounts
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

</script>

<template>
  <span class="loader"></span>
  <header>
    <div class="navigation">
      <Navigator />
    </div>
    <div class="head-sec">
      <HeaderShow />
    </div>
  </header>
  <main>
    <section>
      <AboutMe />
    </section>
    <section>
      <Specializing />
    </section>
    <section>
      <Protfolio />
    </section>
    <article>
      <ContactMe />
    </article>
  </main>

  <footer>
    <FooterShow />
  </footer>
  <button class="scroll-top-btn" @click="scrollToTop">⬆️</button>
</template>
