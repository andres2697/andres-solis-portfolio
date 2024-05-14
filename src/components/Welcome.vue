<script setup>
  import { ref, onUnmounted, onMounted } from 'vue'
  import { useStore } from '../store/piniaStore.js'
  // Variables
  const store = useStore()
  const screenWidth = ref(window.innerWidth)
  const isSmallScreen = ref(false)

  // Functions
  const intervalo = setInterval(() => {
    const newCounter = store.welcomeCounter + 1
    store.setWelcomeCounter(newCounter)
    if (store.welcomeCounter === 8) {
      isSmallScreen.value = window.innerWidth < 640; // Cambia a tu breakpoint de sm
      // Ocultar la guía después de 1 segundo
      setTimeout(() => {
        isSmallScreen.value = false;
      }, 2000);
      clearInterval(intervalo)
    }
  }, 1000)
  const rocketStyle = ref({
    transition: 'transform 900ms ease-in-out',
    transform: 'rotate(0)',
  })
  const randomTop = ref(0)
  const randomLeft = ref(0)
  const moveRandom = async () => {
    const fullScreenH = window.innerHeight
    const fullScreenW = window.innerWidth
    let left = Math.random() * (fullScreenW - 280)
    let startRangeTop1 = 0;
    let endRangeTop1 = screenWidth.value > 1000 ?  30 : 20;
    let startRangeTop2 = screenWidth.value > 1000 ? 40 : 60;
    let endRangeTop2 = screenWidth.value > 1000 ? 50 : 70;
    let randomNumber = Math.random();

    if (randomNumber < 0.5) {
        randomTop.value = Math.floor(Math.random() * (fullScreenH * (endRangeTop1 - startRangeTop1) / 100)) + fullScreenH * startRangeTop1 / 100;
    }
    else {
        randomTop.value = Math.floor(Math.random() * (fullScreenH * (endRangeTop2 - startRangeTop2) / 100)) + fullScreenH * startRangeTop2 / 100;
    }
    randomLeft.value = Math.floor(left)
    
    await shakeRocket()
  }
  const shakeRocket = async () => {
    rocketStyle.value.transform = 'rotate(-10deg)'
    setTimeout(() => {
      rocketStyle.value.transform = 'rotate(20deg)'
    }, 300)
    setTimeout(() => {
      rocketStyle.value.transform = 'rotate(0deg)'
    }, 600)
  }
  // onMounted
  onMounted(async () => {
    randomTop.value = screenWidth.value > 1000 ? (window.innerHeight - 350) : (window.innerHeight - 160)
    randomLeft.value = screenWidth.value > 1000 ? (window.innerWidth - 350) : (window.innerWidth - 150)
  })
  // onUnmounted
  onUnmounted(() => {
    clearInterval(intervalo)
  })
</script>

<template>
  <div class="w-full h-screen overflow-x-hidden">
    <div v-if="isSmallScreen" class="absolute top-0 left-0 w-screen h-screen flex justify-start items-end bg-gray-900 bg-opacity-75 z-50">
      <img src="../assets/SwipeGuide.gif" class="w-20 h-20 animate-fade-in ml-5 mb-2" />
    </div>
    <div 
      class="w-full h-screen absolute flex flex-col justify-center items-center align-middle bg-gradient-to-r from-purple-600 via-purple-500 to-purple-400"
    >
      <div
        class="absolute flex flex-col z-0 text-center text-white transition-transform duration-300 transform"
        @mouseover="moveRandom"
        :style="{ top: randomTop + 'px', left: randomLeft + 'px' }"          
      >
        <img src="../assets/CoheteBlanco.svg" :width="screenWidth > 1000 ? '250' : '100'" :height="screenWidth > 1000 ? '250' : '100'" :style="rocketStyle">
        <span class="animate-bounce mt-5 font-bold">Hover Me!</span>
      </div>
      <div class="w-2/3 sm:w-1/2 h-[40%] flex flex-col z-50 bg-white bg-opacity-95 rounded-lg p-5 justify-center text-center shadow-xl shadow-purple-800">
          <h2 class="font-bold text-2xl mb-3 sm:text-[40px]">Bienvenido a mi portafolio</h2>
          <div class="relative flex mt-2">
              <div 
                class="absolute inset-0 flex items-center justify-center transition duration-1000 ease-in-out opacity-0"
                :class="store.welcomeCounter === 1 ? 'desplazar-desaparecer-transicion' : ''"
              >
                  <h1 class="text-2xl sm:text-4xl font-bold text-purple-700 tracking-wide">Imagina</h1>
              </div>
              <div
                class="absolute inset-0 flex items-center justify-center transition duration-1000 ease-in-out opacity-0"
                :class="store.welcomeCounter === 2 ? 'desplazar-desaparecer-transicion' : ''"
              >
                  <h1 class="text-2xl sm:text-4xl font-bold text-purple-700 tracking-wide">Diseña</h1>
              </div>
              <div
                class="absolute inset-0 flex items-center justify-center transition duration-1000 ease-in-out opacity-0"
                :class="store.welcomeCounter === 3 ? 'desplazar-desaparecer-transicion' : ''"
              >
                  <h1 class="text-2xl sm:text-4xl font-bold text-purple-700 tracking-wide">Crea</h1>
              </div>
              <div
                class="absolute inset-0 flex items-center justify-center transition duration-1000 ease-in-out"
                :class="store.welcomeCounter >= 4 ? 'ultima-transicion opacity-100 translate-y-[10px]' : 'opacity-0'"
              >
                  <h1 class="text-2xl sm:text-4xl font-bold text-purple-700 tracking-wide">Programa</h1>
              </div>
          </div>
          <div class="w-full h-10 flex justify-center items-center mt-10">
            <h2 
              class="font-semibold transition-all duration-1000"
              :class="(store.welcomeCounter >= 6 && store.welcomeCounter % 2 === 0) ? 'sm:text-[18px] text-[15px]': 'sm:text-[20px] text-[17px]'"
            >
              ¡Atrapa al cohete!
            </h2>
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

/* Animación de desvanecimiento */
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}

/* Aplicar la animación a la imagen */
.animate-fade-in {
  animation: fade-in 1s ease-out;
}
</style>
