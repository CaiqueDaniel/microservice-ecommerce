import { Entity } from "../../../shared/domain/Entity";

export class Product extends Entity {
  constructor(
    id: string,
    private _name: string,
    private _description: string,
    private _price: number,
    private _quantity: number,
    private _offerPrice?: number
  ) {
    super(id);
  }

  get name() {
    return this._name;
  }

  get description() {
    return this._description;
  }

  get price() {
    return this._price;
  }

  get quantity() {
    return this._quantity;
  }

  get offerPrice() {
    return this._offerPrice;
  }
}
