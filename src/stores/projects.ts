import { fromResponse, getProjects } from '@/api/projects'
import type { Project } from '@/types/projects'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useToast } from 'vue-toast-notification'

const PROJECTS_STORE_ID = 'projects' as const

export const useProjects = defineStore(PROJECTS_STORE_ID, () => {
  const projects = ref<Project[] | null>(null)
  const $toast = useToast()

  async function fetchProjectsList(): Promise<Project[]> {
    try {
      const response = await getProjects()
      const _projects = fromResponse(response)

      projects.value = _projects

      return _projects
    } catch (error) {
      $toast.error('Не удалось получить список проектов от сервера.', {
        duration: 4000,
      })
      throw error
    }
  }

  return { projects, getProjectsList: fetchProjectsList }
})
