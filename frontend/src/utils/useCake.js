import { useContext, useState } from "react";
import OrderContext from "../context/OrderContext";
import calculateOrderTotal from "./calculateOrderTotal";
import formatMoney from "./formatMoney";
import attachNamesAndPrices from "./attachNamesAndPrices";

export default function useCake({ cakes, values }) {
  // Context state to hold the order
  const [order, setOrder] = useContext(OrderContext);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  // Function to add things from order
  function addToOrder(orderedCake) {
    setOrder([...order, orderedCake]);
  }
  // Function to remove things from order
  function removeFromOrder(index) {
    setOrder([...order.slice(0, index), ...order.slice(index + 1)]);
  }

  // On submit run this function
  async function submitOrder(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setMessage(null);

    // Gather all the data
    const body = {
      order: attachNamesAndPrices(order, cakes),
      total: formatMoney(calculateOrderTotal(order, cakes)),
      name: values.name,
      email: values.email,
    };
    // Send this to a serverless function when they check out
    const res = await fetch(`${process.env.GATSBY_SERVERLESS_BASE}/placeOrder`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const text = JSON.parse(await res.text());

    // Everything worked?
    if (res.status >= 400 && res.status < 600) {
      setLoading(false);
      setError(text.message);
    } else {
      // It worked!
      setLoading(false);
      setMessage("You can come to pick up your order in 24h! Enjoy");
    }
  }
  return {
    order,
    addToOrder,
    removeFromOrder,
    error,
    loading,
    message,
    submitOrder,
  };
}
