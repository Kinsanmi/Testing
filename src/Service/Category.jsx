import Group1 from '../Components/common/Image/Group 1.png';
import Group2 from '../Components/common/Image/Group 2.png'
import Group3 from '../Components/common/Image/Group 3.png';
import Group4 from '../Components/common/Image/Group 4.png';
import './Category.css';
import Img1 from '../Components/common/Image/1.png';
import Img2 from '../Components/common/Image/2.png';
import Img3 from '../Components/common/Image/3.png';
import Img4 from '../Components/common/Image/4.jpg';
import Img5 from '../Components/common/Image/5.jpg';
import Img6 from '../Components/common/Image/6.jpg';
import Img7 from '../Components/common/Image/7.jpg';
import Img8 from '../Components/common/Image/8.jpg';
import { useEffect, useRef, useState } from 'react';
import {Slide, Fade, Bounce} from 'react-reveal';

import { Link } from 'react-router-dom';



export const Category = () => {

    const [ timerDays , setTimerDays] = useState('');
    const [ timerHours , setTimerHours] = useState('');
    const [ timerMinutes , setTimerMinutes] = useState('');
    const [ timerSeconds , setTimerSeconds] = useState('');
 
    let interval = useRef();
    const countDown = ()=>{
        const time = new Date('October 30, 2023, 00:24:25').getTime();
    
        let interval = setInterval(() => {

            const currentDate = new Date().getTime();
            const dif = time- currentDate;

            const second = 1000;
            const minute = 60 * second;
            const hour = 60* minute;
            const day = 24 * hour;
            
            const days = Math.floor(dif/day);
            const hours = Math.floor((dif % day)/hour);
            const minutes = Math.floor((dif % hour)/ minute);
            const seconds = Math.floor((dif % minute) /second);



            if(dif <= 0){
                clearInterval(interval.current)
            }else{
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }
            }, 1000);
    };

    /* function saveInLocalStorage(time){
        localStorage.setItem('timer', time);
    }

    function getTimeFromLocalStorage(){
        return localStorage.getItem('timer');
    } */

    useEffect(()=>{
        /* const localTimer = getTimeFromLocalStorage();

        if(localTimer){
            interval.current = setInterval(() => {
                countDown(+localTimer)
            }, 1000);
        } else{
            const countDown = new Date().getTime() + 14 * 24 * 60 * 1000;
            saveInLocalStorage(localTimer);
            interval.current = setInterval(() => {
                countDown(+localTimer)
            }, 1000);  
         } */
        countDown();


         return (()=>{
            clearInterval(interval);
         })
    },[])


    const [price, setPrice] = useState(99)
    const [quantity, setQuantity] = useState(1)


    const increaseItem = ()=>{
        setPrice(price +99)
        setQuantity(quantity + 1)

        if(price ===50){
            return price
        }
    }



    const decreaseItem = ()=>{
        if(price > 99){
            setPrice(price -99)
        }

        if(quantity > 1){
            setQuantity(quantity - 1)
        }
    }


    const isOpacity = false;

  return (
    
    <>
    <section>
    
        <div className="center-text">
            <div className="text" style={{opacity: isOpacity ? '0.3' : '1'}}>
                <h4>Category</h4>
                <h2>We offer Best Services</h2>
            </div>
            
            <div className="cate-pro">
                <Fade left duration={1600} delay={800} >
                <div className="row">
                    <img src={Group1} alt="solar" />
                    <h5>Calculated Weather</h5>
                    <p>Built Wicket longer <br />admire do barton vanity itself do in it military</p>
                    <div className="timer">
                        {timerDays}d :&nbsp; {timerHours}h :&nbsp;{timerMinutes}m :&nbsp;{timerSeconds}s
                    </div>
                </div>

                <div className="row" style={{opacity :isOpacity ? '0' : '0'}}>
                    <img src={Group2} alt="solar" />
                    <h5>best flights</h5>
                    <p>We deliver outsourced aviation services for military customers all over</p>
                    <div className="timer">
                        {timerDays}d :&nbsp; {timerHours}h :&nbsp;{timerMinutes}m :&nbsp;{timerSeconds}s
                    </div>
                </div>
                </Fade>

                <Fade right duration={1600} delay={800} >
                <div className="row">
                    <img src={Group3} alt="solar" />
                    <h5>Local events</h5>
                    <p>We deliver outsourced aviation services for military customers</p>
                    <div className="timer">
                        {timerDays}d :&nbsp; {timerHours}h :&nbsp;{timerMinutes}m :&nbsp;{timerSeconds}s
                    </div>
                </div>

                <div className="row">
                    <img src={Group4} alt="solar" />
                    <h5>Customization</h5>
                    <p>Barton vanity itself do in it. Prefers to men it engrossed listening</p>
                    <div className="timer">
                        {timerDays}d :&nbsp; {timerHours}h :&nbsp;{timerMinutes}m :&nbsp;{timerSeconds}s
                    </div>
                </div>
                </Fade>
                
            </div>
           
        </div>


        {/* Destination-section */}

        <div className="dest-text">
            <h2>Our trending <span>Products</span></h2>

            <div className="product">
                <div className="deals">
                    <img src={Img1} alt="" />
                    <p className='sale'>Sale</p>
                    <div className="brand">
                        <p>Rating</p>
                        <p>Half Running Set</p>
                        <h4>$99 - $129</h4>
                        <div className="button">
                            <button onClick={increaseItem}>+</button>
                            <p>Price: ${price}</p>
                            <button onClick={decreaseItem}>-</button>
                            <p>Quantity:{quantity}</p>
                        </div>
                    </div>
                </div>

                <Fade left duration={1500}>
                <Link to='/shop/02'>
                <div className="deals">
                    <img src={Img2} alt="" />
                    <p className='sale'>hot</p>
                    <div className="brand">
                        <p>Rating</p>
                        <p>Formal Men Lowers</p>
                        <h4>$99 - $129</h4>
                    </div>
                </div>
                </Link>
                </Fade>

                <Slide right duration={1500}>
                <Link to='/shop/03'>
                <div className="deals">
                    <img src={Img3} alt="" />
                    <p className='sale'>hot</p>
                    <div className="brand">
                        <p>Rating</p>
                        <p>Formal Men Lowers</p>
                        <h4>$99 - $129</h4>
                    </div>
                </div>
                </Link>
                </Slide>

                <Bounce top duration={1500} delay={1000}>
                <div className="deals">
                    <img src={Img4} alt="" />
                    <p className='sale'>Sale</p>
                    <div className="brand">
                        <p>Rating</p>
                        <p>Half Fancy Lady Dress</p>
                        <h4>$99 - $129</h4>
                    </div>
                </div>
                </Bounce>
                <div className="deals">
                    <img src={Img5} alt="" />
                    <p className='sale'>hot</p>
                    <div className="brand">
                        <p>Rating</p>
                        <p>Flex Flax Jeans</p>
                        <h4>$99 - $129</h4>
                    </div>
                </div>
                <div className="deals">
                    <img src={Img6} alt="" />
                    <p className='sale'>hot</p>
                    <div className="brand">
                        <p>Rating</p>
                        <p>Fancy Salwar Suits</p>
                        <h4>$99 - $129</h4>
                    </div>
                </div>
                <div className="deals">
                    <img src={Img7} alt="" />
                    <p className='sale'>Sale</p>
                    <div className="brand">
                        <p>Rating</p>
                        <p>Printed Straight Kurta</p>
                        <h4>$99 - $129</h4>
                    </div>
                </div>
                <div className="deals">
                    <img src={Img8} alt="" />
                    <p className='sale'>Sale</p>
                    <div className="brand">
                        <p>Rating</p>
                        <p>Collot Full Dress</p>
                        <h4>$99 - $129</h4>
                    </div>
                </div>
            </div>
        </div>
     
    </section>
    </>
  )
}
