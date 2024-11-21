import { IsString } from 'class-validator';
import { Product } from 'src/core/modules/products/domain/Product';
import { EntityValidator } from 'src/core/shared/domain/EntityValidator';

describe('EntityValidator unit tests', () => {
  it('should be able allow a valid entity that comply with given rules', () => {
    const validator = new EntityValidator(
      new StubValidationRules({ name: 'test' }),
    );
    validator.validate();

    expect(validator.error).toBeUndefined();
  });

  it("should be able deny a invalid entity that don't comply with given rules", () => {
    //@ts-expect-error
    const validator = new EntityValidator(new StubValidationRules({ name: 1 }));
    validator.validate();

    expect(validator.error.errors).toHaveLength(1);
  });
});

class StubValidationRules {
  @IsString()
  name: string;

  constructor(data: { name: string }) {
    this.name = data.name;
  }
}
