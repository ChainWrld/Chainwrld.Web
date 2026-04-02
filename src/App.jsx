import { Menu, ShoppingBag, X } from "lucide-react";
import { useMemo, useState } from "react";

export default function App() {
  const products = [
    {
      id: 1,
      name: "Silver Pendant",
      price: 14.99,
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=900&q=80",
      tag: "Popular",
      category: "Pendant",
      material: "Silver",
      description: "A clean everyday pendant with a polished silver finish.",
    },
    {
      id: 2,
      name: "Gold Pendant",
      price: 16.99,
      image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=900&q=80",
      tag: "Premium",
      category: "Pendant",
      material: "Gold",
      description: "A bold gold pendant made to stand out.",
    },
    {
      id: 3,
      name: "Silver Ring",
      price: 12.99,
      image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=900&q=80",
      tag: "Everyday",
      category: "Ring",
      material: "Silver",
      description: "Minimal silver ring built for daily wear.",
    },
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
    <div style={{ padding: "30px" }}>
      <h1>CHAINWRLD 💎</h1>

      <h2>Products</h2>
      {products.map((p) => (
        <div key={p.id} style={{ marginBottom: "20px" }}>
          <img src={p.image} width="150" />
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

