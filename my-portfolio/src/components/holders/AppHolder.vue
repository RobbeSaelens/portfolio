<template>
  <div class="grid grid-rows-[auto_1fr_auto] min-h-screen h-screen">
    <AppHeader />
    <router-view class="overflow y-auto"></router-view>
    <AppFooter />
  </div>
</template>

<script lang="ts">
import AppFooter from '../../screens/generic/AppFooter.vue'

export default {
  components: {
    AppFooter,
  },
}
</script>