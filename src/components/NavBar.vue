<template>
  <div
    class="bg-transparent max-w-[1400px] mx-auto py-4 flex justify-between items-center"
  >
    <div class="flex items-center cursor-pointer">
      <img src="../assets/img/logo.png" alt="logo" />
    </div>
    <ul class="md:flex md:items-center">
      <li
        v-for="(option, index) in options"
        :key="option.name"
        :class="['md:mx-4', index < options.length - 1 ? '' : 'md:mr-0']"
      >
        <a
          :href="option.link"
          class="text-xl text-white font-regular hover:font-semibold"
        >
          {{ option.name }}
        </a>
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
      { name: "Tech Skills", link: "#" },
      { name: "Projects", link: "#" },
      { name: "Contact", link: "#" },
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
          paddingRight: `${padding}px`,
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

<style scoped></style>
