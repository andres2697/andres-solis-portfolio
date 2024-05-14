<script setup>
  import { ref } from 'vue'
  import abilitiesList from '../api/abilities-list.json'
  // Variables
  const containerOff = 'absolute w-[60%] sm:w-[40%] h-[70%] bg-white bg-opacity-85 opacity-30 rounded-md shadow-xl shadow-gray-700'
  const containerOn = 'absolute w-[60%] sm:w-[40%] h-[70%] bg-white bg-opacity-85 opacity-100 rounded-md shadow-xl shadow-gray-700'
  const positions = ref([
    { clase: 'top-[5%] left-[20%] sm:left-[30%] transform'  },
    { clase: 'top-[25%] left-[90%] sm:left-[85%] transform transition-right' },
    { clase: 'top-full left-[85%] transform' },
    { clase: 'top-[150%] left-[85%] transform' },
    { clase: 'top-[150%] left-[-25%] transform' },
    { clase: 'top-full left-[-25%] transform' },
    { clase: 'top-[25%] left-[-50%] sm:left-[-25%] transform transition-left' }
  ])
  const content = abilitiesList
  const regexFirst = /top-\[5%\] left-\[20%\] sm:left-\[30%\]./
  const regexLeft = /top-\[25%\] left-\[-50%\] sm:left-\[-25%\]./
  const regexRight = /top-\[25%\] left-\[90%\] sm:left-\[85%\]./
  const spin = ref(false)
  const spinAbilities = () => {
    positions.value.unshift(positions.value.pop())
  }
</script>

<template>
  <div class="w-full h-screen flex flex-col justify-center items-center align-middle bg-gradient-to-r from-gray-700 via-gray-600 to-gray-500">
    <div class="w-full h-[15%] flex flex-col justify-center items-center text-center p-5 rounded-md mt-5">
      <h1 class="w-[60%] flex items-center justify-center py-2 text-black text-2xl sm:text-4xl font-bold bg-white bg-opacity-90 rounded-md shadow-md shadow-gray-700">
        <font-awesome-icon icon="gear" class="mt-auto mb-auto mr-0 sm:mr-5 px-3 py-1 text-xl sm:text-2xl font-semibold"/>
        Mis habilidades
      </h1>
    </div>
    <div class="w-full relative h-[85%] flex flex-col justify-center items-center overflow-hidden">
      <div class="absolute  inset-0 flex flex-col justify-center items-center w-fit h-fit ml-2 sm:ml-10 text-center">
        <div
          class="flex justify-center items-center bg-white w-5 h-5 sm:w-10 sm:h-10 rounded-full text-2xl sm:text-3xl text-gray-700 font-bold p-5 sm:p-6 hover:cursor-pointer shadow-md shadow-gray-700"
          @click="spinAbilities"
          @mouseover="spin = true"
          @mouseleave="spin = false"
        >
          <font-awesome-icon icon="arrows-spin" class="transform translate ease-in duration-200" :class="spin ? 'rotate-90' : 'rotate-0'"></font-awesome-icon>
        </div>
        <span class="text-white text-xs sm:text-sm mt-2">Click <span class="hidden sm:flex">en el botón</span></span>
        <span class="text-white text-xs sm:text-sm">y gira!</span>
      </div>
      <div
        v-for="(position, index) in positions"
        :key="index"
        class="flex flex-col justify-evenly items-center text-center "
        :class="[
          regexFirst.test(position.clase) ? containerOn : containerOff,
          position.clase,
          regexLeft.test(position.clase) ? 'translate-y-0' : '',
          regexRight.test(position.clase) ? 'translate-y-0' : ''
        ]"
      >
        <h3 class="flex w-full text-center justify-center items-center h-[15%] font-bold text-base sm:text-xl mt-2">
          {{ content[index].title }}
        </h3>
        <div class="grid grid-rows-4 grid-flow-col gap-4 w-full h-[85%] mt-auto ml-auto mr-4 pl-6 pr-6 text-start">
          <div v-for="(ability, index) in content[index].abilities.ability" :key="index" class="flex align-center items-center text-sm sm:text-base">
            <font-awesome-icon icon="code" />
            <span class="pl-2 font-semibold">{{ ability.name }}</span>
          </div>
        </div>
      </div>
      <div class="absolute inset-0 clip-triangle w-[52%] h-[80%] rounded-2xl bg-gradient-to-t from-white via-white/90 to-white/5 opacity-60 top-[60%] left-[50%] transform -translate-x-[50%]"></div>
    </div>
  </div>
</template>

<style scoped>
.clip-triangle {
  clip-path: polygon(0% 0%, 50% 100%, 100% 0%);
}
@keyframes left-transition {
  0% {
    transform: translateY(150%) translateX(-30%);
  }
  100% {
    transform: translateY(0) translateX(0);
  }
}
@keyframes right-transition {
  0% {
    transform: translateY(-50%) translateX(100%);
  }
  100% {
    transform: translateY(0) translateX(0);
  }
}
.transition-right {
  animation: left-transition 500ms ease-out
}
.transition-left {
  animation: right-transition 500ms ease-out
}
</style>
