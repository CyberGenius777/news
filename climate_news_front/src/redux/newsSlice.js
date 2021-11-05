import { createSlice } from '@reduxjs/toolkit'

const newsSlice = createSlice({
  name: 'getNews',
  initialState: {
    news: [],
  },
  reducers: {
    getAllNews(state, action) {
      state.news.push(action.payload)
    },
    getNewsByName(state, action) {
      state.news.filter((news) => news.source === action.payload)
    },
  },
})

export const { getAllNews, getNewsByName } = newsSlice.actions
export default newsSlice.reducer
