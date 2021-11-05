import axios from 'axios'

export const getNews = () => {
  return axios.get('http://localhost:7373/news')
}
