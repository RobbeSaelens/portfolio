<template>
  <div class="pb-30 h-screen overflow-y-auto fade-out">
    <div class="mx-auto max-w-screen-xl pt-10">
      <div class="text-center">
        <h1 class="mx-5 mb-10 text-6xl font-bold text-teal-700 md:text-8xl">Netflix project</h1>
        <div
          class="md:flex space-y-5 md:space-y-0 justify-center md:space-x-8 pt-5 text-lg font-medium text-teal-500"
        >
          <p>Azure Cognitive Search & Amazon OpenSearch</p>
          <p>Vue.js & TailwindCSS</p>
          <p>Unstructured data</p>
        </div>
      </div>
      <div>
        <img class="scale hidden md:block mx-auto" src="/ResearchAzureMockup.png" />
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
                This is a project that I created as part of my bachelor thesis on integrating Search
                as a Service with unstructured data. The project was built using Vue.js. For
                unstructured data I utilized a text file containing over 8000 movies and TV shows.
              </p>
            </div>
            <div>
              <h1 class="text-xl font-bold text-teal-800">Languages</h1>
              <p class="text-teal-500 font-medium">
                Amazon OpenSearch, Azure Cognitive Search, Vue.js, TailwindCSS
              </p>
            </div>
            <div>
              <h1 class="text-xl font-bold text-teal-800">Tools</h1>
              <p>Visual Studio Code, Azure Portal, Amazon AWS, Adobe XD</p>
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
