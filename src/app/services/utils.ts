export function kebabToCamelCase(value: string): string {
  return value.replace(/-./g, v => v[1].toUpperCase())
}

export function getIsoDate(date: Date): string {
  return `${date.getFullYear()}-${getMonth(date.getMonth())}-${date.getDate()}`;
}

export function getMonth(value: number): string {
  const month = `${value + 1}`;
  return month.padStart(2, '0');
}
