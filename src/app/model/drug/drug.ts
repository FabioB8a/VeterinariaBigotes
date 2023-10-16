import { Treatment } from "../treatment/treatment";

export class Drug {
    id?: number;
    name: string;
    buyPrice?: number;
    sellPrice?: number;
    itemsAvailable?: number;
    itemsSell?: number;
    treatments?: Treatment[];

    constructor(name: string, buyPrice: number, sellPrice: number, itemsAvailable: number, itemsSell: number) {
      this.name = name;
      this.buyPrice = buyPrice;
      this.sellPrice = sellPrice;
      this.itemsAvailable = itemsAvailable;
      this.itemsSell = itemsSell;
    }

  }
