import team from '../Components//common/Image/team-1.jpg';
import './Review.css';
import B1 from '../Components/common/Image/bl-1.png';
import B2 from '../Components/common/Image/bl-2.png';
import B3 from '../Components/common/Image/bl-3.png';





export const Review = () => {
    const year = new Date().getFullYear();
  return (
    <>
    <section>
        <div className="review">
            <h3>Client Reviews</h3>
            <img src={team} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium placeat et magni <br />a sunt rerum suscipit nisi eius beatae. Dolorum, animi reiciendis! Fugiat aperiam laborum aliquam mollitia.<br /> Veritatis, dolore perspiciatis.</p>
            <h2>Mark Jevenue</h2>
            <p>CEO of Addle</p>
        </div>
    </section>

    <section className='random'>
        <div className="update">
            <h2>New Updates</h2>

            <div className="summer">
                <div className="type">
                    <img src={B1} alt="bedroom" />
                    <p>26 Jan {year}</p>
                    <h4>Lets start bringing sale on this <br />summer vacation</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias fuga corrupti, eos facere consequatur, minima laborum nisi culpa ducimus tenetur hic dolores est, dicta harum! Voluptatem aliquid saepe fugiat expedita.</p>

                    <h6>Continue Reading...</h6>
                </div>
                <div className="type">
                    <img src={B2} alt="bedroom" />
                    <p>17 July {year}</p>
                    <h4>Lets start bringing sale on this <br />summer vacation</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias fuga corrupti, eos facere consequatur, minima laborum nisi culpa ducimus tenetur hic dolores est, dicta harum! Voluptatem aliquid saepe fugiat expedita.</p>

                    <h6>Continue Reading...</h6>
                </div>
                <div className="type">
                    <img src={B3} alt="bedroom" />
                    <p>10 Aug {year}</p>
                    <h4>Lets start bringing sale on this <br />summer vacation</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias fuga corrupti, eos facere consequatur, minima laborum nisi culpa ducimus tenetur hic dolores est, dicta harum! Voluptatem aliquid saepe fugiat expedita.</p>
                    

                    <h6>Continue Reading...</h6>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

