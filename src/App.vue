<script setup>
  import Abilities from './components/Abilities.vue'
  import AboutMe from './components/AboutMe.vue'
  import Portfolio from './components/Portfolio.vue'
  import Welcome from './components/Welcome.vue'
  import { useStore } from './store/piniaStore.js'
  import { ref, onMounted, onUnmounted } from 'vue'
  // Variables
  const store = useStore()
  const welcomeRef = ref(null)
  const aboutMeRef = ref(null)
  const abilitiesRef = ref(null)
  const portfolioRef = ref(null)

</script>

<template>
  <div class="relative w-full h-fit overflow-x-hidden flex flex-col justify-center scroll-smooth">
    <Welcome ref="welcomeRef" id="welcome" />
    <AboutMe ref="aboutMeRef" id="aboutMe" />
    <Abilities ref="abilitiesRef" id="abilities" />
    <Portfolio ref="portfolioRef" id="portfolio" />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>./components/Welcome.vue
./components/Habilities.vue/index.js./components/Abilities.vue/index.js