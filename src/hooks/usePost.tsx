import { useMutation } from 'react-query'
import axiosInstance from 'services/axiosInstance'

interface IParams {
  url: string
  payload?: any
  token?: any
}

const post = async ({ url, payload, token }: IParams) => {
  if (!token) {
    const { data } = await axiosInstance.post(url, payload)
    return data
  } else {
    const authToken = localStorage.getItem('_token')
    const { data } = await axiosInstance.post(url, payload, { headers: { token: `Bearer ${authToken} ` ?? '' } })
    return data
  }
}

const usePost = () => useMutation(post)

export default usePost
