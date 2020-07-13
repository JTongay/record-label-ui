export function composeValidators(...validators: any[]) {
  return (value: string) => {
    return validators.reduce((error, validator) => error || validator(value), undefined);
  };
}

export function isRequired(value: string): string | undefined {
  return value ? undefined : 'Required';
}

export function verifyMinLength(length: number) {
  return (value: string): string | undefined => {
    return value.length > length ? undefined : `${value} must be greater than length ${length}`;
  };
}
