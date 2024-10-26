export type BaseResponse<T> = {
  code: number
  status: string
  data: T
}
