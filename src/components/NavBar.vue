<template>
  <div :class="{ 'bg-transparent': !isScrolled, 'bg-custom-transparent': isScrolled }"
    class="sticky top-0 bg-transparent max-w-[1400px] mx-auto py-4 flex justify-between items-center"
    :style="dynamicPadding">
    <div class="flex items-center cursor-pointer pt-2" :style="dynamicPadding">
      <img src="../assets/img/logo.png" alt="logo" />
    </div>

    <button
      class="lg:hidden flex flex-col justify-center items-center space-y-1 bg-transparent border-0 focus:outline-none"
      @click="toggleMenu" aria-label="Toggle Menu" :style="dynamicPadding">
      <div class="w-5 h-1 bg-white"></div>
      <div class="w-5 h-1 bg-white"></div>
      <div class="w-5 h-1 bg-white"></div>
    </button>

    <div v-if="isMenuOpen" class="fixed inset-0 bg-black bg-opacity-50 z-10 transition-opacity duration-300"></div>

    <ul v-if="isMenuOpen"
      class="absolute w-[75%] h-screen top-0 right-0 bg-[#3a4b85] lg:hidden flex flex-col items-center p-4 z-20 transition-transform duration-500 transform"
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

    <ul class="hidden lg:flex md:items-center">
      <li v-for="(option, index) in options" :key="option.name" :class="['md:mx-4']">
        <a :href="option.link" class="text-xl text-white font-regular hover:font-semibold">
          {{ option.name }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted, computed } from 'vue';

export default {
  setup() {
    const isScrolled = ref(false);
    const screenWidth = ref(window.innerWidth);
    const isMenuOpen = ref(false);

    const options = [
      { name: "About me", link: "#" },
      { name: "Tech Skills", link: "#" },
      { name: "Projects", link: "#" },
      { name: "Contact", link: "#" },
    ];

    const handleScroll = () => {
      isScrolled.value = window.scrollY > 0;
    };

    const dynamicPadding = computed(() => {
      const minWidth = 350;
      const maxPadding = 20;
      const fixedPadding = 20;

      let padding;

      if (screenWidth.value >= minWidth) {
        padding = Math.min(Math.max((screenWidth.value - 1000) / 2, 20), maxPadding);
      } else {
        padding = fixedPadding;
      }

      return {
        paddingLeft: `${padding}px`,
        paddingRight: `${padding}px`,
      };
    });

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };

    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
      window.addEventListener("resize", handleResize);
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    });

    return {
      options,
      isScrolled,
      dynamicPadding,
      isMenuOpen,
      toggleMenu,
    };
  },
};
</script>

<style scoped>
.bg-custom-transparent {
  background-color: rgba(25, 26, 47, 0.85);
}

@media (min-width: 1024px) {
  .lg\:hidden {
    display: none;
  }

  .lg\:flex {
    display: flex;
  }
}
</style>
