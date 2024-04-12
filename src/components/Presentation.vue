<template>
  <div class="section bg-transparent py-2">
    <div class="flex justify-between items-center">
      <div class="mr-4">
        <span class="text-2xl text-midnightBlue font-bold"
          >HELLO, MY NAME IS</span
        >
        <h1 class="text-7xl pt-8 text-midnightBlue font-bold">
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
        <div>
          <!--Icons-->
        </div>
        <div class="pt-8">
          <button
            class="border-4 border-cornflowerBlue bg-cornflowerBlue text-white shadow-md text-xl font-bold py-3 px-8 rounded-lg inline-block mr-4 hover:shadow-xl transition duration-300"
          >
            DOWNLOAD CV
          </button>

          <button
            class="border-4 border-cornflowerBlue bg-white text-cornflowerBlue text-xl font-bold py-3 px-8 rounded-lg inline-block shadow-md hover:shadow-xl transition duration-300"
          >
            CONTACT ME
          </button>
        </div>
      </div>
      <img src="../assets/me.png" class="w-full mt-[-180px] w-auto h-auto" />
    </div>
  </div>
  <div class="justify-center flex">
    <div class="flex pt-10">
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
