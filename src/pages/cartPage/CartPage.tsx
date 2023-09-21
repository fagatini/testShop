import React, { useEffect, useState } from "react";
import { shopItemsConst } from "../../utils/consts/shopItemsConst";
import { useNavigate } from "react-router-dom";

export const CartPage = () => {
  const [cart, setCart] = useState<string[]>([]);
  const navigate = useNavigate();

  useEffect(() => setCart(JSON.parse(localStorage.getItem("cart") ?? "[]")), []);
  const handleClearCart = () => {
    localStorage.removeItem("numcart");
    localStorage.removeItem("cart");
    setCart([]);
  };
  return (
    <div>
      {shopItemsConst
        .filter((item) => cart?.find((id) => Number(id) === item.id))
        .map((item) => (
          <div key={item.id}>
            <div>{item.name}</div>
            <div>{item.price}</div>
            <div>{item.attr.color}</div>
            <div>{item.attr.format}</div>
          </div>
        ))}
      <button onClick={handleClearCart}>clear cart</button>
      <button onClick={(e) => navigate("/order")}>make order</button>
      {/*make if cart isnt empty*/}
    </div>
  );
};
