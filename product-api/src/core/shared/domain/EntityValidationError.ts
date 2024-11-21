export class EntityValidationError extends Error {
  constructor(private readonly _errors: ErrorProps[]) {
    super();
  }

  get errors() {
    return this._errors.map((error) => ({ ...error }));
  }
}

type ErrorProps = { field: string; message: string[] };
