import React from "react";
import { graphql } from "gatsby";
import SEO from "../components/SEO";
import useForm from "../utils/useForm";
import calculateCakePrice from "../utils/calculateCakePrice";
import formatMoney from "../utils/formatMoney";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import OrderStyles from "../styles/OrderStyles";
import PreorderItemStyles from "../styles/PreorderItemStyles";
import useCake from "../utils/useCake";
import CakeOrder from "../components/CakeOrder";
import calculateOrderTotal from "../utils/calculateOrderTotal";

export default function OrderPage({ data }) {
  const { values, updateValue } = useForm({
    name: "",
    email: "",
  });
  const cakes = data.cakes.nodes;
  const { order, addToOrder, removeFromOrder, error, loading, message, submitOrder } = useCake({
    cakes,
    inputs: values,
  });

  return (
    <>
      <SEO title="Preorder a Cake" />
      <OrderStyles>
        <fieldset>
          <legend>Your Info</legend>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" value={values.name} onChange={updateValue} />
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" value={values.email} onChange={updateValue} />
        </fieldset>
        <fieldset className="menu">
          <legend>Menu</legend>
          {cakes.map((cake) => (
            <PreorderItemStyles key={cake.id}>
              <GatsbyImage width="50" height="50" image={getImage(cake.image.asset)} alt={cake.name} />
              <div>
                <h2>{cake.name}</h2>
              </div>
              <div>
                {["Slice", "Cake"].map((size) => (
                  <button
                    type="button"
                    onClick={() =>
                      addToOrder({
                        id: cake.id,
                        size,
                      })
                    }
                  >
                    {size} {formatMoney(calculateCakePrice(cake.price, size))}
                  </button>
                ))}
              </div>
            </PreorderItemStyles>
          ))}
        </fieldset>
        <fieldset className="order">
          <legend>Order</legend>
          <CakeOrder order={order} removeFromOrder={removeFromOrder} cakes={cakes} />
        </fieldset>
        <fieldset>
          <h3>Your Total is {formatMoney(calculateOrderTotal(order, cakes))}</h3>
          <div>{error ? <p>Error: {error}</p> : ""}</div>
          <button type="submit">{loading ? "Placing Order..." : "Order"}</button>
        </fieldset>
      </OrderStyles>
    </>
  );
}

export const query = graphql`
  query {
    cakes: allSanityCake {
      nodes {
        name
        id
        slug {
          current
        }
        price
        image {
          asset {
            gatsbyImageData(width: 100)
          }
        }
      }
    }
  }
`;
