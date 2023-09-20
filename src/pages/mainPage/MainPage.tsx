import React from "react";
import { shopItemsConst } from "../../utils/consts/shopItemsConst";

export const MainPage = () => {
  const handleAddToCart = (id: number) => {
    let cart: number[] = JSON.parse(localStorage.getItem("cart") ?? "[]");

    if (!cart.find((cartid) => cartid === id)) {
      cart.push(id);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  };
  return (
    <div>
      {shopItemsConst.map((item) => (
        <div key={item.id}>
          <div>{item.name}</div>
          <div>{item.price}</div>
          <div>{item.attr.color}</div>
          <div>{item.attr.format}</div>
          <button onClick={(e) => handleAddToCart(item.id)}>add to cart</button>
        </div>
      ))}
    </div>
  );
};
