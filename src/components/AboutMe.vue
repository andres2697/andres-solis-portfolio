<script setup>
  import { ref, onMounted, onUnmounted } from 'vue';

  const aboutMePar1 = 'oy un desarrollador fullstack con 3 años de experiencia en el campo de TI. Me considero una persona proactiva, puntual, responsable y solidaria. Me gusta tomar retos, adquirir y reforzar conocimientos en áreas tecnológicas para desarrollarme profesionalmente y optimizar mis resultados en el campo laboral.'
  const aboutMePar2 = 'os proyectos que he desarrollado tienen especial atención a la experiencia de usuario (UX) para que las interfaces sean intuitivas e interactivas. De igual manera, se prioriza que la página tenga integrado un diseño responsivo que brinde la facilidad de visualizarla desde cualquier dispositivo para mayor comodidad.'
  const aboutMePar3 = 'xperto en brindar soluciones digitales para el sector empresarial y proyectos personalizados.'
  
  const configs = {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 448 512',
    size: 20,
    fill: '#ffffff'
  }
  const redesSociales = [
    {
      "name": "LinkedIn",
      "link": "https://www.linkedin.com/in/jose-andres-solis-sotelo-26bb791a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      "class": "bg-[#0A66C2]",
      "pathD": "M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"
    },
    {
      "name": "Instagram",
      "link": "https://www.instagram.com/andres_solis_s/",
      "class": "bg-gradient-to-br from-purple-500 to-pink-500",
      "pathD": "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
    },
    {
      "name": "Facebook",
      "link": "https://www.facebook.com/jose.a.solis.737/",
      "class": "bg-[#3b5998]",
      "pathD": "M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"
    },
    {
      "name": "Github",
      "link": "https://github.com/andres2697",
      "class": "bg-black",
      "pathD": "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
    }
  ]
  const aboutMe = ref(null)
  const socialNetworks = ref(null)
  const animatePar = ref(false)
  const animateSN = ref(false)
  const handleScroll = () => {
    // Verificar si el componente es visible en la pantalla
    if (isAboutMeInViewport()) {
      animatePar.value = true
    }
    if(isSNInViewport()) {
      animateSN.value = true
      // window.removeEventListener('scroll', handleScroll)
    }
  }
  const isAboutMeInViewport = () => {
    const rect = aboutMe.value.getBoundingClientRect()
    return (
      rect.top >= 0 &&
      rect.bottom <= window.innerHeight
    )
  }
  const isSNInViewport = () => {
    const rect = socialNetworks.value.getBoundingClientRect()
    return (
      rect.top >= 0 &&
      rect.bottom <= window.innerHeight
    )
  }
  // Añadir un evento de escucha al scroll cuando el componente se monta
  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })
  // Remover el evento de escucha al scroll cuando el componente se desmonta
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
  const count = ref(0)
</script>

<template>
  <div class="w-full h-auto sm:h-screen flex flex-col justify-between align-middle bg bg-gradient-to-l from-green-600 via-green-500 to-green-400">
    <div class="w-full h-32 sm:h-[15%] flex flex-col justify-center items-center text-center p-5 rounded-md mt-0 sm:mt-5">
      <h1 class="w-[60%] flex items-center justify-center py-2 text-black text-2xl sm:text-4xl font-bold bg-white bg-opacity-90 rounded-md shadow-md shadow-green-600">
        <font-awesome-icon icon="info" class="mt-auto mb-auto mr-5 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border-black border-2 sm:border-4 text-lg sm:text-2xl font-semibold"/>
        A cerca de mi
      </h1>
    </div>
    <div class="w-full h-auto sm:h-[85%] flex justify-center items-center">
      <div class="w-full h-[90%] flex flex-col sm:flex-row mx-8">
        <div class="w-full sm:w-[25%] flex flex-col justify-center text-center items-center mb-5 ml-0 sm:ml-5 sm:mb-0 bg-white bg-opacity-90 rounded-lg shadow-lg shadow-green-600">
          <div class="flex justify-center items-center rounded-[50%] w-32 h-32 mt-4 sm:w-52 sm:h-52 sm:mt-0 overflow-hidden mb-2 sm:mb-6">
            <img class="w-full h-full object-cover" src="../assets/foto-perfil-linkedin.jpeg">
          </div>
          <h3 class="text-black text-xl sm:text-2xl font-semibold">José Andrés Solís Sotelo</h3>
          <h3 class="text-black text-base sm:text-lg font-semibold pb-2 sm:pb-0">Ingeniero en Computación</h3>
        </div>
        <div class="w-full sm:w-[75%] mb-10 sm:mb-0  ml-0 sm:ml-8 space-y-2 flex flex-col bg-white bg-opacity-90 rounded-lg shadow-lg shadow-green-600 px-7 py-2 sm:px-10 sm:py-8">
          <p class="w-full text-justify text-base sm:text-lg translate -translate-x-5 opacity-0 duration-2000 ease-out"
            :class="animatePar ? 'translate-x-0 opacity-100' : ''"
          >
            <span ref="aboutMe" class="text-2xl font-bold mr-0.5">S</span>
            <span>{{ aboutMePar1 }}</span>
          </p>
          <p class="w-[80%] sm:w-full text-justify text-base sm:text-lg translate translate-x-5 opacity-0 duration-2000 ease-out"
            :class="animatePar ? '-translate-x-10 sm:-translate-x-0 opacity-100' : ''"
          >
            <span class="text-2xl font-bold mr-0.5">L</span><span>{{ aboutMePar2 }}</span>
          </p>
          <p class="w-full text-justify text-base sm:text-lg translate -translate-x-5 opacity-0 duration-2000 ease-out"
            :class="animatePar ? 'translate-x-0 opacity-100' : ''"
          >
            <span class="text-2xl font-bold mr-0.5">E</span><span>{{ aboutMePar3 }}</span>
          </p>
          <div ref="socialNetworks" class="w-full flex flex-col justify-center text-center">
            <h3 class="w-fit text-xl font-semibold self-center border-b-2 border-black mt-5">Redes sociales</h3>
            <div class="w-full flex justify-center items-center mt-5 mx-0 space-x-10 transition ease-in duration-1000"
              :class="animateSN ? '-translate-y-0 opacity-100' : 'translate-y-5 opacity-0'"
            >
              <a
                v-for="(socialNetwork, index) in redesSociales" :key="index" 
                :href="socialNetwork.link"
                target="_blank"
                class="w-fit cursor-pointer transition ease-in-out hover:scale-125"
              >
                <div class="p-2 h-fit w-fit rounded-xl" :class="socialNetwork.class">
                  <svg :xmlns="configs.xmlns" :viewBox="configs.viewBox" :width="configs.size" :height="configs.size" :class="socialNetwork.name === 'Facebook' ? 'ml-1' : ''">
                    <path :d="socialNetwork.pathD" :fill="configs.fill"/>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
