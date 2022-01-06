import { Link } from 'react-router-dom';

const Navbar = ({}) => {
  return (
    <>
      <nav>
        <ul>
          <Link to='/'>
            <li>Home</li>
          </Link>
          <Link to='/services'>
            <li>Ser</li>
          </Link>
          <Link to='/workers'>
            <li>Workers</li>
          </Link>
        </ul>
      </nav>
    </>
  )
}

export default Navbar;