import React, { FC } from "react";

type TStepProps = {
  handleNext: () => void;
};

export const FirstStep: FC<TStepProps> = ({ handleNext }) => {
  return (
    <div>
      <input placeholder="fio" />
      <input placeholder="phone" />
      <div>
        <label>Agreed</label>
        <input type="checkbox" />
      </div>
      <button onClick={handleNext}>next</button>
    </div>
  );
};
