import React, { FC, useEffect, useState } from "react";
import { shopItemsConst } from "../../../../utils/consts/shopItemsConst";

type TStepProps = {
  goNext: () => void;
};

export const SecondStep: FC<TStepProps> = ({ goNext }) => {
  const [cart, setCart] = useState<string[]>([]);
  const [confirmed, setConfirmed] = useState<boolean>(false);
  const [nextDisabled, setNextDisabled] = useState<boolean>(true);

  useEffect(() => setCart(JSON.parse(localStorage.getItem("cart") ?? "[]")), []);

  useEffect(() => setNextDisabled(!confirmed), [confirmed]);

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
        <input type="checkbox" checked={confirmed} onChange={(e) => setConfirmed(e.target.checked)} />
      </div>
      <button onClick={goNext} disabled={nextDisabled}>
        next
      </button>
    </div>
  );
};
