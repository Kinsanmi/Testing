import { Product } from '../assets/Product';
import './Shop.css';
import {More} from '../Pages/More';



export const Shop = () => {


  return (
    <>
    <section>
      <div className="items">
        <div className="products">{Product.map((product, index)=>{
          return <More  key={index} items={product}/>
        })}</div>
      </div>
    </section>
    </>
  )
}

