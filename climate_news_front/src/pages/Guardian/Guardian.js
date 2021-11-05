import { useDispatch, useSelector } from 'react-redux'

import newsSlice, { getNewsByName } from '../../redux/newsSlice'

const Guardian = (props) => {
  const g = getNewsByName('bbc')
  const news = useSelector((state) => console.log(state.getNews))

  console.log(news)
  console.log('bbc: ', g)
  return <div className='text-2xl'>Guardian</div>
}

export default Guardian
