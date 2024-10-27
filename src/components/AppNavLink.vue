<script lang="ts" setup>
interface NavLinkProps {
  to: string;
}
const props = defineProps<NavLinkProps>()
</script>

<template>
  <RouterLink class="text-2xl hover:text-orange-500 transition-all" :to=props.to>
    <slot />
  </RouterLink>
</template>
