import { Product } from 'src/core/modules/products/domain/Product';
import { ProductBuilder } from 'tests/fixtures/ProductFixture';

describe('Product entity unit tests', () => {
  const data = {
    name: 'name',
    description: 'description',
    price: 3.14,
    quantity: 12,
    offerPrice: 2,
  };

  it('should be able to create', () => {
    const product = new Product(
      crypto.randomUUID(),
      data.name,
      data.description,
      data.price,
      data.quantity,
      data.offerPrice,
    );

    expect(product.name).toBe(data.name);
    expect(product.description).toBe(data.description);
    expect(product.price).toBe(data.price);
    expect(product.quantity).toBe(data.quantity);
    expect(product.offerPrice).toBe(data.offerPrice);
  });

  it.each([
    { ...data, name: undefined },
    { ...data, name: null },
    { ...data, name: '' },
    { ...data, name: 1 },
    { ...data, description: undefined },
    { ...data, description: null },
    { ...data, description: '' },
    { ...data, description: 1 },
    { ...data, price: undefined },
    { ...data, price: null },
    { ...data, price: '' },
    { ...data, price: -1 },
    { ...data, offerPrice: '' },
    { ...data, offerPrice: -1 },
    { ...data, quantity: undefined },
    { ...data, quantity: null },
    { ...data, quantity: '' },
    { ...data, quantity: -1 },
    { ...data, quantity: 0.01 },
  ])('should not be able to create given invalid data', (props) => {
    const action = () => {
      new Product(
        crypto.randomUUID(),
        //@ts-expect-error
        props.name,
        props.description,
        props.price,
        props.quantity,
        props.offerPrice,
      );
    };

    expect(action).toThrowError();
  });

  describe('update method', () => {
    const updatedData = {
      name: 'name 2',
      description: 'description 2',
      price: 314,
      quantity: 1,
      offerPrice: undefined,
    };

    it('should be able to update', () => {
      const product = ProductBuilder.aProduct().build();

      product.update(
        updatedData.name,
        updatedData.description,
        updatedData.price,
        updatedData.quantity,
        updatedData.offerPrice,
      );

      expect(product.name).toBe(updatedData.name);
      expect(product.description).toBe(updatedData.description);
      expect(product.price).toBe(updatedData.price);
      expect(product.quantity).toBe(updatedData.quantity);
      expect(product.offerPrice).toBe(updatedData.offerPrice);
    });
  });
});
