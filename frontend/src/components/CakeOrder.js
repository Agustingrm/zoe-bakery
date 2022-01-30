import React from "react";
import PreorderItemStyles from "../styles/PreorderItemStyles";
import calculateCakePrice from "../utils/calculateCakePrice";
import formatMoney from "../utils/formatMoney";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function CakeOrder({ order, cakes, removeFromOrder }) {
  return (
    <>
      {order.map((singleOrder, index) => {
        const cake = cakes.find((cake) => cake.id === singleOrder.id);
        return (
          <PreorderItemStyles key={singleOrder.id}>
            <GatsbyImage width="50" height="50" image={getImage(cake.image.asset)} alt={cake.name} />
            <h2>{cake.name}</h2>
            <p>
              {formatMoney(calculateCakePrice(cake.price, singleOrder.size))}
              <button
                type="button"
                className="remove"
                title={`Remove ${singleOrder.size} ${cake.name} from Order`}
                onClick={() => removeFromOrder(index)}
              >
                &times;
              </button>
            </p>
          </PreorderItemStyles>
        );
      })}
    </>
  );
}
