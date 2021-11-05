import { Link } from 'react-router-dom'
import { routes } from '../../routes'

const Navbar = () => {
  return (
    <>
      <h2 className='text-4xl'>News</h2>
      <div className='mt-5'>
        {routes.map(({ address, name }) => (
          <Link
            key={address}
            className='mr-5 hover:text-blue-700 transition duration-300 color'
            to={address}>
            {name}
          </Link>
        ))}
      </div>
      <hr className='mt-3' />
    </>
  )
}

export default Navbar
