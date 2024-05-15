<template>
  <div class="section flex max-w-[1400px] mx-auto mt-8 justify-between">
    <div class="w-auto h-[720px] bg-black rounded-[40px]">
      <img
        src="../assets/img/presentation/me.png"
        alt="personal"
        class="w-full h-full object-cover rounded-[40px]"
      />
    </div>
    <div
      class="info w-[1000px] h-[720px] rounded-[40px] p-16 flex flex-col justify-between ml-8"
    >
      <div>
        <span class="text-2xl text-white font-light">Hello, my name is</span>
        <h1 class="text-6xl pt-8 text-white font-karma font-bold">
          Jhennyfer Zárate
        </h1>
        <h2 class="text-4xl pt-2 text-white font-medium">
          Fullstack Developer
        </h2>
        <p class="text-xl pt-8 text-white font-light">
          Bachelor in Software Engineering from National Major University of San
          Marcos (Lima, Peru). Specialized in web design, automations, design
          and project management, easy scalability and excellent user
          experience.
        </p>
        <p class="text-2xl text-white font-semibold pt-36 text-end">
          +{{ years }} years of experience
        </p>
      </div>
      <div class="flex justify-between">
        <button
          class="bg-[#191A2F] text-white text-xl font-bold pt-3 pb-2 pr-8 pl-8 rounded-[20px] inline-flex items-center mr-4 shadow-lg hover:shadow-2xl transition duration-300"
        >
          Contact me
        </button>
        <div class="flex">
          <div class="bg-white rounded-full p-2.5 mr-2">
            <a
              href="https://github.com/JhennyferZarate"
              target="_blank"
              class="m-0 flex justify-center items-center"
            >
              <img src="../assets/svg/social/github.svg" alt="github" />
            </a>
          </div>
          <div class="bg-white rounded-full p-2.5">
            <a
              href="https://www.linkedin.com/in/jhennyferzarate/"
              target="_blank"
              class="m-0 flex justify-center items-center"
            >
              <img src="../assets/svg/social/linkedln.svg" alt="linkedln" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
const startDate = new Date("2021-05-01");
const today = new Date();
const differenceInMilliseconds = today.getTime() - startDate.getTime();
const differenceInYears =
  differenceInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
const years = Math.floor(differenceInYears);

export default {
  data() {
    return {
      years,
    };
  },
};
</script>

<style scoped>
.info {
  background-image: linear-gradient(
    to top right,
    #4f72be,
    #354c89,
    #212b62,
    #161f4a
  );
}
</style>
