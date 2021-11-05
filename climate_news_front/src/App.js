import { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { routes } from './routes'

import Navbar from './components/Navbar/Navbar'
import { getNews } from './services/news/news'
import { useDispatch } from 'react-redux'
import { getAllNews } from './redux/newsSlice'

function App() {
  const dispatch = useDispatch()

  const fetchNews = async () => {
    const response = await getNews()
    dispatch(getAllNews(response.data))
  }

  useEffect(() => {
    fetchNews()
  }, [])

  return (
    <div className='dark:bg-background h-screen dark:text-white'>
      <div className='mx-60'>
        <Router>
          <Navbar />
          <Switch>
            {routes.map(({ exact = false, address, component }) => (
              <Route key={address} exact={exact} path={address}>
                {}
                {component}
              </Route>
            ))}
          </Switch>
        </Router>
      </div>
    </div>
  )
}

export default App
