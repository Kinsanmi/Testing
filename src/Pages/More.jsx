import '../styles/SignUp.css';


export const More = (props) => {

  const {productName, price, productImage} = props.items


  return (
    <>

    <div className="cart-items">
      <img src={productImage} alt="" />
      <p>{productName}</p>
      <p>{price}</p>
    </div>
    </>
  )
}

