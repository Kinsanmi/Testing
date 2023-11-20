import { Link } from "react-router-dom";
import logo from '../Logo .png'
import './Header.css';

export const Header = () => {
  return (
    <>
    <header>
        <div className="container">
            <Link><img src={logo} alt="kumo-logo" /></Link>

            <ul className="navbar">
                <li><Link to='/home'>home</Link></li>
                <li><Link to='/shop'>shop</Link></li>
                <li><Link>product</Link></li>
                <li><Link>page</Link></li>
                <li><Link>docs</Link></li>
            </ul>


            <div className="hamburger">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </div>
    </header>
    </>
  )
}
