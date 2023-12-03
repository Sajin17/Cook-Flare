import {Link} from 'react-router-dom'
import './Navbar.css'
import Searchbar from './Searchbar';
import useTheme from '../hooks/useTheme';

const Navbar = () => {
   const {color, changeColor} = useTheme()

    return ( 
        <div className='navbar' style={{background: color}}>
        <nav>
        <Link to='/' className='brand'>
        <h2>Cook Flare</h2>
        </Link>
        <Searchbar />
        <Link to='/create'>Create Recipe</Link>
        </nav>
        </div>
     );
}
 
export default Navbar;