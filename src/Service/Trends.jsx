import { data } from "../Data/Data"

export const Trends = () => {
  return (
    <>
    <section>
        <div className="product">
            <h2>Our trending <span>products</span></h2>

            <div className="pro-item">
                {data.map((item, index)=>{
                    return (
                        <div key={index} className="pro-type">
                            <img src={item.Image} alt="products" />
                            <p className="sales">{item.title}</p>
                            <div className="pro-text">
                                <h4>{item.context}</h4>
                                <p>{item.price}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </section>
    </>
  )
}

