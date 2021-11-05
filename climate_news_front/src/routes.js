import Guardian from './pages/Guardian/Guardian'
import Homenews from './pages/HomeNews/Homenews'
import Telegraph from './pages/Telegraph/Telegraph'
import BBC from './pages/BBC/BBC'
import Times from './pages/Times/Times'

export const routes = [
  {
    name: 'Guardian',
    address: '/news/guardian',
    component: <Guardian />,
    exact: true,
  },
  {
    name: 'Telegraph',
    address: '/news/telegraph',
    component: <Telegraph />,
    exact: true,
  },
  {
    name: 'HomeNews',
    address: '/news/homenews',
    component: <Homenews />,
    exact: true,
  },
  {
    name: 'BBC',
    address: '/news/bbc',
    component: <BBC />,
    exact: true,
  },
  { name: 'Times', address: '/news/times', component: <Times />, exact: true },
]
