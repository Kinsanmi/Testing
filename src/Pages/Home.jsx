import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import { Trends } from '../Service/Trends';

export const Home = () => {
  return (
    <> 
    <article className='text'>
      <div className="collect-text">
        <p>winter collection</p>
        <h1>New winter <br />collection 2023</h1>
        <p className='search'>there's nothing like trend</p>
        <Link className='btn'>Shop</Link>
      </div>
    </article>

    <Trends />
    </>
  )
}

