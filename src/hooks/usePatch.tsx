import { useMutation } from 'react-query'
import axiosInstance from 'services/axiosInstance'

interface IParams {
  url: string
  payload?: any
  token?: any
}

const patch = async ({ url, payload, token }: IParams) => {
  if (!token) {
    const { data } = await axiosInstance.post(url, payload)
    return data
  } else {
    const authToken = localStorage.getItem('_token')
    const { data } = await axiosInstance.patch(url, payload, { headers: { token: `Bearer ${authToken}` ?? '' } })
    return data
  }
}

const usePatch = () => useMutation(patch)

export default usePatch
