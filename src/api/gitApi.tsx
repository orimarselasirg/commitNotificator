import axios from 'axios'

export const apiGit = axios.create({
  baseURL: 'http://localhost:8080/',
  headers:{
    token: '56789'
  }
})