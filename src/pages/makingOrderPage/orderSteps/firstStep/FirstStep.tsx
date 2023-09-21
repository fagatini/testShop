import React, { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../store/store";
import { setFirstData } from "../../../../store/slices/orderSlice";

type TStepProps = {
  goNext: () => void;
};

export const FirstStep: FC<TStepProps> = ({ goNext }) => {
  const [fio, setFio] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [agreed, setAgreed] = useState<boolean>(false);

  const [nextDisabled, setNextDisabled] = useState<boolean>(true);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const regPhone = /^[\+][0-9]{1}?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    const regFio = /^[\w-]+ [\w-]+ [\w-]{1,24}$/;
    if (regFio.test(fio) && regPhone.test(phone) && agreed) {
      setNextDisabled(false);
    } else {
      setNextDisabled(true);
    }
  }, [fio, phone, agreed]);

  const handleNext = () => {
    dispatch(setFirstData({ fio, phone }));
    goNext();
  };

  return (
    <div>
      <input placeholder="fio" value={fio} onChange={(e) => setFio(e.target.value)} />
      <input placeholder="+7(832)312-321321" value={phone} onChange={(e) => setPhone(e.target.value)} />
      <div>
        <label>Agreed</label>
        <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} />
      </div>
      <button onClick={handleNext} disabled={nextDisabled}>
        next
      </button>
    </div>
  );
};
