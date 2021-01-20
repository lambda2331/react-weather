import { AxiosResponse } from 'axios'

export function successCallback<T> (response: AxiosResponse<T>): T {
  return response.data
}

export function errorCallback (error: Error) {
  return Promise.reject(error)
}
