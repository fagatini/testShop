export type TShopItem = {
    id:number,
    name:string,
    price:number,
    attr: {
        color:string,
        format:string,
    }
}

export const shopItemsConst:TShopItem[] = [
    {
        "id": 1, 
        "name": "бумага", 
        "price": 1000, 
        attr: {
            "color": "белый",
            "format": "A4"
        }
    }, 
    {
        "id": 2, 
        "name": "бумага", 
        "price": 2000, 
        attr: {
            "color": "белый",
            "format": "A3"
        }
    }
]