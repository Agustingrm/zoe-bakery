import calculateCakePrice from "./calculateCakePrice";

export default function calculateOrderTotal(order, cakes) {
  return order.reduce((runningTotal, singleOrder) => {
    const cake = cakes.find((singleCake) => singleCake.id === singleOrder.id);
    return runningTotal + calculateCakePrice(cake.price, singleOrder.size);
  }, 0);
}
