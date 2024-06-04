import {Link} from 'react-router-dom'
import {FiShoppingBag} from 'react-icons/fi'

const Header = () => {
  return (
    <nav>
      <h1>Logo</h1>

      <div>
        <Link to={'/'}>Home</Link>
        <Link to={'/cart'}><FiShoppingBag/>
        <p>{90}</p>
        </Link>
       
      </div>
    </nav>
  )
}

export default Header