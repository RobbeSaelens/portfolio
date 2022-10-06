<template>
  <header class="px-6 py-6">
    <nav class="mx-auto flex max-w-6xl items-center justify-between">
      <router-link class="outline-none focus-visible:ring-2 rounded-md" to="/">
        <h1 class="text-neutral-600 font-bold text-xl">Portfolio</h1>
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
  setup() {},
}
</script>