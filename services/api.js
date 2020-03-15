import axios from "axios"

const api = axios.create({
  baseURL: "https://quiz-baianes-backend.herokuapp.com/",
})

export default api
