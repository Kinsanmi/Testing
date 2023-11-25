import { Link } from "react-router-dom";
import '../Pages/MegaMenu.css';
import logo from '../Components/Image/6.jpg';
import home from '../Components/home21.png';
import phone from '../Components/phones21.png';

export const MegaMenu = () => {
  return (
    <>
    <div className="megaMenu-main submega-main home-menu-fixed" >
        <ul className="megaheading">
            <li className="mega-heading-box"><Link>Baby, Kids and Toys</Link>
            <ul>
                <li> 
                    <div className="megatop-wrapper">
                        <div className="mega-inner bgwhite"  >
                            <div className="mega">
                                <div className="mega-heading"><h5>Fashion for Girls</h5></div>
                                <ul>
                                    <li><Link>sets</Link></li>
                                    <li><Link>Dresses</Link></li>
                                    <li><Link>Top, Jackets & Sweatshirts</Link></li>
                                    <li><Link>Denim, Trousers & Leggings</Link></li>
                                    <li><Link>Underwear & Socks</Link></li>
                                    <li><Link>Watches</Link></li>
                                    <li><Link>Shoes</Link></li>
                                    <li><Link>Sleepwear</Link></li>
                                    <li><Link>Bodysuits & Playsuits</Link></li>
                                    <li><Link>Highlighters</Link></li>
                                    <li><Link>setting spray </Link></li>
                                    <li><Link>makeup remover</Link></li>
                                </ul>
                                <div className="mega-heading margin-top"><h6>Travel & Safety Gear</h6></div>
                                <ul>
                                    <li><Link>Car seats, Strollers & Carriers</Link></li>
                                    <li><Link>Baby Monitors & Safety Gates</Link></li>
                                    <li><Link>Mobile Beds & Nets</Link></li>
                                    <li><Link>High Chairs & Booster Seats</Link></li>
                                    <li><Link>contact lenses</Link><span className="new-prod"><Link>NEW</Link></span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="mega-inner bggrey">
                            <div className="mega">
                                <div className="mega-heading"><Link>Eyes</Link></div>
                                <ul>
                                    <li><Link>kajal</Link></li>
                                    <li><Link>eyeliner</Link></li>
                                    <li><Link>mascara</Link></li>
                                    <li><Link>eyes</Link></li>
                                    <li><Link>eye browl</Link></li>
                                    <li><Link>eye</Link></li>
                                    <li><Link>false</Link></li>
                                    <li><Link>eye makeup</Link></li>
                                    <li><Link>under eye</Link></li>
                                    <li><Link>contact lenses</Link><span className="new-prod"><Link>nNEW</Link></span></li>
                                </ul>
                            <div className="mega-heading margin-top"><Link>Makeup kits</Link></div>
                            <ul>
                                <li><Link>Eye</Link></li>
                                <li><Link>face</Link></li>
                                <li><Link>customize your palette</Link></li>
                            </ul>
                            </div>
                        </div>
                    </div>
                    <div className="mega-inner bgwhite">
                        <div className="mega">
                            <div className="mega-heading"><Link>Lips</Link></div>
                            <ul>
                                <li><Link>Lipstick</Link></li>
                                <li><Link>lip gloss</Link></li>
                                <li><Link>lip liner</Link></li>
                                <li><Link>lip</Link></li>
                                <li><Link>lip stain</Link></li>
                            </ul>
                            <div className="mega-heading margin-top"><Link>Nails</Link></div>
                            <ul>
                                <li><Link>Nails</Link></li>
                                <li><Link>Nail art</Link></li>
                                <li><Link>Nail care</Link></li>
                                <li><Link>Nail polish</Link></li>
                                <li><Link>Manicure</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="mega-inner bggrey">
                        <div className="mega">
                            <div className="mega-heading"><Link>Tools and brushes</Link></div>
                            <ul>
                                <li><Link>Face</Link></li>
                                <li><Link>Blush</Link></li>
                                <li><Link>Eye</Link></li>
                                <li><Link>Lip Brush</Link></li>
                                <li><Link>Sponges</Link></li>
                                <li><Link>markup pouches</Link><span className="new-prod"><Link>NEW</Link></span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="mega-inner bgwhite">
                        <div className="mega">
                            <div className="mega-heading"><Link>Top Brands</Link></div>
                            <ul>
                                <li><Link>M.A.C</Link></li>
                                <li><Link>Maybelline</Link></li>
                                <li><Link>L'oreal</Link></li>
                                <li><Link>Lakme</Link></li>
                                <li><Link>Nykas</Link></li>
                                <li><Link>Nyx</Link><span className="new-prod"><Link>NEW</Link></span></li>
                            </ul>
                        </div>
                    </div>

                    <div className="mega-inner bggrey">
                        <div className="mega-menu-image"><img src={logo} alt="" /></div>
                    </div>
                </li>
            </ul>
            </li>



            <li className="mega-heading-box"><Link>Skin</Link>
            <ul>
                <li> 
                    <div className="megatop-wrapper">
                        <div className="mega-inner bgwhite"  >
                            <div className="mega">
                                <div className="mega-heading"><Link>Skin Product</Link></div>
                                <ul>
                                    <li><Link>Face Primer</Link></li>
                                    <li><Link>Concealer</Link></li>
                                    <li><Link>foundation</Link></li>
                                    <li><Link>compact</Link></li>
                                    <li><Link>contour</Link></li>
                                    <li><Link>loose powder</Link></li>
                                    <li><Link>blush</Link></li>
                                    <li><Link>bronzer</Link></li>
                                    <li><Link>BB and CC cream</Link></li>
                                    <li><Link>Highlighters</Link></li>
                                    <li><Link>setting spray </Link></li>
                                    <li><Link>makeup remover</Link></li>
                                </ul>
                                <div className="mega-heading margin-top"><Link>Body art</Link></div>
                            </div>
                        </div>
                        <div className="mega-inner bggrey">
                            <div className="mega">
                                <div className="mega-heading"><Link>Eyes</Link></div>
                                <ul>
                                    <li><Link>kajal</Link></li>
                                    <li><Link>eyeliner</Link></li>
                                    <li><Link>mascara</Link></li>
                                    <li><Link>eyes</Link></li>
                                    <li><Link>eye browl</Link></li>
                                    <li><Link>eye</Link></li>
                                    <li><Link>false</Link></li>
                                    <li><Link>eye makeup</Link></li>
                                    <li><Link>under eye</Link></li>
                                    <li><Link>contact lenses</Link><span className="new-prod"><Link>nNEW</Link></span></li>
                                </ul>
                            <div className="mega-heading margin-top"><Link>Makeup kits</Link></div>
                            <ul>
                                <li><Link>Eye</Link></li>
                                <li><Link>face</Link></li>
                                <li><Link>customize your palette</Link></li>
                            </ul>
                            </div>
                        </div>
                    </div>
                    <div className="mega-inner bgwhite">
                        <div className="mega">
                            <div className="mega-heading"><Link>Lips</Link></div>
                            <ul>
                                <li><Link>Lipstick</Link></li>
                                <li><Link>lip gloss</Link></li>
                                <li><Link>lip liner</Link></li>
                                <li><Link>lip</Link></li>
                                <li><Link>lip stain</Link></li>
                            </ul>
                            <div className="mega-heading margin-top"><Link>Nails</Link></div>
                            <ul>
                                <li><Link>Nails</Link></li>
                                <li><Link>Nail art</Link></li>
                                <li><Link>Nail care</Link></li>
                                <li><Link>Nail polish</Link></li>
                                <li><Link>Manicure</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="mega-inner bggrey">
                        <div className="mega">
                            <div className="mega-heading"><Link>Tools and brushes</Link></div>
                            <ul>
                                <li><Link>Face</Link></li>
                                <li><Link>Blush</Link></li>
                                <li><Link>Eye</Link></li>
                                <li><Link>Lip Brush</Link></li>
                                <li><Link>Sponges</Link></li>
                                <li><Link>markup pouches</Link><span className="new-prod"><Link>NEW</Link></span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="mega-inner bgwhite">
                        <div className="mega">
                            <div className="mega-heading"><Link>Top Brands</Link></div>
                            <ul>
                                <li><Link>M.A.C</Link></li>
                                <li><Link>Maybelline</Link></li>
                                <li><Link>L'oreal</Link></li>
                                <li><Link>Lakme</Link></li>
                                <li><Link>Nykas</Link></li>
                                <li><Link>Nyx</Link><span className="new-prod"><Link>NEW</Link></span></li>
                            </ul>
                        </div>
                    </div>

                    <div className="mega-inner bggrey">
                        <div className="mega-menu-image"><img src={home} alt="" /></div>
                    </div>
                </li>
            </ul>
            </li>



            <li className="mega-heading-box"><Link>Hair</Link>
            <ul>
                <li> 
                    <div className="megatop-wrapper">
                        <div className="mega-inner bgwhite"  >
                            <div className="mega">
                                <div className="mega-heading"><h5>Hair styles</h5></div>
                                <ul>
                                    <li><Link>Face Primer</Link></li>
                                    <li><Link>Concealer</Link></li>
                                    <li><Link>foundation</Link></li>
                                    <li><Link>compact</Link></li>
                                    <li><Link>contour</Link></li>
                                    <li><Link>loose powder</Link></li>
                                    <li><Link>blush</Link></li>
                                    <li><Link>bronzer</Link></li>
                                    <li><Link>BB and CC cream</Link></li>
                                    <li><Link>Highlighters</Link></li>
                                    <li><Link>setting spray </Link></li>
                                    <li><Link>makeup remover</Link></li>
                                </ul>
                                <div className="mega-heading margin-top"><Link>Body art</Link></div>
                            </div>
                        </div>
                        <div className="mega-inner bggrey">
                            <div className="mega">
                                <div className="mega-heading"><Link>Eyes</Link></div>
                                <ul>
                                    <li><Link>kajal</Link></li>
                                    <li><Link>eyeliner</Link></li>
                                    <li><Link>mascara</Link></li>
                                    <li><Link>eyes</Link></li>
                                    <li><Link>eye browl</Link></li>
                                    <li><Link>eye</Link></li>
                                    <li><Link>false</Link></li>
                                    <li><Link>eye makeup</Link></li>
                                    <li><Link>under eye</Link></li>
                                    <li><Link>contact lenses</Link><span className="new-prod"><Link>nNEW</Link></span></li>
                                </ul>
                            <div className="mega-heading margin-top"><Link>Makeup kits</Link></div>
                            <ul>
                                <li><Link>Eye</Link></li>
                                <li><Link>face</Link></li>
                                <li><Link>customize your palette</Link></li>
                            </ul>
                            </div>
                        </div>
                    </div>
                    <div className="mega-inner bgwhite">
                        <div className="mega">
                            <div className="mega-heading"><Link>Lips</Link></div>
                            <ul>
                                <li><Link>Lipstick</Link></li>
                                <li><Link>lip gloss</Link></li>
                                <li><Link>lip liner</Link></li>
                                <li><Link>lip</Link></li>
                                <li><Link>lip stain</Link></li>
                            </ul>
                            <div className="mega-heading margin-top"><Link>Nails</Link></div>
                            <ul>
                                <li><Link>Nails</Link></li>
                                <li><Link>Nail art</Link></li>
                                <li><Link>Nail care</Link></li>
                                <li><Link>Nail polish</Link></li>
                                <li><Link>Manicure</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="mega-inner bggrey">
                        <div className="mega">
                            <div className="mega-heading"><Link>Tools and brushes</Link></div>
                            <ul>
                                <li><Link>Face</Link></li>
                                <li><Link>Blush</Link></li>
                                <li><Link>Eye</Link></li>
                                <li><Link>Lip Brush</Link></li>
                                <li><Link>Sponges</Link></li>
                                <li><Link>markup pouches</Link><span className="new-prod"><Link>NEW</Link></span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="mega-inner bgwhite">
                        <div className="mega">
                            <div className="mega-heading"><Link>Top Brands</Link></div>
                            <ul>
                                <li><Link>M.A.C</Link></li>
                                <li><Link>Maybelline</Link></li>
                                <li><Link>L'oreal</Link></li>
                                <li><Link>Lakme</Link></li>
                                <li><Link>Nykas</Link></li>
                                <li><Link>Nyx</Link><span className="new-prod"><Link>NEW</Link></span></li>
                            </ul>
                        </div>
                    </div>

                    <div className="mega-inner bggrey">
                        <div className="mega-menu-image"><img src={phone} alt="" /></div>
                    </div>
                </li>
            </ul>
            </li>



            <div  className="heading"><Link to='sales'>Hair</Link></div>
            <div className="mega-heading-box"><Link className="offer-hover" id="offer-block"></Link></div>
        </ul>
    </div>
    </>
  )
}

