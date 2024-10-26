import type { BaseResponse } from '@/types/api'
import type { ProjectResponse } from '@/types/projects'

export type GetProjectsResponseType = BaseResponse<ProjectResponse[]>
export async function getProjects(): Promise<GetProjectsResponseType> {
  try {
    const url = import.meta.env.VITE_API_URL
    const response = await fetch(url, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }),
    })

    if (!response.ok || response.status !== 200) {
      throw new Error('Error while recieving proejcts from API.')
    }

    const data = await response.json()

    return data as GetProjectsResponseType
  } catch (error) {
    if (error instanceof Error) {
      console.error('Бу испугался не бойся...')
    }
    throw error
  }
}
