<template>
  <div
    id="navbar"
    class="navbar bg-transparent py-2 flex justify-between items-center"
    :class="{
      'navbar-scrolled': isScrolled,
      //'navbar-small': screenWidth < 1300,
    }"
    :style="dynamicPadding"
  >
    <div class="flex items-center cursor-pointer">
      <img src="../assets/logo.png" />
    </div>
    <ul class="md:flex md:items-center">
      <li class="md:mx-4" v-for="option in options" :key="option.name">
        <a
          :href="option.link"
          class="text-xl text-midnightBlue font-regular hover:text-gunmetal hover:underline hover:underline-steelBlue hover:underline-dashed hover:underline-h-8"
          >{{ option.name }}</a
        >
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

export default {
  setup() {
    const isScrolled = ref(false);

    const options = [
      { name: "About me", link: "#" },
      { name: "Resume", link: "#" },
      { name: "Tech Skills", link: "#" },
      { name: "Portfolio", link: "#" },
      { name: "What I do", link: "#" },
    ];

    const handleScroll = () => {
      isScrolled.value = window.scrollY > 0;
    };

    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });

    return { options, isScrolled };
  },
  data() {
    return {
      isScrolled: false,
      screenWidth: window.innerWidth,
    };
  },
  computed: {
    dynamicPadding() {
      if (this.screenWidth >= 1420) {
        const padding = (this.screenWidth - 1420) / 2;
        return {
          paddingLeft: `${padding}px`,
          paddingRight: `${padding + 650}px`,
        };
      } else {
        return {
          paddingLeft: "40px",
          paddingRight: "40px",
        };
      }
    },
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.handleResize);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 0;
    },
    handleResize() {
      this.screenWidth = window.innerWidth;
    },
  },
};
</script>

<style scoped>
.navbar {
  transition: background-color 0.3s ease-in-out;
}

.navbar-scrolled {
  background-color: white;
  padding-left: 400px;
  padding-right: 400px;
}
</style>
