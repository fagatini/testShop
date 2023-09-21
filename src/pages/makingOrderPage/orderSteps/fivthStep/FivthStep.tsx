import React, { ChangeEvent, FC, useEffect, useState } from "react";
import { IOrder, emptyOrder } from "../../../../utils/types/IOrder";
import { useNavigate } from "react-router-dom";
import { appSelector } from "../../../../store/hooks";

export const FivthStep: FC = () => {
  const navigate = useNavigate();
  const data = appSelector<IOrder>((state) => state.order);
  useEffect(() => console.log(data), [data]);
  const handleNext = () => navigate("/main");

  return (
    <div>
      <div>
        <div>{data.fio}</div>
        <div>{data.phone}</div>
        <div>{data.snils}</div>
        <img src={URL.createObjectURL(data.foto) || ""} className="image" alt="" style={{ width: 300 }} />
        <div>{data.getBy}</div>
        <div>
          {data.getBy === "доставка" ? (
            <div>{data.selfTakePlace}</div>
          ) : (
            <div>
              {data.index} {data.adress}
            </div>
          )}
        </div>
      </div>
      <button onClick={handleNext}>finish</button>
    </div>
  );
};
