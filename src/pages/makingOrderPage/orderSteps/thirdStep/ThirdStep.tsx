import React, { ChangeEvent, FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../store/store";
import { setThirdData } from "../../../../store/slices/orderSlice";

type TStepProps = {
  goNext: () => void;
};

export const ThirdStep: FC<TStepProps> = ({ goNext }) => {
  const [snils, setSnils] = useState<string>("");
  const [foto, setFoto] = useState<File>();
  const [previeFoto, setPrevieFoto] = useState("");

  const [nextDisabled, setNextDisabled] = useState<boolean>(true);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const reg = /^[0-9]{4}?[-\s\.]?[0-9]{4}?[-\s\.]?[0-9]{4}?[-\s\.]?[0-9]{4}$/;
    if (reg.test(snils) && foto) {
      setNextDisabled(false);
    } else {
      setNextDisabled(true);
    }
  }, [snils, foto]);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFoto(e.target.files[0]);
      setPrevieFoto(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleNext = () => {
    dispatch(setThirdData({ snils, foto }));
    goNext();
  };

  return (
    <div>
      <input placeholder="snils" value={snils} onChange={(e) => setSnils(e.target.value)} />
      <div>
        <input type="file" accept=".png, .jpg" onChange={handleFileChange} />
        <img src={previeFoto || ""} className="image" alt="" style={{ width: 300 }} />
      </div>
      <button onClick={handleNext} disabled={nextDisabled}>
        next
      </button>
    </div>
  );
};
