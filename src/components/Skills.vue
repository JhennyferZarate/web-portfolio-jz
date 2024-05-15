<template>
  <div class="flex max-w-[1400px] mx-auto mt-8 justify-between">
    <div class="info w-[1200px] h-auto rounded-[40px] p-16 mr-8">
      <h1 class="text-4xl font-bold text-white font-karma">Tech Skills</h1>
      <ol class="flex flex-wrap justify-center list-none mt-4 mb-4">
        <li
          v-for="(section, index) in sections"
          :key="section.name"
          :class="{
            'mr-2': index !== sections.length - 1,
            'text-white bg-[#191A2F] pt-2 pb-1.5 pl-4 pr-4 rounded-[20px]':
              showingSkills === section.name,
            'text-white pt-1.5 pb-1 pl-3 pr-3 rounded-md shadow-sm':
              showingSkills !== section.name,
          }"
        >
          <span
            @click="showSkills(section.name)"
            class="font-bold text-center cursor-pointer text-lg"
          >
            {{ section.name }}
          </span>
        </li>
      </ol>
      <ol class="flex flex-wrap justify-center list-none">
        <li v-for="section in sections" :key="section.name" class="mt-3 mb-4">
          <ul
            v-if="showingSkills === section.name"
            class="flex flex-wrap justify-center"
          >
            <li
              v-for="(skill, index) in section.skills"
              :key="skill.name"
              :class="{ 'mr-6': index != section.skills.length - 1 }"
            >
              <div
                class="bg-white w-[90px] h-[90px] flex justify-center items-center rounded-[20px] mt-1"
              >
                <img
                  :src="'/src/assets/img/skills/' + skill.image"
                  :alt="skill.name"
                  :width="skill.width"
                  class="align-center"
                />
              </div>
            </li>
          </ul>
        </li>
      </ol>
    </div>
    <div class="w-[25%] h-auto rounded-[40px]">
      <img
        src="../assets/img/presentation/random.jpg"
        alt="personal"
        class="w-full h-full object-cover rounded-[40px]"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { skills } from "../data/skills";
import { Section } from "../interfaces/skills";

export default {
  data() {
    return {
      showingSkills: "Frontend",
      sections: skills.sections as Section[],
    };
  },
  methods: {
    showSkills(sectionName: string) {
      this.showingSkills = sectionName;
    },
  },
};
</script>

<style scoped>
.info {
  background-image: linear-gradient(to bottom left, #292c50, #122652);
}
</style>
