import { useState } from "react";
import {carOption} from './faqs';
import { menuItem } from "./faqs";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";


export const Head = (props) => {

  const age = 15;
  const isType = true;
  const [count, setCount] = useState(0);
  const [navbar, setNavBar] = useState(true);


  useEffect(()=>{
    const items = document.querySelector('.menu-items');

    console.log(items)
  })

  

  //Animation of scroll NOT WORKING

  /* const scroll = ()=>{
    const reveal = document.querySelectorAll('.reveal');

    for (let i = 0; i < reveal.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = reveal[i].getBoundingClientRect().top;
      const elementVisible = 150

      if(elementTop < windowHeight - elementVisible){
        reveal[i].classList.add('active');
      }else{reveal[i].classList.remove('active');}


        window.addEventListener('scroll', reveal);
      
    }
  }
  

  useEffect(()=>{
    scroll()
  },[])
 */

    
const hero = [
    {
        id: 1,
        cover: 'knows',
        category: 'Featured',
        title: 'Goggle to boost android security in few days',
        authorName: 'Salman',
        time: '23 Sept 2023'
    },
    {
        id: 2,
        cover: 'unknown',
        category: 'sport',
        title: 'More than billion football fans attend Brazil world cup',
        authorName: 'Alex',
        time: '24 Sept 2023'
    },
    {
        id: 3,
        cover: 'knows not',
        category: 'Products',
        title: 'Starting a new company is easy and requires capital',
        authorName: 'Jane',
        time: '26 Sept 2023'
    }
]

  const [selectedCar, setSelectedCar] = useState(null);

  const handleCarOption = (id)=>{
    setSelectedCar(id)
  }


  return (
    <>
    <article className="hero">
      <div className="container-text">
        {hero.map((item, key)=>{
          return <>
          <div className="box">
            <div className="img">
                <img key={key.id} src={item.cover} alt="" />
            </div>
            <div className="text">
                <span>{item.category}</span>
                <h1>{item.title}</h1>
            </div>

            <div className="flex">
                <p>{item.authorName}</p>
                <span>{item.time}</span>
            </div>
         </div>
          </>
        })}
      </div>
      <h1>{props.name}</h1>
      {age >=18 ? <p>Above age</p> : <p>Below age</p>}
      <button onClick={() =>{setCount(count + 1)}}>Count</button>
      <p>{count}</p>
      <button onClick={() =>{setNavBar(!navbar)}}>Show</button>
      <h2>{navbar ? <h4>Found</h4> : <h4>Not found</h4>}</h2>

      <h3 style = {{color: isType ? 'blue' : 'red'}}>Type of color </h3>
    </article>


    {/* HOW TO IMPLEMENT DETAILS AND PRICES TO DISPLAY WHEN CLICKED*/}
    <section>
      <div className="cars">{carOption.map((car)=>{
        return <>
        <div key={car.id} className={selectedCar === car.id ? "selected" : ""} onClick={()=>{handleCarOption(car.id)}}>
          <img src={car.image} alt="" />
          <p>{car.name}</p>
        </div>
        </>
      })}</div>
    </section>

      <nav>
        <ul className="menus">{menuItem.map((menu, index)=>{
          return (
            <>
            <li className="menu-items" key={index}>
              <NavLink to={menu.path}>{menu.title}
              </NavLink>
              <p>{menu.content}</p>
            </li>
            </>
          )
        })}</ul>
      </nav>
    </>
  )
}
