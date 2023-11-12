import React from 'react';
import { Shop } from './Shop';
import '../styles/SignUp.css';
import Fade from 'react-reveal/Fade';
import { useState } from 'react';



import {data} from '../faqs';



export const SignUp = () => {
  /* const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') { 
      if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
        setShow(false); 
      } else { // if scroll up show the navbar
        setShow(true);  
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY); 
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]); */

  


  // ACCORDION
  const [activeIndex, setActiveIndex]= useState(-1);

  const handleClick = (index) =>{
    setActiveIndex(index === activeIndex ? -1 : index)
  }


  return (
    <>
    {/* <nav className={`active ${show && 'hidden'}`}></nav> */}
    <Fade left duration={1500}>
      <Shop />
    </Fade>


<div>
  <div className="accordion">
    {data.map((item, index)=>{
      return <>
      <div key={index}>
        <h3 onClick={()=>{handleClick(index)}}>{item.question}</h3>
        <span>{activeIndex === index ? <p>-</p> : <p>+</p>}</span>

       
      </div>
      {index === activeIndex && <p className={activeIndex ? 'ease down' : 'ease'}>{item.answer}</p>}

      </>
    })}
  </div>
</div>


    </>
  );
};

