import Logo from '../Image/Logo .png';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <>
    <section>
        <div className="login">
            <div className="kumo">
                <img src={Logo} alt="" />
                <p>3256 Grant Street Longview, <br />TX United Kingdom</p>
                <p>01601348732</p>
                <p>incredible1916@gmail.com</p>
            </div>

            <div className="support">
                <h4>Support</h4>
                <Link to='/about'>Contact</Link>
                <Link>About page</Link>
                <Link>size guide</Link>
                <Link>shipping & returns</Link>
                <Link>privacy</Link>
            </div>

            <div className="support">
                <h4>shop</h4>
                <Link>men's shopping</Link>
                <Link>women's shopping</Link>
                <Link>kid's shopping</Link>
                <Link>furniture</Link>
                <Link>discounts</Link>
                
            </div>

            <div className="support">
                <h4>company</h4>
                <Link>about</Link>
                <Link>blog</Link>
                <Link>affiliate</Link>
                <Link>login</Link>
              
            </div>

            <div className="support">
                <h4>subscribe</h4>
                <p>receive updates, hot deals, discounts sent straight in your inbox daily</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p>receive updates, hot deals, discounts sent straight in your inbox daily</p>
            </div>
        </div>
    </section>



    <div className="copy-right">
        <p>Copyright @2023. All Rights Reserved. Designed By Akin With React</p>
    </div>
    </>
  )
}

