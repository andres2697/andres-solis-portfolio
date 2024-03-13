<script setup>
import Presentation from './components/Presentation.vue'
import AboutMe from './components/AboutMe.vue'
import SplashScreen from './components/SplashScreen.vue'
</script>

<template>
  <div class="w-full h-fit">
    <SplashScreen />
    <Presentation />
    <AboutMe />
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
</style>
