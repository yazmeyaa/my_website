import { useProjects } from '../../stores/projects';
<script lang="ts" setup>
import { onMounted } from 'vue';
import { useProjects } from '../../stores/projects'
const projects = useProjects();

onMounted(() => {
  projects.getProjectsList();
})
</script>

<template>
  <div>
    <h1>Projects</h1>
    <div class="grid grid-cols-3 gap-6 mx-8 my-4">
      <div v-for="item in projects.projects" :key="item.id" class="flex flex-col
        py-6 px-6
        bg-neutral-800
        border-neutral-700
        border-x border-y
        rounded-3xl
        transition-all transform-gpu
        hover:scale-105">
        <header>
          <h3 class="text-2xl">{{ item.name }}</h3>
          <img :src="item.img" :alt="item.name" />
          <span>Tags:</span>
          <ul class="flex gap-2 flex-wrap">
            <span class="rounded-lg bg-slate-800 text-neutral-50 px-2 py-1" v-for="i in 12">
              item {{ i }}
            </span>
          </ul>
        </header>
        <p>
          <span>{{ item.description }}</span>
        </p>

        <div class="flex flex-col">
          <a v-if="item.href !== null" :href="item.href!" target="_blank">Ссылка на пример</a>
          <a v-if="item.githubUrl !== null" :href="item.githubUrl!" target="_blank">Ссылка на Github</a>
        </div>
      </div>
    </div>
  </div>
</template>
