<template>
  <div class="px-6">
    <div class="pt-10 pb-5">
      <h1 class="font-bold text-5xl text-neutral-100">Profile</h1>
      <hr class="bg-teal-600 mt-4 w-45 rounded-md border-1" />
    </div>
    <div class="lg:flex md:space-x-0 lg:space-x-15">
      <div class="xl:w-1/4 lg:w-1/3">
        <img
          class="rounded-lg shadow-md object-contain lg:block md:hidden"
          src="/pf.jpg"
          alt="My profile picture"
        />
      </div>
      <div>
        <div class="space-y-3">
          <p class="text-neutral-300 lg:text-6xl font-extrabold md:text-3xl">
            Hi, my name is Robbe Saelens.
          </p>
          <p class="text-neutral-300 lg:text-6xl md:text-3xl font-extrabold">
            I'm a
            <span class="text-teal-800 animate-pulse">next web developer!</span>
          </p>
        </div>
        <div class="lg:w-3/5 md:w-full space-y-3 lg:text-lg lg:mt-5 sm:text-sm">
          <p class="text-neutral-300">
            I'm a student in Howest Kortrijk where I follow the bachelor's degree
            <a class="underline hover:text-teal-600" href="https://mct.be/">
              Multimedia & Creative Technologies (MCT).</a
            >
          </p>
          <p class="text-neutral-300">
            In addition to my passion for web & app, I am also a certified teacher in the equestrian
            sport.
          </p>
        </div>
        <div class="lg:mt-15 sm:mt-5 pb-15">
          <p class="text-neutral-100 font-bold lg:text-3xl md:text-2xl sm:mb-1 lg:mb-5 flex">
            I love to make projects with
            <Verified class="ml-2 text-neutral-100" />
          </p>

          <div class="mx-auto max-w-7xl rounded-lg">
            <ul class="font-medium tracking-wide flex flex-wrap -mx-3 mt-6 text-md text-teal-600">
              <li class="mx-3 mb-1">Vue.js</li>
              <li class="mx-3 mb-1">CSS</li>
              <li class="mx-3 mb-1">React</li>
              <li class="mx-3 mb-1">HTML</li>
              <li class="mx-3 mb-1">MongoDB</li>
              <li class="mx-3 mb-1">NestJS</li>
              <li class="mx-3 mb-1">TailwindCSS</li>
              <li class="mx-3 mb-1">Javascript</li>
              <li class="mx-3 mb-1">.NET</li>
              <li class="mx-3 mb-1">Gatsby</li>
              <li class="mx-3 mb-1">Typescript</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Verified } from 'lucide-vue-next'
export default {
  components: {
    Verified,
  },
}
</script>

