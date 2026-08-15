export interface MokaErrorResponse<T> {
  data: T
  meta: {
    code: number
    error_message?: string
    error_type?: string
  }
}