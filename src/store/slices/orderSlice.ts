import { createSlice } from "@reduxjs/toolkit";
import { IOrder } from "../../utils/types/IOrder";

const initialState: IOrder = {
  fio:'',
  phone:'',
  foto:null,
  snils:'',
  getBy:'самовывоз',
};

const order = createSlice({
  name: "order",
  initialState,
  reducers: {
    setFirstData(state, action) {
      state.fio = action.payload.fio
      state.phone = action.payload.phone
    },
    setThirdData(state, action) {
      state.snils = action.payload.snils
      state.foto = action.payload.foto
    },
    setFourthData(state, action) {
      state.getBy = action.payload.getBy
      if(state.getBy === 'самовывоз') {
        state.selfTakePlace = action.payload.selfTakePlace
      } else {
        state.adress = action.payload.adress
        state.index = action.payload.index
      }
    }
  },
  extraReducers: (builder) => {},
});

export const {setFirstData, setThirdData, setFourthData} = order.actions;
export default order.reducer;
