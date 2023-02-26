<template>
  <header class="my-6">
    <nav class="mx-auto px-6 sm:flex max-w-screen-2xl justify-between items-center">
      <router-link class="outline-none focus-visible:ring-2xl rounded-md" to="/">
        <h1 class="text-teal-800 font-bold text-xl">Saelens</h1>
      </router-link>
      <AppNavigation />
    </nav>
  </header>
</template>

<script lang="ts">
import AppNavigation from '../generic/AppNavigation.vue'
export default {
  components: {
    AppNavigation,
  },
}
</script>