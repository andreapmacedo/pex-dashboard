export function FormatPtBr(value) {
  return value.toLocaleString('pt-BR', { minimumFractionDigits: 2 } );
}

export function FormatNoFraction(value) {
  return value.toLocaleString('pt-BR', { minimumFractionDigits: 0 } );
}