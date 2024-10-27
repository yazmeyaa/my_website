export type ProjectResponse = Project &
  Partial<Pick<Project, 'githubUrl' | 'href'>>

export type Project = {
  id: number
  name: string
  description: string
  img: string
  href: string | null
  githubUrl: string | null
}
