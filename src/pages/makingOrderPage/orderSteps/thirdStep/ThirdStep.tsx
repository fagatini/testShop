import React, { ChangeEvent, FC, useState } from "react";

type TStepProps = {
  handleNext: () => void;
};

export const ThirdStep: FC<TStepProps> = ({ handleNext }) => {
  const [foto, setFoto] = useState<File>();
  const [previeFoto, setPrevieFoto] = useState("");

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFoto(e.target.files[0]);
      setPrevieFoto(URL.createObjectURL(e.target.files[0]));
    }
  };
  return (
    <div>
      <input placeholder="snils" />
      <div>
        <input type="file" accept=".png, .jpg" onChange={handleFileChange} />
        <img src={previeFoto || ""} className="image" alt="" />
      </div>
      <button onClick={handleNext}>next</button>
    </div>
  );
};
