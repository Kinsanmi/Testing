import './Home.css';
import { NavLink } from 'react-router-dom';
import { Category } from '../Service/Category';
import Image from '../Components/common/Image/Image.png';
import { Review } from '../Service/Review';
import { Slide, Fade } from 'react-reveal';
import { useEffect } from 'react';


export const Home = () => {

  useEffect(()=>{
    const home = document.querySelector('span')
    console.log(home)
  })
 


  return (
    <>
    <section className='slide'>
      <div className="page">

        <Fade left duration={1800} delay={800}>
        <div className="home-text">
          <h4>Best Destination around the world</h4>
          <h1>Travel, enjoy and live a new and full life</h1>
          <p>Built Wicket longer admire do barton vanity itself do in it <br />preferred to sportsmen it engrossed listening. Park gate <br />sell they west hard for them</p>
          <div className="button">
            <NavLink to='/more' target='_blank'>Find out more</NavLink>
            <span>Play Demo</span>
          </div>
        </div>
        </Fade>

        <Fade right duration={1800} delay={800}>
        <div className="image">
          <img src={Image} alt="" />
        </div>
        </Fade>
      </div>
    </section>

      <Category />


    <Slide left duration={1500} delay={1800}>
      <Review />
    </Slide>
    </>
  )
}

