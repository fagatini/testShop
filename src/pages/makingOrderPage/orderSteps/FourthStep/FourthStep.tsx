import React, { FC, useState } from "react";

type TStepProps = {
  handleNext: () => void;
};

type TGetBy = "самовывоз" | "доставка";

export const FourthStep: FC<TStepProps> = ({ handleNext }) => {
  const [getBy, setGetBy] = useState<TGetBy>("самовывоз");
  return (
    <div>
      <select onChange={(e) => setGetBy(e.target.value as TGetBy)}>
        <option value={"самовывоз"}>Самовывоз</option>
        <option value={"доставка"}>Доставка почтой</option>
      </select>
      {getBy === "доставка" && (
        <div>
          <input placeholder="fio" />
          <input placeholder="adress" />
          <input placeholder="index" />
          <input placeholder="phone" />
        </div>
      )}
      {getBy === "самовывоз" && (
        <div>
          <select>
            <option>Москва</option>
            <option>Воронеж</option>
          </select>
        </div>
      )}

      <button onClick={handleNext}>finish</button>
    </div>
  );
};
