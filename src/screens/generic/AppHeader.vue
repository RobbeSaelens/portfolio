<template>
  <header class="my-6">
    <nav class="mx-auto max-w-screen-2xl items-center justify-between px-6 sm:flex">
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