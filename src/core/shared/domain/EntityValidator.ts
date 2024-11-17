import { validateSync, ValidationError } from 'class-validator';
import { EntityValidationError } from './EntityValidationError';

export class EntityValidator {
  private _errors: ValidationError[] = [];

  constructor(private readonly rules: object) {}

  validate() {
    this._errors = validateSync(this.rules);
  }

  get error() {
    if (!this._errors.length) return;

    return new EntityValidationError(
      this._errors.map((error) => ({
        field: error.property,
        message: Object.values(error.constraints),
      })),
    );
  }
}
