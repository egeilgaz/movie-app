import axios from 'axios'
const authAxios = axios.create({
  baseURL: process.env.VUE_APP_API_BASEURL,
  headers: {
    accept: 'application/json',
    'content-type': 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NzNlYzI5MzZmYTZhYThjM2Q4YmU5NmE2MDJkYjUzMCIsInN1YiI6IjYxZDA2OWFlYTI3NTAyMDA4Y2YyMzA0YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8A3GYbT55fV3tb3NBkOaMBYlHzgBmhrM0UzI-lkajB0',
  },
})
export default authAxios
