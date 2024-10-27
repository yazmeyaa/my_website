<script lang="ts" setup>
import TeleegramSvgRepo from '@/components/AppTelegramSvgIcon.vue'

type StackItem = {
  title: string;
  href: string;
}

const stack: StackItem[] = [
  { title: "TypeScript", href: "https://www.typescriptlang.org/" },
  { title: "NodeJS", href: "https://nodejs.org/en" },
  { title: "Go", href: "https://go.dev/" },
  { title: "React", href: "https://react.dev/" },
  { title: "Svelte", href: "https://svelte.dev/" },
  { title: "Next.JS", href: "https://nextjs.org/" },
  { title: "Express", href: "https://expressjs.com/" },
  { title: "SQL", href: "https://ru.wikipedia.org/wiki/SQL/" },
  { title: "PostgreSQL", href: "https://www.postgresql.org/" },
  { title: "SQLite", href: "https://www.sqlite.org/" },
]
</script>

<template>
  <div class="w-[calc(100vw-4rem)] h-[calc(100vh-3rem)] relative">
    <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <section
        class="p-4 rounded-2xl bg-neutral-700  max-w-full sm:max-w-full md:max-w-md lg:max-w-lg  bg-[rgba(24,24,24,0.8)]">
        <header>
          <h1 class="text-3xl">Hello, my name is Eugene!</h1>
        </header>

        <main>
          <p class="text-2xl">
            <span>I am {{ new Date().getFullYear() - 1998 }} years old developer.</span>
          </p>
          <span class="text-xl">Here is my stack:</span>
          <ul class="mt-1 flex gap-2 flex-wrap">
            <li v-for="item in stack"
              class="p-1 bg-green-600 rounded-md hover:bg-green-700 transition-all hover:scale-105">
              <a :href="item.href" :title="item.title" target="_blank">
                <span>{{ item.title }}</span>
              </a>
            </li>
          </ul>
          <p>
            You can see my projects on <RouterLink to="/projects" class="underline font-bold">projects page.
            </RouterLink>
            <br>
            Or you can see what i am working on right now on my <a class="underline font-bold"
              href="https://github.com/yazmeyaa" target="_blank">Github page</a>.
          </p>

        </main>

        <footer>
          <div class="flex gap-5 p-2 justify-center">
            <a href="https://t.me/future_undefined" title="Telegram contact"
              class="p-1 rounded-full bg-blue-500 hover:bg-blue-500 transition-colors">
              <TeleegramSvgRepo :height="32" :width="32" />
            </a>
            <a href="https://github.com/yazmeyaa" title="Github account">github</a>
          </div>
        </footer>
      </section>
    </div>
  </div>
</template>
