<template>
  <div class=" flex items-center">
    <router-link class="focus-visible:ring-2xl rounded-md outline-none" to="/">
      <a href="/" @click="closeMenu">
        <img src="/Logo.svg" alt="Logo" class="scale h-5 customFill" />
      </a>
    </router-link>
    <button @click="toggleNav" data-collapse-toggle="navbar-default" type="button"
      class="absolute right-6 rounded-lg p-2 text-sm text-teal-600 focus:outline-none focus:ring-2 focus:ring-gray-600 sm:hidden"
      aria-controls="navbar-default" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <svg class="h-6 w-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
          clip-rule="evenodd"></path>
      </svg>
    </button>
  </div>
  <div :class="showMenu ? 'block' : 'hidden'" class="w-full items-center border-0 sm:block sm:w-auto" id="navbar-default">
    <ul
      class="mt-4 justify-end flex items-center space-x-5 rounded-lg pt-4 font-medium sm:mt-0 sm:flex-row sm:space-x-8 sm:space-y-0 sm:border-0 sm:text-sm">
      <li :class="{ 'sm:active-link': $route.path === '/projects' }">
        <router-link
          class="active flex text-lg text-teal-700 hover:text-teal-900 sm:border-0 sm:p-0 dark:text-teal-500 dark:hover:text-teal-300"
          to="/projects" @click="closeMenu">
          Projects</router-link>
      </li>

      <li :class="{ 'sm:active-link ': $route.path === '/contact' }">
        <router-link
          class="active flex text-lg text-teal-700 hover:text-teal-900 sm:border-0 sm:p-0 dark:text-teal-500 dark:hover:text-teal-300"
          to="/contact" @click="closeMenu">
          About me</router-link>
      </li>
      <li
        class="hidden cursor-pointer text-teal-700 hover:text-teal-900 sm:border-0 sm:p-0 dark:text-teal-300 dark:hover:text-teal-500 sm:block">
        <SunMoon class="h-6 w-6" @click="toggleTheme" />
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from 'vue'
import { SunMoon, Moon } from 'lucide-vue-next'
export default {
  components: {
    SunMoon,
    Moon,
  },
  setup() {
    // toggleNav and showMenu
    const showMenu = ref(false)
    const toggleNav = () => {
      showMenu.value = !showMenu.value
    }
    // close the menu when a link is clicked
    const closeMenu = () => {
      showMenu.value = false
    }

    const toggleTheme = () => {
      if (localStorage.theme === 'dark') {
        localStorage.theme = 'light'
        document.documentElement.classList.remove('dark')
      } else {
        localStorage.theme = 'dark'
        document.documentElement.classList.add('dark')
      }
      console.log(localStorage.theme)
    }

    return {
      showMenu,
      toggleNav,
      closeMenu,
      SunMoon,
      toggleTheme,
      Moon,
    }
  },
}
</script>
<style>
.scale {
  transform: scale(1);
}

.scale:hover {
  transform: scale(1.1);
}

@media (min-width: 768px) {
  .scale {
    transition: transform 0.5s ease-in-out;
  }

  .scale:hover {
    transform: scale(1.05);
  }
}

.active:focus {
  padding: 0.3rem 0.6rem;
  border-radius: 5rem;
  background-color: teal;
  color: white;
  opacity: 0.6;
  transition: background-color 0.5s ease-in-out;
}
</style>