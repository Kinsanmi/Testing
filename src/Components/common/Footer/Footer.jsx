import { Link } from 'react-router-dom';
import '../Footer/Footer.css';
import logo from '../Logo .png';

export const Footer = () => {
  return (
    <>
    <footer>
        <div className='end-text'>
            <div className='kumo-text'>
                <img src={logo} alt="" />
                <p>3256 Grant Street LongView, <br />TX United kingdom 755471</p>
                <p>01601348732</p>
                <p>incredible@1916@gmail.com</p>
            </div>

            <div className="context">
                <h3>support</h3>
                <Link>Contact us</Link>
                <Link>about pag</Link>
                <Link>size guide</Link>
                <Link>shipping & returns</Link>
                <Link>privacy</Link>
            </div>

            <div className="context">
                <h3>shop</h3>
                <Link>men's shopping</Link>
                <Link>women's shopping</Link>
                <Link>kid's shopping</Link>
                <Link>furniture</Link>
                <Link>discounts</Link>
            </div>

            <div className="context">
                <h3>company</h3>
                <Link>about</Link>
                <Link>blog</Link>
                <Link>affiliate</Link>
                <Link>login</Link>
            </div>

            <div className="context">
                <h3>subscribe</h3>
                <p>Receive updates, hot deals, discounts sent straight in your inbox daily</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti!</p>
                <p>Receive updates, hot deals, discounts sent straight in your inbox daily</p>
            </div>
        </div>
    </footer>
    </>
  )
}

