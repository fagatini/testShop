import React, { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../store/store";
import { setFourthData } from "../../../../store/slices/orderSlice";

type TStepProps = {
  goNext: () => void;
};

export type TGetBy = "самовывоз" | "доставка";
export type TPlaces = "Москва" | "Воронеж";

export const FourthStep: FC<TStepProps> = ({ goNext }) => {
  const [getBy, setGetBy] = useState<TGetBy>("самовывоз");
  const [fio, setFio] = useState<string>("");
  const [adress, setAdress] = useState<string>("");
  const [index, setIndex] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  const [selfTakePlace, setSelfTakePlace] = useState<TPlaces>("Москва");

  const [nextDisabled, setNextDisabled] = useState<boolean>(true);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (getBy === "самовывоз") {
      setNextDisabled(false);
    } else {
      const regFio = /^[\w-]+ [\w-]+ [\w-]{1,24}$/;
      const regPhone = /^[\+][0-9]{1}?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
      if (regFio.test(fio) && adress.length > 0 && index.length > 0 && regPhone.test(phone)) {
        setNextDisabled(false);
      } else {
        setNextDisabled(true);
      }
    }
  }, [fio, phone, index, adress, getBy]);

  const handleNext = () => {
    if (getBy === "самовывоз") {
      dispatch(setFourthData({ getBy, selfTakePlace }));
    } else {
      dispatch(setFourthData({ getBy, adress, index }));
    }
    goNext();
  };

  return (
    <div>
      <select onChange={(e) => setGetBy(e.target.value as TGetBy)}>
        <option value={"самовывоз"}>Самовывоз</option>
        <option value={"доставка"}>Доставка почтой</option>
      </select>
      {getBy === "доставка" && (
        <div>
          <input placeholder="fio" value={fio} onChange={(e) => setFio(e.target.value)} />
          <input placeholder="adress" value={adress} onChange={(e) => setAdress(e.target.value)} />
          <input placeholder="index" value={index} onChange={(e) => setIndex(e.target.value)} />
          <input placeholder="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
      )}
      {getBy === "самовывоз" && (
        <div>
          <select onChange={(e) => setSelfTakePlace(e.target.value as TPlaces)}>
            <option>Москва</option>
            <option>Воронеж</option>
          </select>
        </div>
      )}

      <button onClick={handleNext} disabled={nextDisabled}>
        next
      </button>
    </div>
  );
};
