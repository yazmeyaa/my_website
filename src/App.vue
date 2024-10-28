<script setup lang="ts">
import TheNavigation from './components/TheNavigation.vue'
</script>

<template>
  <header class="fixed w-screen z-10">
    <TheNavigation />
  </header>
  <main class="px-2 pt-5">
    <RouterView />
  </main>
</template>
