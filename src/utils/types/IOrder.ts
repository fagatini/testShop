import { TGetBy, TPlaces } from "../../pages/makingOrderPage/orderSteps/FourthStep/FourthStep";

export interface IOrder {
    fio:string,
    phone:string,
    foto:any,
    snils:string,
    getBy:TGetBy,
    selfTakePlace?:TPlaces,
    adress?:string,
    index?:string,
  }

export const emptyOrder: IOrder = {
    fio:'',
    phone:'',
    foto:null,
    snils:'',
    getBy:'самовывоз',
  };