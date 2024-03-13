<script setup>
  import { ref, onUnmounted } from 'vue'
  import { useStore } from '../store/piniaStore.js'
  // Variables
  const store = useStore()
  // Functions
  const intervalo = setInterval(() => {
    const newCounter = store.welcomeCounter + 1
    store.setWelcomeCounter(newCounter)
    if (store.welcomeCounter === 5) {
      clearInterval(intervalo)
    }
  }, 1200)
  // onUnmounted
  onUnmounted(() => {
    clearInterval(intervalo);
  })
</script>

<template>
  <div class="w-full h-screen absolute flex flex-col justify-center items-center align-middle bg-purple-700">
    <div class="w-1/2 h-[40%] flex flex-col bg-white rounded-lg p-5 justify-center text-center shadow-xl shadow-purple-800">
        <h2 class="font-bold text-4xl">¡Bienvenido a mi portafolio!</h2>
        <div class="relative flex mt-5">
            <div 
              class="absolute inset-0 flex items-center justify-center transition duration-1000 ease-in-out opacity-0"
              :class="store.welcomeCounter === 1 ? 'desplazar-desaparecer-transicion' : ''"
            >
                <h1 class="text-3xl font-bold text-purple-700 tracking-wide">Imagina</h1>
            </div>
            <div
              class="absolute inset-0 flex items-center justify-center transition duration-1000 ease-in-out opacity-0"
              :class="store.welcomeCounter === 2 ? 'desplazar-desaparecer-transicion' : ''"
            >
                <h1 class="text-3xl font-bold text-purple-700 tracking-wide">Diseña</h1>
            </div>
            <div
              class="absolute inset-0 flex items-center justify-center transition duration-1000 ease-in-out opacity-0"
              :class="store.welcomeCounter === 3 ? 'desplazar-desaparecer-transicion' : ''"
            >
                <h1 class="text-3xl font-bold text-purple-700 tracking-wide">Crea</h1>
            </div>
            <div
              class="absolute inset-0 flex items-center justify-center transition duration-1000 ease-in-out"
              :class="store.welcomeCounter >= 4 ? 'ultima-transicion opacity-100 translate-y-[10px]' : 'opacity-0'"
            >
                <h1 class="text-3xl font-bold text-purple-700 tracking-wide">Programa</h1>
            </div>
        </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes desplazar-desaparecer {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  50% {
    transform: translateY(10px);
    opacity: 1;
  }
  100% {
    transform: translateY(20px);
    opacity: 0;
  }
}

@keyframes last-transition {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  50% {
    transform: translateY(5px);
    opacity: 1;
  }
  100% {
    transform: translateY(10px);
    opacity: 1;
  }
}

/* Aplica la animación a la clase de transición */
.desplazar-desaparecer-transicion {
  animation: desplazar-desaparecer 1s ease-out;
}
.ultima-transicion {
  animation: last-transition 1s ease-out;
}
</style>
