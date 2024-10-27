<script lang="ts" setup>
import AppNavLink from './AppNavLink.vue'
</script>

<template>
  <nav class="flex gap-2 px-2 py-2 bg-neutral-800">
    <AppNavLink to="/">Home</AppNavLink>
    <AppNavLink to="/projects">Projects</AppNavLink>
  </nav>
</template>
