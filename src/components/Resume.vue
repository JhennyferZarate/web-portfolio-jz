import CommonEnglish from '../languages/en/index';
<template>
  <div class="section mt-16 pt-20 pb-20 h-auto bg-periwinkle">
    <h1 class="text-4xl font-bold text-white text-center">Resume</h1>
    <h2 class="text-3xl font-medium text-white text-center">
      - My <span class="text-gunmetal">Experience</span> -
    </h2>
    <div class="mt-10 flex justify-center items-center">
      <button
        class="p-0 w-10 h-10 mr-5 rounded-full bg-white shadow-md flex items-center justify-center hover:shadow-2xl transition duration-300"
        @click="prevExperience"
      >
        <span class="material-symbols-outlined text-gunmetal text-xl mr-[-7px]">
          arrow_back_ios
        </span>
      </button>
      <div class="cards">
        <div
          v-if="experiences.length > 0"
          :key="experiences[currentIndex].company"
          class="flex justify-center items-center"
        >
          <div
            class="w-[700px] bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
          >
            <div
              class="flex justify-between text-midnightBlue font-bold text-sm"
            >
              <span>{{ experiences[currentIndex].period }}</span>
              <span>{{ experiences[currentIndex].company }}</span>
            </div>
            <div class="mt-3 flex items-center">
              <h3 class="font-bold text-2xl">
                {{ experiences[currentIndex].title }}
              </h3>
              <svg class="flex-grow h-5 ml-4 mt-2">
                <rect width="100%" height="5" rx="5" ry="5" fill="#5671A6" />
              </svg>
            </div>
            <div v-if="experiences[currentIndex].responsibilities.length > 0">
              <template
                v-if="experiences[currentIndex].responsibilities.length > 1"
              >
                <ol class="mt-3 list-disc list-inside">
                  <li
                    v-for="(responsibility, index) in experiences[currentIndex]
                      .responsibilities"
                    :key="index"
                    class="text-gunmetal"
                  >
                    <span class="text-midnightBlue">{{ responsibility }}</span>
                  </li>
                </ol>
              </template>
              <p v-else class="text-midnightBlue">
                {{ experiences[currentIndex].responsibilities[0] }}
              </p>
            </div>
            <p v-else class="text-midnightBlue">No responsibilities listed.</p>
          </div>
        </div>
      </div>
      <button
        class="p-0 w-10 h-10 ml-5 rounded-full bg-white shadow-md flex items-center justify-center hover:shadow-2xl transition duration-300"
        @click="nextExperience"
      >
        <span class="material-symbols-outlined text-gunmetal text-xl">
          arrow_forward_ios
        </span>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { CommonEnglish } from "../languages/en/common";

export default {
  data() {
    return {
      experiences: CommonEnglish.experiences,
      currentIndex: CommonEnglish.experiences.length - 1,
    };
  },
  methods: {
    nextExperience() {
      if (this.currentIndex < this.experiences.length - 1) {
        this.currentIndex++;
      }
    },
    prevExperience() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      }
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
