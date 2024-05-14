<template>
  <div class="section bg-transparent pt-16 pb-20">
    <h1 class="text-4xl font-bold text-gunmetal text-center font-karma">
      Tech Skills
    </h1>
    <h2 class="text-3xl font-medium text-gunmetal text-center font-karma">
      - My <span class="text-cornflowerBlue">Talent</span> -
    </h2>
    <div class="justify-center items-center">
      <ol class="flex flex-wrap justify-center list-none mt-6 mb-4">
        <li
          v-for="(section, index) in sections"
          :key="section.name"
          :class="{
            'mr-12': index !== sections.length - 1,
            'text-white bg-gunmetal pt-1.5 pb-1 pl-3 pr-3 rounded-md':
              showingSkills === section.name,
            'text-gunmetal pt-1.5 pb-1 pl-3 pr-3 rounded-md shadow-sm':
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
                :class="[
                  'bg-steelBlue',
                  'w-[120px]',
                  'h-[150px]',
                  'rounded-md',
                  'flex',
                  'flex-col',
                  'justify-center',
                  'items-center',
                ]"
              >
                <div
                  class="bg-white w-[90px] h-[90px] flex justify-center items-center rounded-md mt-1"
                >
                  <img
                    :src="'/src/assets/img/skills/' + skill.image"
                    :alt="skill.name"
                    :width="skill.width"
                    class="align-center"
                  />
                </div>
                <p class="text-center text-white font-normal mt-3">
                  {{ skill.name }}
                </p>
              </div>
            </li>
          </ul>
        </li>
      </ol>
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
.section {
  padding-left: 250px;
  padding-right: 250px;
}
</style>
