import React, { FC, useEffect, useState } from "react";
import { shopItemsConst } from "../../../../utils/consts/shopItemsConst";

type TStepProps = {
  handleNext: () => void;
};

export const SecondStep: FC<TStepProps> = ({ handleNext }) => {
  const [cart, setCart] = useState<string[]>([]);

  useEffect(() => setCart(JSON.parse(localStorage.getItem("cart") ?? "[]")), []);

  return (
    <div>
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
      </div>
      <div>
        <label>Confirmed</label>
        <input type="checkbox" />
      </div>
      <button onClick={handleNext}>next</button>
    </div>
  );
};
