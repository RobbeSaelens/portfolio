<template>
  <div class="mt-10 mx-auto my-auto px-6 max-w-screen-2xl">
    <div class="flex space-x-15 items-center justify-between mr-5% mt-10%">
      <div class="space-y-5 text-teal-800">
        <Instagram />
        <Facebook />
        <Linkedin />
        <Github />
      </div>
      <div class="space-y-8">
        <h1 class="text-7xl font-bold mb-5 text-dark-500">
          Robbe Saelens <span class="animate-waving-hand">👋</span>
        </h1>
        <div class="flex items-center text-teal-800 font-medium">
          <hr class="w-20 mr-5 h-1px bg-teal-900 border-0" />
          <h1 class="text-3xl">Next Web Developer</h1>
        </div>
        <div>
          <p class="text-teal-800 text-lg max-w-lg">
            I'm a full stack web developer based in Kortemark city, and i'm very passionate and
            dedicated to my work.
          </p>
        </div>
        <div>
          <button
            class="
              bg-teal-900
              py-5
              px-8
              rounded-2xl
              text-white
              font-medium
              text-xl
              flex
              items-center
            "
          >
            Say Hello <MessageCircle class="ml-2" />
          </button>
          <div class="flex items-center mt-20 space-x-2">
            <Mouse />
            <p class="flex text-lg text-black font-medium">Scroll down</p>
            <ArrowDown class="animate-pulse" />
          </div>
        </div>
      </div>
      <div>
        <img class="object-contain w-120" src="/pf.png" alt="Robbe Saelens" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import {
  Verified,
  Album,
  Instagram,
  Linkedin,
  Facebook,
  Github,
  MessageCircle,
  Mouse,
  ArrowDown,
} from 'lucide-vue-next'
export default {
  components: {
    Verified,
    Album,
    Instagram,
    Linkedin,
    Facebook,
    Github,
    Mouse,
    MessageCircle,
    ArrowDown,
  },
}
</script>

