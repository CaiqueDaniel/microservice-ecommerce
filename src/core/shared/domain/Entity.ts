import { EntityValidator } from './EntityValidator';

export class Entity {
  constructor(public readonly id: string) {}

  protected validateWith(rules: object) {
    const validator = new EntityValidator(rules);
    validator.validate();
    if (validator.error) throw validator.error;
  }
}
