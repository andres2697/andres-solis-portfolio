<script setup>
  import { ref, onMounted } from 'vue'
  import "preline/preline";
  const carousel = ref([
    {
      title: 'José Andrés Solís Sotelo CV',
      description: 'Página web que proporciona mis datos de contacto, habilidades, formación académica y experiencia laboral. El enfoque en la experiencia de usuario y diseño responsivo es clave en el desarrollo de esta aplicación.',
      technologies: [
        { name: 'Vuejs 3', color: 'text-[#42b883]' }, { name: 'Vite', color: 'text-[#ffa800]' }, { name: 'HTML5', color: 'text-[#dd4b25]' }, { name: 'CSS3', color: 'text-[#254bdd]' }, { name: 'Javascript', color: 'text-[#e3c900]' }, { name: 'Tailwind', color: 'text-[#38bdf8]' }, { name: 'Google Geolocation API', color: 'text-[#32a350]' }
      ],
      img: "JoseAndresSolisSoteloCv.png",
      repository: 'https://github.com/andres2697/Jose_Andres_Solis_Sotelo_CV',
      repositoryName: 'Jose_Andres_Solis_Sotelo_CV'
    },
    {
      title: 'Problemas y Algoritmos',
      description: 'Prueba técnica para el grupo ABS que consta de 3 ejercicios de lógica.',
      technologies: [
        { name: 'Vuejs 3', color: 'text-[#42b883]' }, { name: 'Vite', color: 'text-[#ffa800]' }, { name: 'HTML5', color: 'text-[#dd4b25]' }, { name: 'CSS3', color: 'text-[#254bdd]' }, { name: 'Javascript', color: 'text-[#e3c900]' }, { name: 'Tailwind', color: 'text-[#38bdf8]' }
      ],
      img: "ProblemasYAlgoritmos.png",
      repository: 'https://github.com/andres2697/Problemas_y_algoritmos',
      repositoryName: 'Problemas_y_algoritmos'
    },
    {
      title: 'Bank List',
      description: 'Prueba técnica para Pagatodo Holdings en la que se consume una API externa para listar en una aplicación móvil nombres de bancos. Ésta aplicación fue desarrollada con React Native Expo.',
      technologies: [
        { name: 'React Native Expo', color: 'text-[#555a64]' }, { name: 'Consumo de APIs con fetch', color: 'text-[#aa392b]' }
      ],
      img: "BankList.jpeg",
      repository: 'https://github.com/andres2697/Bank_List',
      repositoryName: 'Bank_List'
    },
    {
      title: 'Mis gastos',
      description: 'Prueba técnica para Fraiche usando React Native y firebase para la creación de un CRUD con el fin de llevar el control de gastos. Ésta aplicación fue desarrollada con React Native Expo y se utilizó firebase como backend para almacenar la información.',
      technologies: [
        { name: 'React Native Expo', color: 'text-[#555a64]' }, { name: 'Firebase', color: 'text-[#f79f0c]' }
      ],
      img: "MisGastos.jpeg",
      repository: 'https://github.com/andres2697/registro-gastos-fraiche',
      repositoryName: 'registro-gastos-fraiche'
    }
  ])
  const showModal = ref(false)
  const imgModal = ref('')
  const foco = ref('#374152')
  const strokeWidth = ref(3)

  const openModal = (img) => {
    imgModal.value = img
    showModal.value = true
  }
  const closeModal = () => {
    imgModal.value = ''
    showModal.value = false
  }
  const  getImgUrl = (imageName) =>  {
    return new URL(`../assets/${imageName}`, import.meta.url).href
  }
  const changeColor = (classColor) => {
    const regex = /\[([^)]+)\]/
    const match = classColor.match(regex)
    const color = match ? match[1] : null
    strokeWidth.value = '8'
    foco.value = `${color}`
  }
</script>
<template>
  <div class="w-full h-fit sm:h-screen flex flex-col justify-center items-center align-middle bg-gradient-to-r from-[#f05e23]/70 via-[#f05e23]/80 to-[#f05e23]/90">
    <div v-if="showModal" class="fixed inset-0 flex justify-center items-center bg-black bg-opacity-75 w-full h-full z-50">
      <div class="relative items-center flex flex-col justify-center rounded-lg shadow-lg w-[80%] h-[80%]">
        <button @click="closeModal" class="self-end mb-2 px-4 py-1 bg-blue-600 bg-opacity-75 text-white border-white border-2 font-bold text-lg rounded-lg">Cerrar</button>
        <img
          :src="getImgUrl(imgModal)"
          width="80%"
          height="80%"
          class="rounded-md w-full h-full object-contain"
        />
      </div>
    </div>
    <div class="w-full h-[15%] flex flex-col justify-center items-center text-center p-5 rounded-md mt-5 z-30">
      <h1 class="w-[60%] flex items-center justify-center py-2 text-black text-2xl sm:text-4xl font-bold bg-white bg-opacity-90 rounded-md shadow-md shadow-gray-700">
        <font-awesome-icon icon="briefcase" class="mt-auto mb-auto mr-0 sm:mr-5 px-3 py-1 text-xl sm:text-2xl font-semibold"/>
        Proyectos
      </h1>
    </div>
    <div class="relative w-full h-auto sm:h-[85%] flex flex-col justify-center items-center mt-10 sm:mt-0">
      <div class="absolute z-10 -top-28 left-0 -rotate-45 opacity-70">
        <svg width="450" height="450" id="Capa_2" data-name="Capa 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 401.19 449.29">
          <g id="Capa_1-2" data-name="Capa 1">
            <g>
              <path fill="#f9fafb" :stroke="foco" :stroke-width="strokeWidth" d="m272.97,338.43c-3.15,6.37-2.8,9.1-3.64,13.07-.41,1.93-.66,3.57-1.29,7.07-.75,4.22-.88,5.12-.96,5.79-.62,4.84-.31,8.11-.36,8.84-.77,11.17-127.11,24.65-133.8-1.88-.83-3.3-.14-8.22-2.44-20.89-1.78-9.8-3.59-14.55-4.29-16.29-2.99-7.47-6.65-12.25-9.21-15.75,0,0,0,0,0,0-30.49-34.85-37.93-65.89-37.93-65.89-7.64-31.91,1.6-58.96,5.79-70.71,3.42-9.6,11.9-32.56,33.99-52.81,6.96-6.38,37.79-33.12,82.01-32.76,54.49.45,102,41.9,116.39,89.43,13.5,44.55-2.46,83.66-8.68,93.54-24.13,38.31-26.56,34.81-35.57,59.25"/>
              <path fill="#f9fafb" :stroke="foco" :stroke-width="strokeWidth" d="m265.83,391.21h-131.79c-.23-6.14-.45-12.29-.68-18.43,21.66-.29,43.62-.4,65.89-.34,22.81.07,45.3.32,67.46.76-.3,6-.59,12.01-.89,18.01Z"/>
              <path fill="#f9fafb" :stroke="foco" :stroke-width="strokeWidth" d="m265.23,404.61c-.56.56-1.27.7-1.56.75-6.95,1.24-121.14-.99-125.67-.77-.4.02-2.12.16-3.23-.9-1.1-1.06-1.03-2.76-1.01-3.59.1-3.14.11-7.09.08-11.99,44.04.23,88.08.46,132.11.7.16,6.72.15,11.72.07,13.55-.02.48-.08,1.52-.81,2.25Z"/>
              <path fill="#f9fafb" :stroke="foco" :stroke-width="strokeWidth" d="m243.57,419.95c-7.6,17.57-24.42,28.89-42.82,28.83-18.71-.06-35.68-11.87-43-29.92,28.6.36,57.21.72,85.81,1.09Z"/>
              <path fill="#f9fafb" :stroke="foco" :stroke-width="strokeWidth" d="m264.85,419.11c-.56.56-1.27.7-1.55.75-6.93,1.24-120.78-.99-125.3-.77-.4.02-2.11.16-3.22-.9-1.1-1.06-1.03-2.76-1-3.59.1-3.14.11-7.09.08-11.99,43.91.23,87.82.46,131.72.7.16,6.72.15,11.72.07,13.55-.02.48-.08,1.52-.8,2.25Z"/>
              <path fill="#f9fafb" :stroke="foco" :stroke-width="strokeWidth" d="m128.37,93.81c-.08.13-.21.34-.38.59-1.61,2.28-4.57,4.19-7.25,4.63-.22.04-.4.06-.48.06-.47-.65-.85-1.17-1.06-1.48-11.94-16.68-15.95-26.26-29.59-47.67-.19-.3-.34-.54-.42-.66.35-.57.7-1.01.95-1.3,2.08-2.39,4.93-3.34,5.71-3.6.53-.17.97-.27,1.25-.33l.27.43,1.32,2.07c.49.76,8.78,13.97,29.68,47.25Z"/>
              <path fill="#f9fafb" :stroke="foco" :stroke-width="strokeWidth" d="m344.86,233.52c-.07-.14-.17-.36-.28-.64-1.01-2.57-1.06-6.09-.07-8.6.08-.21.15-.37.19-.44.75-.05,1.35-.1,1.7-.12,19.18-1.27,28.78.42,52.56.24.33,0,.6,0,.73,0,.28.6.46,1.13.56,1.5.87,3.03.21,5.95.02,6.75-.13.54-.26.97-.36,1.24h-.48s-2.31.02-2.31.02c-.85,0-15.46.03-52.27.07Z"/>
              <path fill="#f9fafb" :stroke="foco" :stroke-width="strokeWidth" d="m75.56,289c.14.07.35.19.61.36,2.36,1.52,4.34,4.43,4.81,7.13.04.23.06.4.07.48-.67.51-1.2.91-1.51,1.15-17.12,12.86-26.97,17.37-48.95,32.16-.31.21-.55.37-.68.46-.59-.33-1.05-.66-1.35-.9-2.48-1.99-3.47-4.84-3.74-5.62-.18-.53-.29-.97-.35-1.25l.44-.3,2.13-1.44c.78-.53,14.34-9.54,48.52-32.24Z"/>
              <path fill="#f9fafb" :stroke="foco" :stroke-width="strokeWidth" d="m331.11,171.82c-.12-.08-.32-.22-.56-.41-2.15-1.71-3.99-4.72-4.46-7.36-.04-.22-.06-.39-.07-.47.59-.41,1.06-.74,1.34-.94,15.18-10.48,23.96-13.73,43.48-25.54.27-.16.49-.3.6-.36.54.38.96.75,1.23,1.01,2.27,2.18,3.22,5.01,3.47,5.79.17.53.28.96.34,1.24l-.39.24-1.89,1.15c-.69.42-12.74,7.59-43.09,25.66Z"/>
              <path fill="#f9fafb" :stroke="foco" :stroke-width="strokeWidth" d="m59.58,217.93c.07.14.17.36.28.65.99,2.6.93,6.12-.18,8.6-.09.21-.17.36-.21.44-.79.03-1.43.05-1.8.07-20.28.68-30.37-1.3-55.47-1.84-.35,0-.63-.01-.77-.02-.28-.61-.45-1.14-.55-1.51-.83-3.06-.04-5.96.18-6.75.15-.54.31-.96.41-1.22h.5s2.43.06,2.43.06c.89.02,16.32.44,55.18,1.53Z"/>
              <path fill="#f9fafb" :stroke="foco" :stroke-width="strokeWidth" d="m76.2,154.08c-.02.15-.06.4-.12.7-.59,2.76-2.65,5.62-5.05,6.96-.2.11-.36.19-.44.23-.73-.47-1.3-.84-1.64-1.06-18.48-12.04-26.35-19.94-48.44-35.98-.31-.22-.55-.4-.68-.49.09-.68.25-1.22.37-1.58,1-3.03,3.35-4.93,4-5.44.44-.35.82-.6,1.06-.75l.44.32,2.14,1.55c.79.57,14.3,10.51,48.35,35.55Z"/>
              <path fill="#f9fafb" :stroke="foco" :stroke-width="strokeWidth" d="m284.14,99.83c-.15-.03-.4-.08-.7-.16-2.72-.76-5.45-2.99-6.63-5.49-.1-.21-.17-.38-.2-.45.52-.7.94-1.26,1.18-1.59,13.41-17.91,21.9-25.38,39.57-46.69.25-.3.44-.54.54-.66.67.13,1.21.32,1.56.46,2.97,1.18,4.7,3.66,5.17,4.34.32.46.54.86.68,1.11l-.35.43-1.71,2.07c-.63.76-11.56,13.79-39.13,46.63Z"/>
              <path fill="#f9fafb" :stroke="foco" :stroke-width="strokeWidth" d="m318.78,292.57c.02-.15.07-.4.14-.7.66-2.74,2.78-5.55,5.21-6.85.2-.11.37-.18.44-.22.71.48,1.27.87,1.61,1.09,18.07,12.37,25.7,20.41,47.26,36.84.3.23.54.41.66.51-.11.67-.28,1.21-.41,1.57-1.08,3-3.46,4.85-4.12,5.35-.45.34-.83.58-1.08.73l-.43-.33-2.09-1.59c-.77-.58-13.96-10.76-47.19-36.4Z"/>
              <path fill="#f9fafb" :stroke="foco" :stroke-width="strokeWidth" d="m204.18,69.85c-.14.08-.36.21-.64.34-2.58,1.23-6.1,1.25-8.6,0-.21-.1-.37-.2-.44-.24-.05-.93-.08-1.68-.1-2.11-1.1-23.82.68-35.73.69-65.24,0-.41,0-.74,0-.91.6-.35,1.13-.56,1.5-.68,3.04-1.05,5.95-.2,6.75.05.54.16.96.34,1.23.45v3.45c0,1.05-.11,19.19-.39,64.89Z"/>
            </g>
          </g>
        </svg>
      </div>
      <div class="w-full h-full flex justify-center items-center z-30 mb-10 sm:mb-0">
        <div class="w-[94%] sm:w-[90%] h-screen sm:h-auto">
          <div data-hs-carousel='{ "loadingClasses": "opacity-0" }' class="relative">
            <div class="hs-carousel relative overflow-hidden w-full min-h-screen sm:min-h-96 h-auto sm:h-full bg-white bg-opacity-75 rounded-lg">
              <div class="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
                <div class="hs-carousel-slide" 
                  v-for="(object, index) in carousel"
                  :key="index"
                >
                  <div class="flex flex-col sm:flex-row justify-start h-full w-full px-7 sm:px-14 py-4 sm:py-10">
                    <div class="w-full sm:w-[65%] flex flex-col justify-center">
                      <h3 class="text-xl sm:text-2xl text-black font-semibold transition duration-700 mb-3">{{object.title}}</h3>
                      <div class="flex flex-col px-3">
                        <span class="text-justify text-sm sm:text-lg text-black mb-2 font-medium sm:font-normal">{{ object.description }}</span>
                        <span class="text-base sm:text-lg text-black font-semibold mb-1">Tecnologías empleadas:</span>
                        <div class="flex flex-col sm:flex-row w-full mb-2 space-y-1 sm:space-y-0">
                          <span v-for="(technology, index) in object.technologies" :key="index"
                            :class="technology.color"
                            @mouseover="changeColor(technology.color)"
                            class="flex mx-2 font-semibold text-sm sm:text-lg hover:cursor-pointer"
                          > {{ technology.name }}</span>
                        </div>
                        <div class="w-auto ml-auto mr-auto text-[11px] sm:text-sm bg-white border-[3px] border-black/50 px-2 py-0.5 sm:py-1 rounded-md">Pasa el mouse sobre la <b>tecnología</b> y cambia el color del foco.</div>
                        <span class="text-base sm:text-lg text-black font-semibold my-1">Repositorio:</span>
                        <a :href="object.repository" target="_blank" class="whitespace-normal flex text-sm sm:text-base ml-2 w-[90%] text-blue-500">
                          <span>{{ object.repositoryName }}</span>
                        </a>
                      </div>
                    </div>
                    <div class="flex flex-row sm:flex-col relative w-full sm:w-[35%] justify-end items-center mt-5 sm:mt-0">
                      <font-awesome-icon icon="magnifying-glass-plus" @click="openModal(object.img)" class="flex w-[5%] sm:w-auto sticky self-baseline sm:self-end top-0 left-0 ml-10 sm:ml-0 z-10 text-base sm:text-xl hover:cursor-pointer hover:text-lg hover:sm:text-2xl transition-all duration-300 ease-in-out" />
                      <img :src="getImgUrl(object.img)" class="absolute w-full h-full object-contain hidden sm:flex">
                      <div class="relative flex sm:hidden w-full h-14 overflow-hidden">
                        <img :src="getImgUrl(object.img)" class="absolute w-full h-full object-contain">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button type="button" class="hs-carousel-prev hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 rounded-s-lg dark:text-white dark:hover:bg-white/10">
              <span class="text-2xl" aria-hidden="true">
                <svg class="flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="m15 18-6-6 6-6"></path>
                </svg>
              </span>
              <span class="sr-only">Previous</span>
            </button>
            <button type="button" class="hs-carousel-next hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 rounded-e-lg dark:text-white dark:hover:bg-white/10">
              <span class="sr-only">Next</span>
              <span class="text-2xl" aria-hidden="true">
                <svg class="flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </span>
            </button>

            <div class="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 space-x-2 mt-2 sm:mt-10">
              <span
                v-for="index in carousel.length"
                :key="index"
                class="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer"
              ></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style setup>
.carousel {
  display: flex;
  transition: transform 0.3s ease;
}
</style>