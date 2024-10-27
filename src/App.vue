<script setup lang="ts">
  import TheNavigation from './components/TheNavigation.vue'
</script>

<template>
  <header>
    <TheNavigation />
  </header>
  <main class="px-2">
    <RouterView />
  </main>
</template>
