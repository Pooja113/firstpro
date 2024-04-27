import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
})

const AxiosInterceptor = (children: any) => {
  instance.interceptors.request.use(
    function (request) {
      return request
    },

    function (error) {
      return Promise.reject(error)
    },
  )

  instance.interceptors.response.use(
    function (response) {
      return response
    },
    function (error) {
      return Promise.reject(error)
    },
  )

  return children
}

export { AxiosInterceptor }

export default instance
