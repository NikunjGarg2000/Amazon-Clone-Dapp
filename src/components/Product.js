import { useEffect, useState } from "react";
import { ethers } from "ethers";

// Components
import Rating from "./Rating";

import close from "../assets/close.svg";

const Product = ({ item, provider, account, dappazon, togglePop }) => {
  const [order, setOrder] = useState(null)
  
  const buyHandler = async () => {
    console.log("buying...");
  };

  return (
    <div className="product">
      <div className="product">
        <div className="product__details">
          <div className="product__image">
            <img src={item.image} alt="Product" />
          </div>
          <div className="product__overview">
            <h1>{item.name}</h1>

            <Rating value={item.Rating} />

            <hr />

            <p>{item.address}</p>

            <h2>{ethers.utils.formatUnits(item.cost.toString(), "ether")} </h2>

            <hr />

            <h2>Overview</h2>

            <p>
              {item.description}
              This is very good product and no product can be better than this.
              You have to buy this, hence purchase it now.
            </p>
          </div>

          <div className="product__order">
            <h1>{ethers.utils.formatUnits(item.cost.toString(), "ether")}</h1>

            <p>
              FREE delivery <hr />
              <strong>
                {new Date(Date.now() + 345600000).toLocaleDateString(
                  undefined,
                  { weekday: "long", month: "long", day: "numeric" }
                )}
              </strong>
            </p>

            {item.stock > 0 ? <p>In Stock.</p> : <p>Out of stock.</p>}

            <button className="product__buy" onClick={buyHandler}>
              Buy Now
            </button>

            <p>
              <small>Ships from</small>Dappazon
            </p>
            <p>
              <small>Sold by</small>Dappazon
            </p>

            {order && (
              <div className="product__bought">
                Item bought on <br />
                <strong>
                  {new Date(Number(order.time.toString() + '000')).toLocaleDateString(
                    undefined, 
                    {
                      weekday: 'long',
                      hour: 'numeric',
                      minute: 'numeric',
                      second: 'numeric'
                    }
                  )}
                </strong>
              </div>
            )}
          </div>

          <button onClick={togglePop} className="product__close">
            <img src={close} alt="Close" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
