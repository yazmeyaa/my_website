import { defineStore } from 'pinia'

const PROJECTS_STORE_ID = 'projects' as const

export const useProjects = defineStore(PROJECTS_STORE_ID, {})
