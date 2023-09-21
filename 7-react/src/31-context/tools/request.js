import axios from 'axios'
import { getToken } from './utils'
import { BASE_URL } from './constants'

const request = axios.create({
  baseURL: BASE_URL
})

request.interceptors.request.use(
  function (config) {
    const token = getToken()

    if (token) {
      config.headers.setAuthorization(token)
    }

    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

request.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    return Promise.reject(error)
  }
)

export default request

// function myRequest (url) {
//   return new Promise((resolve, reject) => {
//     // Request interceptor

//     fetch(url)
//       .then(response => response.json())
//       .then(data => {
//         // Response Interceptor
//         resolve({ data })
//       })
//   })
// }
