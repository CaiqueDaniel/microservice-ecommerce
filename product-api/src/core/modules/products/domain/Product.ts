import { Entity } from '../../../shared/domain/Entity';
import { ProductValidationRules } from './ProductValidationRules';

export class Product extends Entity {
  constructor(
    id: string,
    private _name: string,
    private _description: string,
    private _price: number,
    private _quantity: number,
    private _offerPrice?: number,
  ) {
    super(id);
    this.validate();
  }

  private validate() {
    super.validateWith(new ProductValidationRules(this));
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
