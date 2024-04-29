<template>
  <div class="section bg-transparent pt-8">
    <div class="flex justify-between items-center">
      <div class="mr-4">
        <span class="text-2xl text-midnightBlue font-bold"
          >HELLO, MY NAME IS</span
        >
        <h1 class="text-7xl pt-8 text-midnightBlue font-karma font-bold">
          Jhennyfer Zárate
        </h1>
        <h2 class="text-4xl pt-2 text-gunmetal font-bold">
          Fullstack Developer & Product Manager
        </h2>
        <svg class="w-[350px] h-[5px]">
          <rect width="350" height="5" rx="5" ry="5" fill="#5671A6" />
        </svg>
        <p class="text-2xl pt-8 text-midnightBlue font-regular">
          Bachelor in Software Engineering from National Major University of San
          Marcos (Lima, Peru). Specialized in web design, automations, design
          and project management, easy scalability and excellent user
          experience.
        </p>
        <div class="flex mt-5 mb-16">
          <a
            href="https://github.com/JhennyferZarate"
            target="_blank"
            class="mr-3"
          >
            <img src="../assets/github.svg" />
          </a>
          <a
            href="https://www.linkedin.com/in/jhennyferzarate/"
            target="_blank"
            class="mr-3"
          >
            <img src="../assets/linkedln.svg" />
          </a>
        </div>
        <button
          class="border-4 border-cornflowerBlue bg-cornflowerBlue text-white shadow-lg text-xl font-bold pt-4 pb-3 pr-5 pl-6 rounded-lg inline-flex items-center mr-4 hover:shadow-2xl transition duration-300"
        >
          DOWNLOAD CV
          <span
            class="material-symbols-outlined text-white text-[30px] ml-2 mb-[6px]"
          >
            download
          </span>
        </button>
        <button
          class="border-4 border-cornflowerBlue bg-white text-cornflowerBlue text-xl font-bold pt-4 pb-3 pr-5 pl-6 rounded-lg inline-flex items-center mr-4 shadow-lg hover:shadow-2xl transition duration-300"
        >
          CONTACT ME
          <span
            class="material-symbols-outlined text-cornflowerBlue text-[30px] ml-2 mb-[7px]"
            >sentiment_very_satisfied</span
          >
        </button>
      </div>
      <img
        src="../assets/me.png"
        alt="photo"
        class="w-full mt-[-200px] w-auto h-auto"
      />
    </div>
  </div>
  <div class="justify-center flex mt-14">
    <div class="flex">
      <span class="text-6xl font-bold text-gunmetal pr-3">+2</span>
      <div>
        <span class="text-3xl font-bold">years experience</span>
        <svg class="w-[245px] h-[5px]">
          <rect width="245" height="5" rx="5" ry="5" fill="#5671A6" />
        </svg>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style scoped>
.section {
  padding-left: 250px;
  padding-right: 250px;
}
</style>
