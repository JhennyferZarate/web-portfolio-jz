<template>
  <div class="bg-black">
  <div class="sticky top-0 max-w-[1400px] mx-auto py-2 px-8 2xl:px-0 flex justify-between items-center">
    <div class="flex items-center cursor-pointer pt-2">
      <img src="../assets/img/logo.png" alt="logo" class="pr-6"/>
      <ul class="hidden lg:flex md:items-center">
        <li v-for="option in options" :key="option.name" :class="['md:mx-4']">
          <a :href="option.link" class="text-xl text-white font-regular">
            {{ option.name }}
          </a>
        </li>
      </ul>
    </div>

    <div class="flex">
       <div class="flex items-center cursor-pointer pt-2 pr-6">
      <ul class="flex items-center">
         <li>
        <button @click="changeLang('es')" :class="lang === 'es'?'bg-white p-1.5 text-black rounded':'text-white'" class="mr-2">ES</button>
      </li>
      <li>
        <button @click="changeLang('en')" :class="lang === 'en'?'bg-white p-1.5 text-black rounded':'text-white'">EN</button>
      </li>
      </ul>
    </div>

    <button
      class="lg:hidden flex flex-col justify-center items-center pr-0 space-y-1 border-0 focus:outline-none"
      @click="toggleMenu" aria-label="Toggle Menu">
      <div class="w-5 h-1 bg-white"></div>
      <div class="w-5 h-1 bg-white"></div>
      <div class="w-5 h-1 bg-white"></div>
    </button>
    </div>

    <div v-if="isMenuOpen" class="fixed inset-0 bg-black bg-opacity-50 z-10 transition-opacity duration-300"></div>

    <ul v-if="isMenuOpen"
      class="absolute w-[75%] h-screen top-0 right-0 bg-black lg:hidden flex flex-col items-center p-4 z-20 transition-transform duration-500 transform"
      :class="{'translate-x-0': isMenuOpen, '-translate-x-full': !isMenuOpen}">
      <div class="flex justify-between w-full px-4 pt-2">
        <span class="text-white font-medium text-xl">Jhennyfer Zárate</span>
        <button @click="isMenuOpen = false" class="text-white font-medium text-xl size-6">
          <img src="../assets/img/close.png" alt="logo" />
        </button>
      </div>
      <div class="w-full mt-4 border-t border-white opacity-30"></div>
      <div class="flex flex-col items-center w-full py-6">
        <li v-for="option in options" :key="option.name" class="py-5">
          <a :href="option.link" class="block text-white text-center text-base">{{ option.name }}</a>
        </li>
      </div>
      <div class="w-full mt-4 border-t border-white opacity-30"></div>
    </ul>
  </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import { t, setLanguage, getLanguage } from '../lang/i18n';

export default {
  setup() {
    const isMenuOpen = ref(false);
    const lang = ref(getLanguage());
        
    const changeLang = (newLang: string) => {
      setLanguage(newLang);
      lang.value = newLang;
      console.log("Language changed to:", newLang);
    };

    const options = [
      { name: "About me", link: "#" },
      { name: "Tech Skills", link: "#" },
      { name: "Projects", link: "#" },
      { name: "Contact", link: "#" },
    ];

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };

    return {
      options,
      isMenuOpen,
      toggleMenu,
      lang,
      t,
      changeLang,
    };
  },
};
</script>

<style scoped>
</style>
