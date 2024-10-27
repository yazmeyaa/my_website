import type { BaseResponse } from '@/types/api'
import type { Project, ProjectResponse } from '@/types/projects'

export type GetProjectsResponseType = BaseResponse<ProjectResponse[]>
export async function getProjects(): Promise<GetProjectsResponseType> {
  const url = import.meta.env.VITE_API_URL + '/api/projects'
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
}

export function fromResponse(response: GetProjectsResponseType): Project[] {
  console.log('Projects response is =>>', { response })
  return response.data.map(x => ({
    id: x.id,
    description: x.description,
    githubUrl: x.githubUrl ?? null,
    href: x.href ?? null,
    img: x.img,
    name: x.name,
  }))
}
