<template>
  <div class="pb-30 h-screen overflow-y-auto fade-out">
    <div class="mx-auto max-w-screen-xl pt-10">
      <div class="text-center">
        <h1 class="mx-5 mb-10 text-6xl font-bold text-teal-700 md:text-8xl">VitalCities project</h1>
        <div
          class="sm:flex space-y-5 sm:space-y-0 justify-center sm:space-x-8 pt-5 text-lg font-medium text-teal-500"
        >
          <p>Gatsby</p>
          <p>Typescript</p>
          <p>Netlify (CMS)</p>
          <p>LottieFiles</p>
          <p>After Effects</p>
        </div>
      </div>
      <div>
        <img class="scale m-10 md:px-10 hidden md:block mx-auto" src="/VitalCitiesMockup.png" />
        <img
          class="scale my-5 h-120 block mx-auto md:hidden"
          src="/AzureIphone.png"
          alt="Iphone mockup"
        />
      </div>
      <div>
        <div class="flex justify-between m-10">
          <div class="space-y-8 mr-10">
            <div class="md:w-2/3">
              <h1 class="text-5xl font-bold text-teal-800 mb-10">Project Overview</h1>
              <h1 class="text-xl font-bold text-teal-800">About</h1>
              <p>
                This is a group project that i created for school. As a group we had to create a
                website for Vital Cities. Vital Cities is a company that helps cities to become more
                sustainable. We made the website very interactive and we used a lot of animations.
              </p>
            </div>
            <div>
              <h1 class="text-xl font-bold text-teal-800">Languages</h1>
              <p class="text-teal-500 font-medium">Gatsby, Typescript, css</p>
            </div>
            <div>
              <h1 class="text-xl font-bold text-teal-800">Tools</h1>
              <p>Visual Studio Code, Gatsby, Adobe After Effects, Adobe XD, LottieFiles</p>
            </div>
          </div>
          <div>
            <img class="scale w-150 hidden md:block" src="/AzureIphone.png" alt="Iphone mockup" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Briefcase, GraduationCap, ArrowRight } from 'lucide-vue-next'
export default {
  components: {
    Briefcase,
    GraduationCap,
    ArrowRight,
  },
  methods: {
    mailto() {
      window.location.href = 'mailto:robbe.saelens@telenet.be'
    },
  },
}
</script>

<style>
.scale {
  transition: transform 0.5s ease-in-out;
}

.scale:hover {
  transform: scale(1.02);
}

@media (min-width: 768px) {
  .scale {
    transition: transform 0.3s ease-in-out;
  }

  .scale:hover {
    transform: scale(1.02);
  }
}
</style>
