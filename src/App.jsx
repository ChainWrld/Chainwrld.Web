import { useState, useMemo } from "react";

export default function App() {
  const products = [
    { id: 1, name: "Silver Pendant", price: 14.99 },
    { id: 2, name: "Gold Pendant", price: 16.99 },
    { id: 3, name: "Silver Ring", price: 12.99 },
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const total = useMemo(
    () => cart.reduce((sum, item) => sum + item.price, 0),
    [cart]
  );

  return (
    <div style={{ padding: 30 }}>
      <h1>CHAINWRLD 💎</h1>

      <h2>Products</h2>
      {products.map((p) => (
        <div key={p.id}>
          <h3>{p.name}</h3>
          <p>£{p.price}</p>
          <button onClick={() => addToCart(p)}>Add to cart</button>
        </div>
      ))}

      <h2>Cart</h2>
      {cart.map((item, i) => (
        <p key={i}>{item.name}</p>
      ))}

      <h3>Total: £{total.toFixed(2)}</h3>
    </div>
  );
}
