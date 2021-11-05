import { combineReducers, configureStore } from '@reduxjs/toolkit'
import newsSlice from './newsSlice'

const rootReducer = combineReducers({
  getNews: newsSlice,
})
const z = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
export const store = configureStore({
  reducer: rootReducer,
  z,
})
