/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from 'react-query'
import axiosInstance from 'services/axiosInstance'

const useGet = (key: string, url: string, token?: boolean, configs?: any) => {
  const get = async () => {
    let headers = {}
    if (token) {
      const accessToken = localStorage.getItem('_token')
      headers = { token: `Bearer ${accessToken}` }
    }

    const { data } = await axiosInstance.get(url, { headers: headers })

    return data
  }
  const defaultConfig = {
    enabled: false,
    refetchOnWindowFocus: false,
    retry: false,
    ...configs,
  }
  return useQuery(key, get, defaultConfig)
}

export default useGet
