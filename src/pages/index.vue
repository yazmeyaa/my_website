<script lang="ts" setup>
type StackItem = {
  title: string;
  href: string;
}

const stack: StackItem[] = [
  { title: 'TypeScript', href: 'https://www.typescriptlang.org/' },
  { title: 'NodeJS', href: 'https://nodejs.org/en' },
  { title: 'Go', href: 'https://go.dev/' },
  { title: 'React', href: 'https://react.dev/' },
  { title: 'Next.JS', href: 'https://nextjs.org/' },
  { title: 'Svelte', href: 'https://svelte.dev/' },
  { title: 'SvelteKit', href: 'https://svelte.dev/docs/kit/introduction' },
  { title: 'Vue', href: 'https://vuejs.org/' },
  { title: 'PixiJS', href: 'https://pixijs.com/' },
  { title: 'Three.JS', href: 'https://threejs.org/' },
  { title: 'WebGL', href: 'https://ru.wikipedia.org/wiki/WebGL' },
  { title: 'Tailwind', href: 'https://tailwindcss.com/' },
  { title: 'Express', href: 'https://expressjs.com/' },
  { title: 'SQL', href: 'https://ru.wikipedia.org/wiki/SQL/' },
  { title: 'PostgreSQL', href: 'https://www.postgresql.org/' },
  { title: 'SQLite', href: 'https://www.sqlite.org/' }
]
</script>

<template>
  <div class="w-[calc(100vw-4rem)] mx-auto h-[calc(100vh-3rem)] relative">
    <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <section
        class="w-screen max-h-[calc(100vh-3rem)] sm:max-w-3xl box-border p-6 rounded-2xl bg-neutral-700 bg-[rgba(24,24,24,0.90)] border-2 border-neutral-800">
        <header>
          <h1 class="text-3xl">Hello, my name is Eugene!</h1>
        </header>

        <main>
          <p class="text-2xl">
            <span>I am {{ new Date().getFullYear() - 1998 }} years old developer.</span>
          </p>
          <span class="text-xl">Here is my stack:</span>
          <ul class="my-2 flex gap-2 flex-wrap border-2 border-neutral-900 p-2 rounded-md bg-neutral-800">
            <li v-for="item in stack"
                class="bg-lime-900 rounded-md hover:bg-lime-800 transition-all hover:scale-105">
              <a :href="item.href" :title="item.title" target="_blank" class="block h-full w-full m-1">
                <span>{{ item.title }}</span>
              </a>
            </li>
          </ul>
          <p>
            Visit my
<!--            <RouterLink-->
<!--              aria-disabled="true"-->
<!--              aria-description="Not available now."-->
<!--              to="/projects"-->
<!--              class="underline font-bold hover:text-orange-300 transition-colors text-orange-200">-->
<!--              Projects page-->
<!--            </RouterLink>-->
            <RouterLink
              aria-disabled="true"
              aria-description="Not available now."
              to="/projects"
              class="underline font-bold hover:text-orange-300 transition-colors cursor-default pointer-events-none select-none text-gray-400">
              Projects page (NOT AVAILABLE NOW)
            </RouterLink>
            to explore completed projects, or check out my <a
            class="underline font-bold hover:text-orange-300 transition-colors text-orange-200"
            href="https://github.com/yazmeyaa" target="_blank">Github</a> to see what I’m currently working on.
          </p>

        </main>

        <footer class="my-2">
          <h2 class="text-center">Contacts:</h2>
          <div class="flex gap-5 p-2 justify-center">
            <a href="https://t.me/future_undefined" title="Telegram contact"
               class="underline font-bold hover:text-orange-300 transition-colors text-orange-200">
              <span>Telegram</span>
            </a>
            <a href="https://github.com/yazmeyaa" title="Github account"
               class="underline font-bold hover:text-orange-300 transition-colors text-orange-200">github</a>
          </div>
        </footer>
      </section>
    </div>
  </div>
</template>
