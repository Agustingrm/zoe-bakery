import formatMoney from "./formatMoney";
import calculateCakePrice from "./calculateCakePrice";
import { getImage } from "gatsby-plugin-image";

export default function attachNamesAndPrices(order, cakes) {
  return order.map((item) => {
    const cake = cakes.find((cake) => cake.id === item.id);
    return {
      ...item,
      name: cake.name,
      thumbnail: cake.image?.asset?.gatsbyImageData.images?.fallback?.src,
      price: formatMoney(calculateCakePrice(cake.price, item.size)),
    };
  });
}
